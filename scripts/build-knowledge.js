// Builds src/components/VoiceAssistant/knowledge.json: small searchable chunks of everything the site says about
// Ibrahim (projects, experience, case studies, blog, certificates, CV). The voice assistant sends only the chunks
// that match a question, so each answer costs a few hundred tokens of context instead of the whole site.
// Runs before every build (npm "prebuild"). Refresh the CV text with: pdftotext public/cv1page.pdf scripts/cv.txt
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const MAX_CHUNK = 900;
const chunks = [];

const clean = (s) => String(s).replace(/\s+/g, " ").replace(/\\n/g, " ").trim();
function add(section, title, text, url) {
  text = clean(text);
  if (!text) return;
  // Long entries are split on sentence boundaries so retrieval can pick just the relevant part.
  const parts = [];
  let cur = "";
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    if (cur && cur.length + sentence.length > MAX_CHUNK) { parts.push(cur); cur = ""; }
    cur += (cur ? " " : "") + sentence;
  }
  if (cur) parts.push(cur);
  parts.forEach((p) => chunks.push({ section, title: clean(title), text: p, ...(url ? { url } : {}) }));
}

// Plain data modules (no imports, one default export): evaluate them as object literals.
function loadDataModule(file, name) {
  const src = read(file).replace(/^\s*import .*$/gm, "").replace(new RegExp(`export default ${name};?`), "");
  return new Function(`${src}; return ${name};`)();
}
// Arrays declared inside a component, e.g. `const experienceData = [ ... ];`
function loadInlineArray(file, name) {
  const src = read(file);
  const start = src.indexOf(`const ${name} = [`);
  if (start < 0) throw new Error(`${name} not found in ${file}`);
  let depth = 0, i = src.indexOf("[", start);
  for (let j = i; j < src.length; j++) {
    if (src[j] === "[") depth++;
    else if (src[j] === "]" && --depth === 0) return new Function(`return ${src.slice(i, j + 1)};`)();
  }
  throw new Error(`unterminated ${name} in ${file}`);
}
// JSX cards: pull title="..." / description="..." / link="..." props from each <Tag ... /> element.
function jsxCards(file, tag) {
  const out = [];
  const prop = (block, name) => {
    const m = block.match(new RegExp(`${name}=(?:"([^"]*)"|\\{\`([^\`]*)\`\\}|\\{"([^"]*)"\\})`));
    return m ? m[1] ?? m[2] ?? m[3] : "";
  };
  for (const m of read(file).matchAll(new RegExp(`<${tag}\\b([\\s\\S]*?)/>`, "g"))) {
    out.push({ title: prop(m[1], "title"), description: prop(m[1], "description"), link: prop(m[1], "link") || prop(m[1], "ghLink") });
  }
  return out;
}

// Experience and education
for (const name of ["experienceData", "educationData"]) {
  for (const e of loadInlineArray("src/components/Experiences/Experiences.js", name)) {
    add(name === "educationData" ? "Education" : "Experience", `${e.title} — ${e.organization} (${e.date})`, `${e.title}, ${e.organization}, ${e.date}. ${e.description}`, "/experience");
  }
}

// Projects and certificates
for (const p of jsxCards("src/components/Projects/Projects.js", "ProjectCard")) {
  if (p.title) add("Project", p.title, `${p.title}. ${p.description}`, p.link && p.link.startsWith("/") ? p.link : "/project");
}
const certs = jsxCards("src/components/Certificates/Certificates.js", "CertificateCard").map((c) => c.title).filter(Boolean);
if (certs.length) add("Certificates", "Certificates", `Certificates: ${certs.join("; ")}.`, "/certificates");

// Case studies (full write-ups)
const content = loadDataModule("src/components/CaseStudies/caseStudiesContent.js", "caseStudiesContent");
for (const [id, cs] of Object.entries(content)) {
  const flat = (v) => (Array.isArray(v) ? v.map(flat).join(" ") : v && typeof v === "object" ? Object.values(v).map(flat).join(" ") : typeof v === "string" ? v : "");
  const { title, org, date, ...rest } = cs;
  add("Case study", `${title} — ${org} (${date})`, `${title}. ${org}. ${date}. ${flat(rest)}`, `/case-studies/${id}`);
}

// Blog posts (summaries)
for (const b of loadDataModule("src/components/Blog/blogData.js", "blogPosts")) {
  add("Blog post", b.title, `${b.title} (${b.date}). ${(b.tags || []).join(", ")}. ${b.excerpt || ""}`, b.link || `/blog/${b.id}`);
}

// CV, split by its section headings
const cv = fs.readFileSync(path.join(__dirname, "cv.txt"), "utf8");
cv.split(/\n(?=(?:Professional Summary|Education|Experience|Projects|Publications|Research|Skills|Technical Skills|Certifications|Awards|Leadership)\s*\n)/)
  .forEach((block) => add("CV", `CV: ${block.trim().split("\n")[0]}`, block, "/resume"));

const outFile = path.join(root, "src/components/VoiceAssistant/knowledge.json");
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(chunks));
const bySection = chunks.reduce((m, c) => ((m[c.section] = (m[c.section] || 0) + 1), m), {});
console.log(`knowledge.json: ${chunks.length} chunks, ${Math.round(fs.statSync(outFile).size / 1024)} KB`, bySection);
