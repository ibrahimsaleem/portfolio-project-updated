# Mohammad Ibrahim Saleem — Portfolio

> **"AI needs Security. I know both."**

**Live site:** [ibrahimsaleem-portfolio.web.app](https://ibrahimsaleem-portfolio.web.app)  
**GitHub:** [github.com/ibrahimsaleem](https://github.com/ibrahimsaleem)  
**LinkedIn:** [linkedin.com/in/ibrahimsaleem91](https://www.linkedin.com/in/ibrahimsaleem91)

---

## About

Personal portfolio of **Mohammad Ibrahim Saleem** — AI Security & Governance Engineer at AT&T, Houston TX. The site covers professional experience, research publications, open-source projects, a technical blog, certifications, and an AI-powered chat assistant that answers questions about Ibrahim in real time.

---

## Live Features

### Cyber / AI Security Design System
- **MatrixRain** — canvas-based falling katakana + security character animation running as a fixed background layer
- **Glitch hero tagline** — CSS `clip` + `transform: skew` pseudo-element animation on "AI needs Security."
- **Neon glow cards** — glassmorphism + cyan/green/purple neon border glow on all cards
- **Rotating profile rings** — CSS-only `conic-gradient` spinning border around the hero photo
- **Terminal-style bio section** — macOS dot header + monospace font wrapping the About section
- **Particle system** — `react-tsparticles` floating particle field in the hero
- **Gradient color system** — matrix green `#00FF41`, electric cyan `#00D4FF`, electric purple `#C770F0`
- **Fully mobile responsive** — dedicated breakpoints at 991px, 767px, and 480px

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Hero (glitch tagline, profile photo, typewriter), stats strip, recruiter overview cards, social links |
| `/about` | Tech stack icons, toolstack, GitHub contribution calendar |
| `/project` | 6 project cards with custom SVG images, descriptions, and GitHub links |
| `/experience` | Parallel dual-column timeline — Education (left) + Experience (right) |
| `/resume` | In-browser PDF viewer + 1-page and 2-page CV download buttons |
| `/certificates` | Certificate cards grid |
| `/blog` | Blog card grid — 26 posts total |
| `/blog/:id` | Full blog post detail page with hero image, tags, date, and rich JSX content |

---

## AI Chatbot

A floating chat widget (bottom-right corner, visible on every page) powered by **Google Gemini 2.5 Flash**.

- Greets visitors as *"Ibrahim's AI assistant"*
- System prompt loaded with Ibrahim's full profile: current role, education, GPA, projects, skills, publications, blog topics, and contact info
- Maintains multi-turn conversation history within each session
- Graceful quota/rate-limit error handling with fallback contact info
- Fully mobile responsive — full-width overlay on phones, `font-size: 16px` on input to prevent iOS auto-zoom

```
Gemini REST API (no SDK) → gemini-2.5-flash → generateContent endpoint
System instruction → Ibrahim's full profile as context
```

---

## Blog

26 posts total — 12 new AI Security posts sourced from LinkedIn activity, 14 original posts.  
All "Read More" buttons route to internal `/blog/:id` pages (no external LinkedIn redirects).

**Recent posts:**
- *Can AI Solve DFIR? I Built EvilTrace AI to Find Out*
- *NSA on MCP Security: AI is Shifting from Model Security to Agent Security*
- *Who Is Controlling the Agent Before It Acts?*
- *AI-Assisted Red Teaming: The Hallucination Problem Is Dangerous*
- *Hidden Instructions in Images: Prompt Injection in Vision-Language Models*
- *Your Next Breach Won't Start with a Firewall — It'll Start with an AI Tool*
- *AI Agents Are Becoming Self-Evolving: A Security Wake-Up Call*
- *ClawProtect: Defense-in-Depth Security for AI Agent Gateways*
- *2026 Cybersecurity: AI Is a Force Multiplier — Good and Bad*
- *Most AI Teams Optimize Prompts — But Forget the Agent Itself*

---

## Projects

| Project | Description | Link |
|---|---|---|
| **EvilTrace AI** | Multi-agent DFIR engine with a 6-stage pipeline and a Zero-Hallucination Gate — every forensic finding must cite verifiable evidence. Built at a hackathon. | [GitHub](https://github.com/ibrahimsaleem) |
| **TokenLess** | Open-source token optimization hub. Reusable skill packs for Claude Code, Windsurf, MCP agents, and GitHub Copilot. Achieves up to **78% token cost reduction**. | [GitHub](https://github.com/ibrahimsaleem/TokenLess) |
| **ClawProtect** | Defense-in-depth security stack for AI agent gateways. 5 layers: content-aware proxy, eBPF kernel monitor, egress firewall, and cross-layer adaptive event bus. Academic paper published. | [GitHub](https://github.com/ibrahimsaleem/ClawProtect) |
| **CyberPath AI** | AI-driven cybersecurity learning platform | [GitHub](https://github.com/ibrahimsaleem) |
| **Face Recognition** | ML-based face recognition system | [GitHub](https://github.com/ibrahimsaleem) |
| **Emotion Detection** | Real-time emotion detection using computer vision | [GitHub](https://github.com/ibrahimsaleem) |

---

## Tech Stack

### Frontend

| Package | Version | Purpose |
|---|---|---|
| React | 17.0.2 | UI framework |
| react-router-dom | 6.2.2 | Client-side routing (`/blog/:id`, etc.) |
| react-bootstrap | 2.2.1 | Layout grid and components |
| bootstrap | 5.1.3 | CSS base |
| react-icons | 4.8.0 | Icon library (FaShieldAlt, AiFillGithub, etc.) |
| react-tsparticles | 1.42.2 | Particle background animation |
| typewriter-effect | 2.18.2 | Typewriter role strings in hero |
| react-parallax-tilt | 1.7.42 | 3D tilt effect on the bio avatar |
| react-pdf | 5.7.1 | In-browser PDF viewer on the Resume page |
| react-github-calendar | 3.2.2 | GitHub contribution heatmap on About page |

### AI

| Service | Usage |
|---|---|
| Google Gemini 2.5 Flash | Powers the AI chatbot (`/v1beta/models/gemini-2.5-flash:generateContent`) |
| Gemini REST API | Direct `fetch` from the client — no SDK dependency added |

### Hosting & Deployment

| Service | Details |
|---|---|
| Firebase Hosting | Project: `ibrahimsaleem-portfolio`, deployed via `firebase deploy --only hosting` |
| GitHub | Repo: `ibrahimsaleem/portfolio-project-updated`, branch: `main` |

---

## Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf                        # CV for in-browser viewer
│   ├── cv1page.pdf                   # 1-page CV download
│   └── cv2page.pdf                   # 2-page CV download
│
├── src/
│   ├── Assets/
│   │   ├── ibrahim-headshot.jpg      # Close-up portrait → hero circle
│   │   ├── ibrahim-uh.jpg            # Full-body UH photo → bio section
│   │   ├── cv.pdf                    # CV asset bundled for react-pdf
│   │   └── Projects/
│   │       ├── eviltrace-ai.svg      # Custom SVG — EvilTrace AI
│   │       ├── tokenless.svg         # Custom SVG — TokenLess
│   │       └── clawprotect.svg       # Custom SVG — ClawProtect
│   │
│   ├── components/
│   │   ├── ChatBot/
│   │   │   ├── ChatBot.js            # Gemini AI chat widget (all logic)
│   │   │   └── ChatBot.css           # Chat widget styles + mobile breakpoints
│   │   ├── Blog/
│   │   │   ├── Blog.js               # Blog card grid page
│   │   │   ├── BlogPost.js           # Individual post page (/blog/:id)
│   │   │   ├── blogData.js           # Post metadata array (title, date, tags, excerpt, link)
│   │   │   └── blogContent.js        # Full post content keyed by post id
│   │   ├── Home/
│   │   │   ├── Home.js               # Hero + stats strip + recruiter cards
│   │   │   ├── Home2.js              # Terminal bio + avatar + social links
│   │   │   ├── HomeDetailed.js       # Extended detailed portfolio view
│   │   │   └── Type.js               # Typewriter strings list
│   │   ├── Projects/
│   │   │   └── Projects.js           # Project card grid
│   │   ├── Experiences/
│   │   │   ├── Experiences.js        # Dual-column timeline component
│   │   │   └── Experiences.css       # Timeline + mobile breakpoints
│   │   ├── Resume/
│   │   │   └── ResumeNew.js          # PDF viewer + download buttons
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   ├── AboutCard.js
│   │   │   ├── Techstack.js
│   │   │   └── Toolstack.js
│   │   ├── Certificates/
│   │   │   └── Certificates.js
│   │   ├── MatrixRain.js             # Canvas matrix rain animation
│   │   ├── Navbar.js                 # Fixed top nav — >_IS brand + cyber links
│   │   ├── Particle.js               # tsParticles config wrapper
│   │   ├── Footer.js
│   │   ├── Pre.js                    # Preloader spinner
│   │   └── ScrollToTop.js
│   │
│   ├── App.js                        # All routes + ChatBot global mount
│   ├── style.css                     # Design system: tokens, animations, mobile CSS
│   ├── App.css
│   └── index.css
│
├── firebase.json
├── .firebaserc
└── package.json
```

---

## Local Development

### Prerequisites
- Node.js 16+  
- npm 8+  
- Firebase CLI (`npm install -g firebase-tools`) — only needed for deployment

### Run locally

```bash
git clone https://github.com/ibrahimsaleem/portfolio-project-updated.git
cd portfolio-project-updated
npm install
npm start
```

App runs at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

### Deploy to Firebase

```bash
firebase login
firebase deploy --only hosting
```

---

## Design Tokens

All design tokens are CSS custom properties defined at the top of `src/style.css`:

```css
:root {
  --matrix-green:    #00FF41;   /* Primary accent — terminal green */
  --cyber-cyan:      #00D4FF;   /* Secondary accent — electric blue */
  --electric-purple: #C770F0;   /* Tertiary accent — neon purple */
  --deep-black:      #060611;   /* Page background */

  --glow-cyan:   0 0 8px rgba(0,212,255,0.7), 0 0 20px rgba(0,212,255,0.35), 0 0 40px rgba(0,212,255,0.15);
  --glow-green:  0 0 8px rgba(0,255,65,0.7),  0 0 20px rgba(0,255,65,0.35);
  --glow-purple: 0 0 8px rgba(199,112,240,0.7), 0 0 20px rgba(199,112,240,0.35);

  --ai-gradient: linear-gradient(90deg, #00FF41, #00D4FF, #C770F0);
}
```

---

## Blog Architecture

```
blogData.js        →  metadata array  (id, title, date, tags, image, excerpt, link)
                                 ↓
Blog.js            →  card grid; link="/blog/<id>" routes internally via react-router
                                 ↓
blogContent.js     →  keyed object  { [id]: { title, date, tags, heroImage, Content } }
                                 ↓
BlogPost.js        →  useParams().id  → renders <Content /> JSX
App.js             →  <Route path="/blog/:id" element={<BlogPost />} />
```

**To add a new blog post:**
1. Append an entry to `blogPosts` in `blogData.js` — set `link: "/blog/your-post-id"`
2. Add a matching key in `blogContent.js` with `title`, `date`, `tags`, `heroImage`, and a `Content: () => (<>...</>)` JSX component

---

## Mobile Responsive Strategy

CSS breakpoints in `src/style.css`:

| Breakpoint | Target | Key changes |
|---|---|---|
| `≤991px` | Tablet | Reduced hero padding, compressed left indents |
| `≤767px` | Mobile | Hero text centers, section `padding-top` cut from 150px → 80px, blog card padding reduced, bio section padding-top cut from 100px → 20px |
| `≤480px` | Small phone | Profile ring shrinks to 170px, typewriter `position: static`, further font reductions |

The `home-hero-cta` and `home-hero-typewriter` CSS classes replace the hardcoded inline `paddingLeft: 45px` in the hero JSX and become `padding-left: 0; justify-content: center` on mobile.

---

## Contact

| Channel | Details |
|---|---|
| Email | ibrahimsaleem401@gmail.com |
| LinkedIn | [linkedin.com/in/ibrahimsaleem91](https://www.linkedin.com/in/ibrahimsaleem91) |
| GitHub | [github.com/ibrahimsaleem](https://github.com/ibrahimsaleem) |
| Portfolio | [ibrahimsaleem-portfolio.web.app](https://ibrahimsaleem-portfolio.web.app) |

---

## License

Open source — MIT. Fork and adapt for your own portfolio. Credit appreciated but not required.
