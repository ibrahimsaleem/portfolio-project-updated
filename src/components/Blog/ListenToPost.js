import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStop, FaHeadphones } from "react-icons/fa";
import "./AiSecurityLayers.css";

// Reads a post aloud with the browser's built-in voice (no API key, nothing sent anywhere).
// Long text is split into sentence-sized chunks because Chrome cuts off long utterances.
const MAX_CHUNK = 220;

function toChunks(text) {
  const sentences = text.match(/[^.!?\n]+[.!?]*|\S+/g) || [];
  const chunks = [];
  let cur = "";
  sentences.forEach((s) => {
    if ((cur + " " + s).length > MAX_CHUNK && cur) {
      chunks.push(cur.trim());
      cur = s;
    } else {
      cur += " " + s;
    }
  });
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

function readableText(root, title) {
  const clone = root.cloneNode(true);
  clone.querySelectorAll("[data-speech-skip]").forEach((n) => n.remove());
  const parts = [title];
  clone.querySelectorAll("h3,p,li").forEach((el) => {
    if (el.querySelector("h3,p,li")) return; // read leaf blocks only
    const t = el.textContent.replace(/\s+/g, " ").trim();
    if (t) parts.push(t);
  });
  return parts.join(". \n").replace(/LLM(\d\d)/g, "L L M $1").replace(/OWASP/g, "oh wasp").replace(/\bRAG\b/g, "rag");
}

function pickVoice() {
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter((v) => /^en[-_]/i.test(v.lang));
  return en.find((v) => /natural|google|samantha|daniel|karen/i.test(v.name)) || en[0] || null;
}

function ListenToPost({ contentRef, title }) {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [state, setState] = useState("idle"); // idle | playing | paused
  const [rate, setRate] = useState(1);
  const [progress, setProgress] = useState(0);
  const chunks = useRef([]);
  const idx = useRef(0);
  const live = useRef(false); // false once stopped, so a late onend cannot restart speech
  const rateRef = useRef(1);
  const retries = useRef(0);

  const speakFrom = (i) => {
    window.speechSynthesis.cancel();
    idx.current = i;
    live.current = true;
    const next = () => {
      if (!live.current) return;
      if (idx.current >= chunks.current.length) {
        live.current = false;
        setState("idle");
        setProgress(0);
        return;
      }
      const u = new window.SpeechSynthesisUtterance(chunks.current[idx.current]);
      const v = pickVoice();
      if (v) u.voice = v;
      u.lang = (v && v.lang) || "en-US";
      u.rate = rateRef.current;
      u.onend = () => {
        retries.current = 0;
        idx.current += 1;
        setProgress(Math.round((idx.current / chunks.current.length) * 100));
        next();
      };
      u.onerror = (e) => {
        if (!live.current) return;
        if ((e.error === "interrupted" || e.error === "canceled") && retries.current < 2) {
          retries.current += 1;
          setTimeout(next, 300); // something else cut in; say this sentence again
          return;
        }
        live.current = false;
        setState("idle");
      };
      window.speechSynthesis.speak(u);
    };
    next();
  };

  const stop = () => {
    live.current = false;
    window.speechSynthesis.cancel();
    setState("idle");
    setProgress(0);
  };

  const onMain = () => {
    if (state === "playing") {
      window.speechSynthesis.pause();
      setState("paused");
    } else if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
    } else if (contentRef.current) {
      chunks.current = toChunks(readableText(contentRef.current, title));
      setState("playing");
      speakFrom(0);
    }
  };

  const onRate = (e) => {
    const r = Number(e.target.value);
    setRate(r);
    rateRef.current = r;
    if (state !== "idle") {
      setState("playing");
      speakFrom(idx.current); // restart this sentence at the new speed
    }
  };

  // stop talking when the reader leaves the post
  useEffect(() => () => { live.current = false; if (supported) window.speechSynthesis.cancel(); }, [supported]);

  if (!supported) return null;

  return (
    <div className="listen" role="group" aria-label="Listen to this post">
      <button type="button" className="listen-btn" onClick={onMain}>
        {state === "playing" ? <FaPause aria-hidden="true" /> : state === "paused" ? <FaPlay aria-hidden="true" /> : <FaHeadphones aria-hidden="true" />}
        {state === "playing" ? "Pause" : state === "paused" ? "Resume" : "Listen to this post"}
      </button>
      {state !== "idle" && (
        <button type="button" className="listen-stop" onClick={stop}>
          <FaStop aria-hidden="true" /> Stop
        </button>
      )}
      <label className="visually-hidden" htmlFor="listen-speed" style={{ position: "absolute", left: -9999 }}>Speed</label>
      <select id="listen-speed" className="listen-speed" value={rate} onChange={onRate}>
        <option value={0.9}>0.9x</option>
        <option value={1}>1x</option>
        <option value={1.25}>1.25x</option>
        <option value={1.5}>1.5x</option>
      </select>
      {state !== "idle" && (
        <div className="listen-track" aria-hidden="true"><div style={{ width: `${progress}%` }} /></div>
      )}
    </div>
  );
}

export default ListenToPost;
