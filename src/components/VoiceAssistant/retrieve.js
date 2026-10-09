// Picks the knowledge chunks most relevant to a question (BM25 keyword scoring), so the model only sees the few
// excerpts it needs. No embeddings and no extra API calls: it runs in the browser in well under a millisecond.

const STOPWORDS = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her him his how i if in into is it its me my of on or our she so tell than that the their them then there these they this to was we were what when where which who why will with would you your about any some also just please ibrahim ibrahims saleem mohammad".split(" ")
);

// Recruiter phrasing mapped to the words the site actually uses.
const SYNONYMS = {
  job: ["experience", "role", "engineer"], work: ["experience", "role"], worked: ["experience"], employer: ["experience"],
  degree: ["education", "university", "master", "bachelor"], study: ["education", "university"], school: ["education", "university"], gpa: ["education"],
  paper: ["publication", "research", "ieee"], papers: ["publication", "research"], published: ["publication", "research"], research: ["publication", "paper"],
  cert: ["certificate"], certification: ["certificate"], certifications: ["certificate"], certified: ["certificate"],
  skills: ["skill", "technical"], tech: ["technical", "skill"], stack: ["technical", "skill"],
  startup: ["founder", "warmnode"], founder: ["startup", "warmnode"],
  pentest: ["penetration", "lima", "pentestthinkingmcp"], pentesting: ["penetration", "lima"], hacking: ["penetration", "security"],
  llm: ["ai", "agentic"], genai: ["ai", "llm"], agents: ["agentic", "agent", "multi"], forensics: ["dfir", "eviltrace"],
  cloud: ["aws", "azure", "databricks"], blog: ["post"], blogs: ["post"],
};

const stem = (w) => w.replace(/(ings|ing|ies|ied|es|ed|s)$/, (m) => (m === "ies" || m === "ied" ? "y" : "")).replace(/(.)\1$/, "$1");

export function tokenize(text) {
  return (String(text).toLowerCase().replace(/at\s*&\s*t\b/g, "att").match(/[a-z0-9+#.]+/g) || [])
    .map((w) => w.replace(/^\.+|\.+$/g, ""))
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

export function buildIndex(chunks) {
  const docs = chunks.map((c) => {
    const tf = new Map();
    // Titles count double: a question naming a project should land on that project.
    for (const w of [...tokenize(c.title), ...tokenize(c.title), ...tokenize(c.text)].map(stem)) tf.set(w, (tf.get(w) || 0) + 1);
    let len = 0;
    tf.forEach((n) => (len += n));
    return { chunk: c, tf, len };
  });
  const df = new Map();
  for (const d of docs) for (const w of d.tf.keys()) df.set(w, (df.get(w) || 0) + 1);
  const avgLen = docs.reduce((s, d) => s + d.len, 0) / Math.max(docs.length, 1);
  return { docs, df, avgLen, n: docs.length };
}

/** Top chunks for the question, capped at `maxChars` of text in total. Empty when nothing matches. */
export function retrieve(index, question, { maxChunks = 5, maxChars = 3200 } = {}) {
  const words = tokenize(question);
  const terms = new Set();
  for (const w of words) {
    terms.add(stem(w));
    (SYNONYMS[w] || []).forEach((s) => terms.add(stem(s)));
  }
  if (terms.size === 0) return [];
  const k1 = 1.4, b = 0.75;
  const scored = [];
  for (const d of index.docs) {
    let score = 0;
    for (const t of terms) {
      const f = d.tf.get(t);
      if (!f) continue;
      const idf = Math.log(1 + (index.n - index.df.get(t) + 0.5) / (index.df.get(t) + 0.5));
      score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.len) / index.avgLen)));
    }
    if (score > 0) scored.push({ score, chunk: d.chunk });
  }
  scored.sort((a, b2) => b2.score - a.score);
  const out = [];
  let used = 0;
  for (const { chunk } of scored) {
    if (out.length >= maxChunks) break;
    if (used + chunk.text.length > maxChars && out.length > 0) continue;
    out.push(chunk);
    used += chunk.text.length;
  }
  return out;
}

export function formatExcerpts(chunks) {
  return chunks.map((c) => `[${c.section}: ${c.title}${c.url ? ` — page ${c.url}` : ""}]\n${c.text}`).join("\n\n");
}
