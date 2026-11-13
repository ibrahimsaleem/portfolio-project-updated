// Runs after `react-scripts build`: writes sitemap.xml and a pre-rendered HTML page per blog post
// (own title, description, canonical, social image, Article markup) so search engines see real content
// without running JavaScript. Change SITE_URL (or set the env var) if the domain changes.
const fs = require("fs");
const path = require("path");

const SITE = (process.env.SITE_URL || "https://saleem.si").replace(/\/$/, "");
const AUTHOR = "Mohammad Ibrahim Saleem";
const root = path.join(__dirname, "..");
const build = path.join(root, "build");
const DEFAULT_IMG = `${SITE}/ai-security-layers.jpg`;

const src = fs.readFileSync(path.join(root, "src/components/Blog/blogData.js"), "utf8")
  .replace(/^\s*import .*$/gm, "").replace(/export default blogPosts;?/, "");
const posts = new Function(`${src}; return blogPosts;`)();

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const base = fs.readFileSync(path.join(build, "index.html"), "utf8");

function page({ title, desc, url, img, type, ld }) {
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  ].join("");
  return base
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+(?:name|property)="(?:description|og:[^"]*|twitter:[^"]*)"[^>]*>/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace("</head>", head + "</head>");
}

// Home page
fs.writeFileSync(path.join(build, "index.html"), page({
  title: `${AUTHOR} | AI Security Engineer`,
  desc: "AI security engineer: LLM red teaming, agentic AI threat modeling, and privacy-preserving GenAI workflows. Projects, research, and a blog of lessons from enterprise work.",
  url: `${SITE}/`, img: DEFAULT_IMG, type: "website",
  ld: { "@context": "https://schema.org", "@type": "Person", name: AUTHOR, url: SITE, jobTitle: "AI Security Engineer",
        sameAs: ["https://www.linkedin.com/in/ibrahimsaleem91", "https://github.com/ibrahimsaleem"] },
}));

// Blog posts
const urls = [{ loc: `${SITE}/`, date: null }, { loc: `${SITE}/blog`, date: posts[0] && posts[0].date }];
for (const p of posts) {
  const url = `${SITE}/blog/${p.id}`;
  const img = (p.image || DEFAULT_IMG).split("?")[0] + "?q=80&w=1200&h=630&fit=crop";
  const html = page({
    title: `${p.title} | ${AUTHOR}`, desc: p.excerpt, url, img, type: "article",
    ld: { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.excerpt, image: img,
          datePublished: p.date, dateModified: p.date, mainEntityOfPage: url,
          author: { "@type": "Person", name: AUTHOR, url: SITE }, publisher: { "@type": "Person", name: AUTHOR },
          keywords: (p.tags || []).join(", ") },
  });
  const dir = path.join(build, "blog", p.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  urls.push({ loc: url, date: p.date });
}

fs.writeFileSync(path.join(build, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${u.loc}</loc>${u.date ? `<lastmod>${u.date}</lastmod>` : ""}</url>`).join("\n") + `\n</urlset>\n`);
fs.writeFileSync(path.join(build, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`seo: ${posts.length} posts, sitemap + robots written for ${SITE}`);
