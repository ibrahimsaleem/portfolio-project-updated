// Speech output for the voice assistant. Uses Gemini's text-to-speech for a natural voice and falls back to the
// browser's built-in voice when that fails (quota, network), so the assistant never goes silent.
// Clips play strictly in order; each clip's audio is requested as soon as it's queued, so the next one is usually
// ready by the time the current one ends.

const TTS_MODEL = "gemini-3.8-flash-lite-tts";
const TTS_VOICE = "Charon"; // Gemini prebuilt voice; others: Puck (upbeat), Kore (firm), Aoede (breezy)
const TTS_STYLE = "Say in a warm, friendly, natural conversational tone: ";

// Speech engines read symbols literally; strip what shouldn't be spoken.
export const speakable = (t) =>
  t.replace(/https?:\/\/\S+/g, "").replace(/[*_#`>|]/g, "").replace(/\s+/g, " ").trim();

function pickBrowserVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  const en = voices.filter((v) => /^en(-|_)/i.test(v.lang));
  const prefer = [/natural|neural|premium|enhanced/i, /Google US English/i, /Samantha|Ava|Allison/i, /Google UK English Male|Daniel/i];
  for (const re of prefer) {
    const v = en.find((x) => re.test(x.name));
    if (v) return v;
  }
  return en.find((v) => v.localService) || en[0] || null;
}

function browserSay(text) {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    if (!synth) return resolve();
    const u = new SpeechSynthesisUtterance(text);
    const voice = pickBrowserVoice();
    if (voice) u.voice = voice;
    u.rate = 1.03;
    u.onend = u.onerror = () => resolve();
    synth.speak(u);
  });
}

/** Raw 16-bit PCM (Gemini returns "audio/L16;rate=24000" for some models) into an AudioBuffer. */
function pcmToBuffer(ctx, bytes, mime) {
  const rate = Number(/rate=(\d+)/.exec(mime)?.[1] || 24000);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const samples = Math.floor(bytes.byteLength / 2);
  const buf = ctx.createBuffer(1, samples, rate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < samples; i++) ch[i] = view.getInt16(i * 2, true) / 32768;
  return buf;
}

export function createSpeaker({ apiKey, onSpeaking, onIdle }) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let ctx = null;
  let generation = 0; // bumped by stop(); clips from an older generation are dropped
  let chain = Promise.resolve();
  let pending = 0;
  let current = null;
  let ttsOff = !apiKey || !AudioCtx;

  async function fetchTts(text) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${TTS_MODEL}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: TTS_STYLE + text }] }],
        generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: TTS_VOICE } } } },
      }),
    });
    if (!res.ok) {
      // Out of quota or not allowed: stop asking for the rest of this visit and use the browser voice.
      if (res.status === 429 || res.status === 403 || res.status === 404) ttsOff = true;
      throw new Error(`TTS ${res.status}`);
    }
    const part = (await res.json()).candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
    if (!part) throw new Error("TTS returned no audio");
    const bin = atob(part.inlineData.data);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const mime = part.inlineData.mimeType || "";
    return /L16|pcm/i.test(mime) ? pcmToBuffer(ctx, bytes, mime) : ctx.decodeAudioData(bytes.buffer);
  }

  function playBuffer(buf) {
    return new Promise((resolve) => {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.onended = () => resolve();
      current = src;
      src.start();
    });
  }

  function enqueue(load, text) {
    const gen = generation;
    pending++;
    // Start loading now (in parallel with whatever is playing); play when its turn comes.
    const audio = load().catch(() => null);
    chain = chain
      .then(async () => {
        if (gen !== generation) return;
        const buf = await audio;
        if (gen !== generation) return;
        onSpeaking();
        if (buf) await playBuffer(buf);
        else await browserSay(text);
      })
      .finally(() => {
        if (gen === generation && --pending === 0) onIdle();
      });
  }

  return {
    /** Call inside a click/tap: browsers only allow audio that a user gesture started. */
    unlock() {
      if (!AudioCtx) return;
      if (!ctx) ctx = new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();
    },
    say(text) {
      const clean = speakable(text);
      if (!clean) return;
      enqueue(() => (ttsOff || !ctx ? Promise.reject(new Error("tts off")) : fetchTts(clean)), clean);
    },
    /** A pre-recorded clip (no API call), with `text` spoken by the browser if it can't play. */
    playFile(url, text) {
      enqueue(async () => {
        if (!ctx) throw new Error("no audio context");
        const res = await fetch(url);
        if (!res.ok) throw new Error(`clip ${res.status}`);
        return ctx.decodeAudioData(await res.arrayBuffer());
      }, speakable(text));
    },
    stop() {
      generation++;
      pending = 0;
      chain = Promise.resolve();
      try {
        current?.stop();
      } catch (e) {
        // already ended
      }
      window.speechSynthesis?.cancel();
    },
    busy: () => pending > 0,
  };
}
