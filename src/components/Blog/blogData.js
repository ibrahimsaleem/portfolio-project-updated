// Lightweight blog data curated from LinkedIn posts and security updates

const blogPosts = [
  {
    id: "eviltrace-ai-dfir",
    title: "Can AI Solve DFIR? I Built EvilTrace AI to Find Out",
    date: "2026-06-13",
    tags: ["DFIR", "Multi-Agent", "AI Security", "Hackathon"],
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Typical LLMs hallucinate and speculate, making them untrustworthy for forensic investigations. So I built EvilTrace AI — an autonomous 7-agent DFIR engine with a Zero-Hallucination Gate that verifies every security claim against actual log artifacts before including it in a report.",
    link: "/blog/eviltrace-ai-dfir",
  },
  {
    id: "who-controls-ai-agents",
    title: "Who Is Controlling the Agent Before It Acts?",
    date: "2026-05-20",
    tags: ["Agentic AI", "Runtime Security", "MCP", "AI Governance"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "AI agents now read files, run commands, call MCP servers, and touch cloud resources. The real question isn't what they can do — it's who is controlling them before they act. I explored a practical security pattern using policy gateways with allow/warn/block/audit actions.",
    link: "/blog/who-controls-ai-agents",
  },
  {
    id: "nsa-mcp-security",
    title: "NSA on MCP Security: AI is Shifting from Model Security to Agent Security",
    date: "2026-05-08",
    tags: ["MCP", "NSA", "Agentic AI", "AI Security"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "NSA dropped a major paper on securing MCP (Model Context Protocol) AI systems. The clear signal: AI security is shifting from 'model security' to 'agent security.' MCP is the backbone of agentic AI — giving LLMs tool access changes the threat model completely.",
    link: "/blog/nsa-mcp-security",
  },
  {
    id: "tokenless-token-optimization",
    title: "Most AI Teams Optimize Prompts — But Forget the Agent Itself",
    date: "2026-05-15",
    tags: ["TokenLess", "AI Efficiency", "Claude Code", "MCP"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "I built TokenLess, an open-source token optimization hub with reusable AI skills you can plug directly into Claude Code, Windsurf, MCP agents, and Copilot. Give these skills to Claude and make it automatically follow enterprise-ready token optimization practices.",
    link: "/blog/tokenless-token-optimization",
  },
  {
    id: "ai-red-team-hallucination",
    title: "AI-Assisted Red Teaming: The Hallucination Problem Is Dangerous",
    date: "2026-05-12",
    tags: ["Red Team", "AI Security", "LLM", "AppSec"],
    image: "https://images.unsplash.com/photo-1555435025-10a3f6a24f06?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "One of the biggest issues in AI-assisted security workflows is hallucinated vulnerability findings — fake CVEs, weak evidence, overstated severity, attack paths that sound real but fail during validation. AI doesn't replace security judgment — it amplifies people who know how to guide, verify, and control it.",
    link: "/blog/ai-red-team-hallucination",
  },
  {
    id: "claude-malware-attack-path",
    title: "Trusted AI Chats as Attack Paths: The Claude Malware Campaign",
    date: "2026-05-01",
    tags: ["Malware", "AI Security", "Claude", "Social Engineering"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Attackers abused Google Ads and legitimate Claude shared chats to push Mac malware through fake install instructions — a real platform with a fake install guide delivering real malware. AI security is no longer only about model safety. It's also about user trust and how attackers abuse trusted AI ecosystems.",
    link: "/blog/claude-malware-attack-path",
  },
  {
    id: "vlm-prompt-injection",
    title: "Hidden Instructions in Images: Prompt Injection in Vision-Language Models",
    date: "2026-04-28",
    tags: ["Prompt Injection", "VLM", "AI Security", "Cisco"],
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Cisco showed that hidden instructions can be placed inside images using tiny visual changes that humans miss, but vision-language models still read. Screenshots, PDFs, tickets, diagrams, and webpage previews can all become untrusted input for multimodal AI. If an AI system can 'see' it, attackers may hide instructions inside it.",
    link: "/blog/vlm-prompt-injection",
  },
  {
    id: "next-breach-ai-tool",
    title: "Your Next Breach Won't Start with a Firewall — It'll Start with an AI Tool",
    date: "2026-04-22",
    tags: ["AI Security", "Data Breach", "Zero Trust", "Identity"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Ameriprise, Kemper, Citizens Financial, and Vercel all hit in a single week with the same pattern: attackers not 'breaking in' but logging in — or getting your tools to do it for them. Over-permissioned AI tools and plugins, blind trust in vendors, and weak identity controls are the real culprits.",
    link: "/blog/next-breach-ai-tool",
  },
  {
    id: "self-evolving-agents-security",
    title: "AI Agents Are Becoming Self-Evolving: A Security Wake-Up Call",
    date: "2026-03-25",
    tags: ["Agentic AI", "AI Governance", "Security", "Meta-Skills"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Concepts like meta-skills in Google ADK let agents read skill specifications, learn from examples, generate new capabilities, and persist them across sessions. Once agents can decide what they can become, security is no longer only about controlling outputs — it's about controlling evolution.",
    link: "/blog/self-evolving-agents-security",
  },
  {
    id: "ai-cheatsheets-engineering",
    title: "GenAI Depth Comes From Understanding What Happens Beyond the Prompt",
    date: "2026-04-10",
    tags: ["AI Engineering", "Transformers", "Prompt Caching", "LLMOps"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Three visual revision cheat sheets covering AI Engineering Architecture, Transformer Internals, and Prompt Caching & LLM Cost Optimization — connecting directly to enterprise concerns: securing GenAI, reducing cost, improving latency, and making systems explainable.",
    link: "/blog/ai-cheatsheets-engineering",
  },
  {
    id: "2026-cybersecurity-ai-force-multiplier",
    title: "2026 Cybersecurity: AI Is a Force Multiplier — Good and Bad",
    date: "2026-03-15",
    tags: ["AI Security", "2026 Predictions", "Agents", "Post-Quantum"],
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Shadow AI is quietly increasing breach costs. Deepfakes have exploded. Prompt injection is still the #1 risk. But the real 2026 story is attacks ON AI agents — autonomous agents with excessive privileges can exfiltrate data at machine speed and automate entire attack chains without a single human click.",
    link: "/blog/2026-cybersecurity-ai-force-multiplier",
  },
  {
    id: "clawprotect-release",
    title: "ClawProtect: Defense-in-Depth Security for AI Agent Gateways",
    date: "2026-03-10",
    tags: ["ClawProtect", "eBPF", "Prompt Injection", "AI Security"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "I built ClawProtect — a defense-in-depth security stack for AI agent gateways. It includes a content-aware security proxy, eBPF-based kernel monitoring for syscall-level behavioral visibility, egress firewall controls, and a cross-layer event bus for adaptive response.",
    link: "/blog/clawprotect-release",
  },
  {
    id: "sharepoint-zero-day-gtig",
    title: "Active SharePoint Zero‑Day (CVE‑2025‑53770): What To Do Now",
    date: "2025-07-24",
    tags: ["Security", "CVE", "Microsoft", "Incident Response"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "GTIG observed active exploitation on on‑prem SharePoint servers targeting MachineKey secrets for persistent access. Mitigate with AMSI + Defender, hunt webshells, and rotate keys if compromised.",
    link: "/blog/sharepoint-zero-day-gtig",
  },
  {
    id: "context-engineering-essentials",
    title: "Context Engineering: The Missing Discipline in Agent Design",
    date: "2025-07-31",
    tags: ["AI", "Agents", "Prompting", "Best Practices"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "A practical template across Instructions, Requirements, Knowledge, Memory, Tools, and Tool Results to maximize agent autonomy and reliability.",
    link: "/blog/context-engineering-essentials",
  },
  {
    id: "agntcy-internet-of-agents",
    title: "AGNTCY: Building the Internet of Agents",
    date: "2025-07-29",
    tags: ["Agents", "Open Source", "Cisco", "Linux Foundation"],
    image:
      "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Overview of AGNTCY’s layers: Agent Connect Protocol, SLIM secure messaging, semantic workflows, and global agent directory for cross‑vendor collaboration.",
    link: "/blog/agntcy-internet-of-agents",
  },
  {
    id: "mcp-python-to-api",
    title: "Turn Any Python File Into Live APIs: My MCP Server",
    date: "2025-06-15",
    tags: ["MCP", "APIs", "DevTools", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Upload a Python script; get instant REST endpoints with Swagger and hot‑reload. Built for rapid prototyping, IDE integration, and AI agent tooling.",
    link: "/blog/mcp-python-to-api",
  },
  {
    id: "big-sleep-stops-cve",
    title: "AI Blocked a Live Exploit: Big Sleep vs CVE‑2025‑6965",
    date: "2025-07-18",
    tags: ["AI Security", "DFIR", "Google", "Vulnerability"],
    image:
      "https://images.unsplash.com/photo-1555435025-10a3f6a24f06?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "DeepMind’s agent identified and neutralized a hidden SQLite vulnerability in real time—what it means for proactive defense.",
    link: "/blog/big-sleep-stops-cve",
  },
  {
    id: "genai-context-engineering",
    title: "New Core Discipline for GenAI: Context Engineering",
    date: "2025-07-12",
    tags: ["LLM", "RAG", "Prompting", "Workflows"],
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Write, Select, Compress, Isolate—four strategies to reduce agent failures caused by context mismanagement.",
    link: "/blog/genai-context-engineering",
  },
  {
    id: "localragagent-release",
    title: "LocalRAGAgent: Private, Offline RAG with Ollama",
    date: "2025-05-28",
    tags: ["RAG", "Ollama", "Privacy", "Python"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "PDF OCR, ChromaDB vector store, conversational memory, and local LLM inference—fully air‑gapped document Q&A.",
    link: "/blog/localragagent-release",
  },
  {
    id: "dbir-2025-takeaways",
    title: "DBIR 2025: What Changed—and What to Fix Now",
    date: "2025-05-20",
    tags: ["DBIR", "Threats", "Ransomware", "AI Risk"],
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "AI misuse, third‑party risk, and unpatched edge devices dominate incident patterns. Practical steps for defenders.",
    link: "/blog/dbir-2025-takeaways",
  },
  {
    id: "cve-2025-24054-less-likely",
    title: "“Less Likely to be Exploited”—Until It Is (CVE‑2025‑24054)",
    date: "2025-05-10",
    tags: ["CVE", "Windows", "NTLM", "Threat Intel"],
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "NTLM hash disclosure via .library‑ms showed real‑world targeting within days. Why risk ratings must be paired with threat hunting.",
    link: "/blog/cve-2025-24054-less-likely",
  },
  {
    id: "kali-key-rotation",
    title: "Kali Linux Repo Key Rotation: What You Need To Do",
    date: "2025-05-08",
    tags: ["Linux", "Kali", "Updates", "Ops"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Why updates failed this week and how to import the new signing key to resume secure package updates.",
    link: "/blog/kali-key-rotation",
  },
  {
    id: "cyberpath-ai-launch",
    title: "CyberPath AI: Personalized Cybersecurity Roadmaps",
    date: "2025-05-02",
    tags: ["Learning", "AI", "Roadmaps", "Certs"],
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "An AI app that tailors certification paths and bite‑sized explanations by level, timeline, and interest domains.",
    link: "/blog/cyberpath-ai-launch",
  },
  {
    id: "what-is-mcp-server",
    title: "What Is an MCP Server? Model Context Protocol Explained",
    date: "2025-08-08",
    tags: ["MCP", "Agents", "Developer Tools"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "MCP lets tools and apps speak a shared language with AI agents. Learn how MCP servers expose functions, data, and capabilities to LLMs safely and consistently.",
    link: "/blog/what-is-mcp-server",
  },
  {
    id: "what-is-rag",
    title: "What Is RAG? Retrieval‑Augmented Generation Made Practical",
    date: "2025-08-08",
    tags: ["RAG", "LLM", "Search"],
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "RAG grounds LLM outputs in your own data via retrieval. We break down architecture, vector stores, chunking, and evaluation.",
    link: "/blog/what-is-rag",
  },
  {
    id: "what-is-ollama",
    title: "What Is Ollama? Run LLMs Locally in Minutes",
    date: "2025-08-08",
    tags: ["Ollama", "Local LLM", "Privacy"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&h=800&fit=crop",
    excerpt:
      "Ollama is the simplest way to download and run open‑weight models on your machine. Great for privacy, prototyping, and edge workloads.",
    link: "/blog/what-is-ollama",
  },
];

export default blogPosts;


