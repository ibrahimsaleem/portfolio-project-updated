import React from "react";

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="purple">
    {children}
  </a>
);

const blogContent = {
  "sharepoint-zero-day-gtig": {
    title: "Active SharePoint Zero‑Day (CVE‑2025‑53770): What To Do Now",
    date: "2025-07-24",
    tags: ["Security", "CVE", "Microsoft", "Incident Response"],
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Google Threat Intelligence Group (GTIG) reported active exploitation of an
          on‑premises SharePoint vulnerability now tracked as CVE‑2025‑53770. Threat
          actors deploy webshells and exfiltrate MachineKey secrets, enabling
          persistent, unauthenticated access even after patching. Microsoft has
          issued mitigations while preparing a full update.
        </p>
        <h3>Immediate Actions</h3>
        <ul>
          <li>Enable AMSI integration with SharePoint and verify Microsoft Defender AV.</li>
          <li>Hunt for webshells in SharePoint directories; any finding implies compromise.</li>
          <li>If compromised, isolate the server and rotate the SharePoint MachineKey.</li>
          <li>Preserve evidence and review outbound traffic for data exfiltration.</li>
        </ul>
        <h3>Detection Tips</h3>
        <ul>
          <li>Look for suspicious ASPX uploads and recently modified files in web roots.</li>
          <li>Correlate IIS logs for anomalous POSTs to uncommon endpoints.</li>
          <li>Monitor credential/secret access events and unexpected process spawns.</li>
        </ul>
        <p>
          Reference: Microsoft Security Response Center guidance on this issue
          (CVE variant) and GTIG advisories. See Microsoft’s blog for evolving
          mitigations.
        </p>
      </>
    ),
  },

  "what-is-mcp-server": {
    title: "What Is an MCP Server? Model Context Protocol Explained",
    date: "2025-08-08",
    tags: ["MCP", "Agents", "Developer Tools"],
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          The Model Context Protocol (MCP) standardizes how tools, data sources, and
          applications expose capabilities to AI agents and IDE copilots. An <b>MCP
          server</b> advertises functions (tools), schemas, and resources in a
          declarative way so agents can discover and safely invoke them.
        </p>
        <h3>Why MCP?</h3>
        <ul>
          <li>Consistent tool invocation across IDEs, agents, and runtimes.</li>
          <li>Strong typing and schemas for safer, auditable calls.</li>
          <li>Hot‑swappable backends without changing agent logic.</li>
        </ul>
        <h3>How It Fits</h3>
        <ul>
          <li>Agents use MCP to list available tools and parameters.</li>
          <li>Orchestration layers route tool calls and return results.</li>
          <li>Servers can expose APIs, filesystem ops, DB queries, or custom logic.</li>
        </ul>
        <p>
          In my projects, MCP powers instant API exposure from Python scripts and
          integrates security tools for agentic workflows.
        </p>
      </>
    ),
  },

  "what-is-rag": {
    title: "What Is RAG? Retrieval‑Augmented Generation Made Practical",
    date: "2025-08-08",
    tags: ["RAG", "LLM", "Search"],
    heroImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Retrieval‑Augmented Generation (RAG) augments a model’s context window by
          fetching relevant chunks from your knowledge base at query time. This
          reduces hallucinations and aligns outputs with your data.
        </p>
        <h3>Core Steps</h3>
        <ol>
          <li>Chunk documents and create embeddings.</li>
          <li>Store vectors in a retriever (e.g., Chroma, FAISS, pgvector).</li>
          <li>Retrieve top‑k chunks per query; craft a grounded prompt.</li>
          <li>Generate an answer; optionally cite sources and cache results.</li>
        </ol>
        <h3>Design Tips</h3>
        <ul>
          <li>Tune chunk size/overlap per domain; test different splitters.</li>
          <li>Use re‑ranking for quality; add metadata filters.</li>
          <li>Evaluate with task‑specific metrics and human review.</li>
        </ul>
      </>
    ),
  },

  "what-is-ollama": {
    title: "What Is Ollama? Run LLMs Locally in Minutes",
    date: "2025-08-08",
    tags: ["Ollama", "Local LLM", "Privacy"],
    heroImage:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          <b>Ollama</b> is a lightweight runtime that makes it trivial to download,
          manage, and run open‑weight LLMs locally (e.g., Llama, Mistral). It’s
          ideal for privacy, offline use, and rapid prototyping.
        </p>
        <h3>Quick Start</h3>
        <ul>
          <li>Install Ollama and run: <code>ollama run llama3</code>.</li>
          <li>Pull models with <code>ollama pull</code>; manage via <code>ollama list</code>.</li>
          <li>Call via HTTP: point your app to the local Ollama endpoint.</li>
        </ul>
        <h3>Use Cases</h3>
        <ul>
          <li>Private RAG systems (pairs well with Chroma/LangChain).</li>
          <li>Edge deployments and air‑gapped environments.</li>
          <li>Experimenting with model families and quantizations.</li>
        </ul>
      </>
    ),
  },

  "context-engineering-essentials": {
    title: "Context Engineering: The Missing Discipline in Agent Design",
    date: "2025-07-31",
    tags: ["AI", "Agents", "Prompting", "Best Practices"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Great agents fail not because of weak models, but because of weak context.
          Context Engineering is the practice of structuring everything an agent
          needs before it acts: instructions, constraints, tools, and retrieved
          knowledge.
        </p>
        <h3>A Practical Template</h3>
        <ol>
          <li>
            <b>Instructions</b>: persona, goals, success criteria, and why it matters.
          </li>
          <li>
            <b>Requirements</b>: steps, conventions, constraints, response format, examples.
          </li>
          <li>
            <b>Knowledge</b>: domain context, systems context, task‑specific docs/data.
          </li>
          <li>
            <b>Memory</b>: short‑term (chat/state), long‑term (facts, procedures, episodes).
          </li>
          <li>
            <b>Tools</b>: what exists, how to use, parameters, return shapes.
          </li>
          <li>
            <b>Tool Results</b>: how the orchestration layer injects outputs back.
          </li>
        </ol>
        <p>
          Use negative examples to capture anti‑patterns discovered during error
          analysis. Treat tool descriptions as micro‑prompts that guide the agent’s
          reasoning.
        </p>
        <p>
          Further reading: Context Engineering guides from the LangChain team and
          community resources.
        </p>
      </>
    ),
  },

  "agntcy-internet-of-agents": {
    title: "AGNTCY: Building the Internet of Agents",
    date: "2025-07-29",
    tags: ["Agents", "Open Source", "Cisco", "Linux Foundation"],
    heroImage:
      "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          AGNTCY is an open‑source framework enabling AI agents to discover,
          connect, and collaborate across vendors. It includes an Agent Directory,
          secure messaging (SLIM), semantic workflows, and observability for
          evaluation.
        </p>
        <h3>Core Layers</h3>
        <ul>
          <li>Syntactic: API connectivity via the Agent Connect Protocol.</li>
          <li>Messaging: quantum‑safe, low‑latency communication (SLIM).</li>
          <li>Semantic: intent understanding, task sharing, and coordination.</li>
          <li>Directory + Schema: discoverability and standardized self‑description.</li>
        </ul>
        <p>
          Learn more at <ExternalLink href="https://agntcy.org">agntcy.org</ExternalLink>.
        </p>
      </>
    ),
  },

  "mcp-python-to-api": {
    title: "Turn Any Python File Into Live APIs: My MCP Server",
    date: "2025-06-15",
    tags: ["MCP", "APIs", "DevTools", "FastAPI"],
    heroImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Upload a Python script with top‑level functions and instantly expose them
          as REST endpoints—with Swagger UI, hot reload, and IDE integration via
          the Model Context Protocol (MCP). Perfect for rapid prototyping and agent
          tooling.
        </p>
        <h3>Highlights</h3>
        <ul>
          <li>Auto‑generated endpoints per function, no boilerplate.</li>
          <li>Live docs and testing via Swagger UI.</li>
          <li>Hot reload—edit your script, endpoints update automatically.</li>
          <li>Works with modern IDEs using MCP bridges.</li>
        </ul>
        <p>
          Source code and setup instructions are available on my GitHub.
        </p>
      </>
    ),
  },

  "big-sleep-stops-cve": {
    title: "AI Blocked a Live Exploit: Big Sleep vs CVE‑2025‑6965",
    date: "2025-07-18",
    tags: ["AI Security", "DFIR", "Google", "Vulnerability"],
    heroImage:
      "https://images.unsplash.com/photo-1555435025-10a3f6a24f06?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Google DeepMind’s agent "Big Sleep" identified and neutralized a hidden
          SQLite vulnerability exploited in the wild (CVE‑2025‑6965), marking a
          milestone in AI‑assisted defense. Key takeaway: autonomous detection can
          shrink attacker dwell time dramatically when paired with validated human
          workflows.
        </p>
        <h3>Why It Matters</h3>
        <ul>
          <li>Proactive detection for subtle, low‑signal exploit chains.</li>
          <li>AI assistance for triage, not replacement of human oversight.</li>
          <li>Importance of interpretable pipelines and guardrails.</li>
        </ul>
        <p>
          See Google’s write‑up for technical context and lessons learned.
        </p>
      </>
    ),
  },

  "genai-context-engineering": {
    title: "New Core Discipline for GenAI: Context Engineering",
    date: "2025-07-12",
    tags: ["LLM", "RAG", "Prompting", "Workflows"],
    heroImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Most agent failures are context failures. Master four strategies:
          <b> Write</b> (persist scratchpads and memory), <b>Select</b> (retrieve the
          minimum viable context), <b>Compress</b> (summarize/prune), and <b>Isolate</b>
          (split across sub‑agents and tools).
        </p>
        <p>
          Recommended reading: LangChain’s blog on context engineering and agent
          workflows.
        </p>
      </>
    ),
  },

  "localragagent-release": {
    title: "LocalRAGAgent: Private, Offline RAG with Ollama",
    date: "2025-05-28",
    tags: ["RAG", "Ollama", "Privacy", "Python"],
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          LocalRAGAgent is a privacy‑first Retrieval‑Augmented Generation stack that
          runs entirely on local hardware. It extracts text (with OCR fallback),
          builds a ChromaDB vector store, retrieves relevant chunks, and answers
          questions using local LLMs via Ollama.
        </p>
        <h3>Stack</h3>
        <ul>
          <li>Python, FastAPI, Jinja2</li>
          <li>LangChain for retrieval orchestration</li>
          <li>ChromaDB for embeddings storage</li>
          <li>Ollama for on‑device models</li>
        </ul>
        <p>
          GitHub: <ExternalLink href="https://github.com/ibrahimsaleem/local-rag-agent">local-rag-agent</ExternalLink>
        </p>
      </>
    ),
  },

  "dbir-2025-takeaways": {
    title: "DBIR 2025: What Changed—and What to Fix Now",
    date: "2025-05-20",
    tags: ["DBIR", "Threats", "Ransomware", "AI Risk"],
    heroImage:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Highlights from the latest DBIR: surge in AI‑assisted phishing, rising
          third‑party risk, and continued ransomware impact despite lower payouts.
        </p>
        <h3>Key Actions</h3>
        <ul>
          <li>Harden vendor access; adopt continuous third‑party risk monitoring.</li>
          <li>Prioritize patching on edge devices and remote access infrastructure.</li>
          <li>Deploy phishing‑resistant MFA and outbound data controls.</li>
        </ul>
        <p>
          Full report: <ExternalLink href="https://www.verizon.com/business/resources/dbir/">Verizon DBIR</ExternalLink>
        </p>
      </>
    ),
  },

  "cve-2025-24054-less-likely": {
    title: "“Less Likely to be Exploited”—Until It Is (CVE‑2025‑24054)",
    date: "2025-05-10",
    tags: ["CVE", "Windows", "NTLM", "Threat Intel"],
    heroImage:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          A .library‑ms file can leak NTLM hashes on interaction, enabling relay
          attacks. Initially ranked as low‑likelihood, it was quickly used against
          government targets and then more broadly.
        </p>
        <h3>Defender Guidance</h3>
        <ul>
          <li>Block outbound NTLM where possible; prefer Kerberos.</li>
          <li>Harden preview/handler associations and educate users.</li>
          <li>Monitor for suspicious SMB/HTTP relay behavior.</li>
        </ul>
        <p>
          Technical deep dives: community write‑ups and incident analyses on
          YouTube and security blogs.
        </p>
      </>
    ),
  },

  "kali-key-rotation": {
    title: "Kali Linux Repo Key Rotation: What You Need To Do",
    date: "2025-05-08",
    tags: ["Linux", "Kali", "Updates", "Ops"],
    heroImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          If you encounter a missing key error during updates, it’s due to a
          repository signing key change. Import the new key and refresh package
          metadata to resume secure updates.
        </p>
        <h3>Steps</h3>
        <ul>
          <li>Fetch and import the new signing key from Kali’s official channels.</li>
          <li>Update your apt sources and retry updates.</li>
          <li>Verify signatures and consider pinning until mirrors settle.</li>
        </ul>
        <p>
          Details: coverage at <ExternalLink href="https://www.bleepingcomputer.com/">BleepingComputer</ExternalLink> and Kali’s announcements.
        </p>
      </>
    ),
  },

  "cyberpath-ai-launch": {
    title: "CyberPath AI: Personalized Cybersecurity Roadmaps",
    date: "2025-05-02",
    tags: ["Learning", "AI", "Roadmaps", "Certs"],
    heroImage:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          CyberPath AI generates custom certification roadmaps from your profile:
          level, prior certs, interests, and timeline. Click any item to get an
          approachable, personalized explanation.
        </p>
        <h3>Tech Stack</h3>
        <ul>
          <li>Frontend/Backend: HTML/CSS/JS + Python (Flask)</li>
          <li>LLM: Google Gemini 2.0 Flash</li>
          <li>Developer copilots: GitHub Copilot, ChatGPT, Claude</li>
        </ul>
        <p>
          Try it and view the source from the project links on my site.
        </p>
      </>
    ),
  },
};

export default blogContent;


