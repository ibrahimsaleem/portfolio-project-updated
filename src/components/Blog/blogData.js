// Lightweight blog data curated from LinkedIn posts and security updates

const blogPosts = [
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


