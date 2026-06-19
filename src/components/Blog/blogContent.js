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

  "eviltrace-ai-dfir": {
    title: "Can AI Solve DFIR? I Built EvilTrace AI to Find Out",
    date: "2026-06-13",
    tags: ["DFIR", "Multi-Agent", "AI Security", "Hackathon"],
    heroImage:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Digital Forensics and Incident Response (DFIR) is one of the most demanding disciplines
          in cybersecurity. Under real breach conditions, an analyst must simultaneously correlate
          logs from dozens of sources, build an attack timeline, hunt for indicators of compromise,
          cross-reference threat intel, and write an executive report — all while the clock is ticking.
          I wanted to know: can a multi-agent AI system handle that full workflow end-to-end with
          zero hallucinations? I built <strong>EvilTrace AI</strong> to find out.
        </p>

        <h3>The DFIR Problem with AI</h3>
        <p>
          Most AI security tools fail at DFIR because they hallucinate. An LLM that confidently
          cites a non-existent CVE, fabricates a lateral movement path, or invents file hashes
          is worse than no tool at all — it creates false investigations and burns analyst time.
          The hallucination problem isn't just annoying in DFIR. It's dangerous. Evidence integrity
          matters for legal proceedings, executive reporting, and remediation prioritization.
        </p>

        <h3>The Architecture: 6-Agent Pipeline</h3>
        <p>
          EvilTrace AI is a multi-agent system where each agent has one job and passes verified
          output to the next. The pipeline:
        </p>
        <ol>
          <li><strong>Evidence Collection Agent</strong> — ingests raw logs, EDR telemetry, network captures, and memory dumps. Parses and normalizes across formats (Syslog, Windows Event, JSON, PCAP).</li>
          <li><strong>Timeline Analysis Agent</strong> — correlates artifacts across all sources into a unified chronological attack timeline. Finds the patient zero, lateral movement, and persistence mechanisms.</li>
          <li><strong>Threat Intel Agent</strong> — cross-references IOCs against MISP, VirusTotal, AlienVault OTX, and MITRE ATT&CK. Tags TTPs and attributes threat actors where possible.</li>
          <li><strong>Zero-Hallucination Gate</strong> — the most important component. Every finding must have a verifiable source reference. If an agent produces a claim without traceable evidence, the gate rejects it and sends the agent back for another pass.</li>
          <li><strong>Self-Correction Loop</strong> — when the gate rejects a finding, this agent diagnoses why, re-queries the evidence, and produces a corrected, evidence-backed version.</li>
          <li><strong>Report Write Agent</strong> — compiles all verified findings into structured executive and technical reports with timeline diagrams and remediation recommendations.</li>
        </ol>

        <h3>The Zero-Hallucination Gate: How It Works</h3>
        <p>
          The gate operates on a simple principle: <em>every claim must cite its source artifact</em>.
          Before any finding advances in the pipeline, the gate checks:
        </p>
        <ul>
          <li>Does the finding reference a specific log line, file hash, or network packet?</li>
          <li>Can that reference be reproduced from the original evidence store?</li>
          <li>Does the claim match what the referenced artifact actually says?</li>
        </ul>
        <p>
          If any check fails, the finding is flagged as unverified and routed to the self-correction
          loop. This means the final report only contains statements that are directly traceable to
          ingested evidence — no inference leaps, no invented details.
        </p>

        <h3>Results from the Hackathon Demo</h3>
        <p>
          We ran EvilTrace against a simulated breach scenario: a phishing email leading to a
          credential dump, lateral movement via PSExec, and data exfiltration over HTTPS. Results:
        </p>
        <ul>
          <li>Full attack timeline reconstructed in under 4 minutes</li>
          <li>14 IOCs identified and verified against threat intel</li>
          <li>0 hallucinated findings in the final report (gate rejected 3 unverified claims during processing)</li>
          <li>Executive summary and technical appendix auto-generated with cited evidence</li>
        </ul>

        <h3>What I Learned</h3>
        <p>
          The hardest part wasn't the AI — it was the verification layer. Getting agents to
          produce well-cited, structured output requires careful prompt engineering, strict output
          schemas, and a robust rejection-retry cycle. But when it works, the result is a
          genuinely trustworthy AI DFIR assistant.
        </p>
        <p>
          EvilTrace AI placed in the top submissions at the hackathon. The full architecture
          and source code is available on GitHub. This is v0.1 — there's a long roadmap ahead
          including real-time EDR integration, SIEM connectors, and memory forensics support.
        </p>
        <p>
          <ExternalLink href="https://github.com/ibrahimsaleem">
            View on GitHub
          </ExternalLink>
        </p>
      </>
    ),
  },

  "who-controls-ai-agents": {
    title: "Who Is Controlling the Agent Before It Acts?",
    date: "2026-05-20",
    tags: ["Agentic AI", "Runtime Security", "MCP", "AI Governance"],
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          We've spent years debating what AI models can do. But as AI agents move from
          "interesting demo" to "production system running in your cloud environment,"
          a more urgent question emerges: <strong>who is controlling the agent before it acts?</strong>
        </p>
        <p>
          Modern AI agents don't just generate text. They read files, run shell commands,
          call MCP servers, write to databases, query APIs, and touch cloud resources.
          An agent operating without runtime controls is a privileged process with natural
          language instructions — and that's a security problem.
        </p>

        <h3>The Runtime Control Gap</h3>
        <p>
          Most organizations deploying AI agents today are focused on the model layer:
          which model to use, how to prompt it, how to evaluate outputs. Very few have
          thought seriously about the <em>runtime layer</em> — what happens between
          "the agent decides to act" and "the action executes."
        </p>
        <p>
          That gap is where attackers will live. Prompt injection, over-permissioned
          tool calls, and jailbroken agents all exploit the space between model decision
          and action execution.
        </p>

        <h3>The Policy Gateway Pattern</h3>
        <p>
          The solution I've been exploring is a <strong>policy gateway</strong> that sits
          between the agent's tool calls and the actual execution layer. Every action the
          agent wants to take — file reads, API calls, shell commands, database writes —
          passes through the gateway first.
        </p>
        <p>The gateway evaluates each action against a policy ruleset with four outcomes:</p>
        <ul>
          <li><strong>ALLOW</strong> — action is within policy, execute immediately</li>
          <li><strong>WARN</strong> — action is borderline, log and execute with elevated monitoring</li>
          <li><strong>BLOCK</strong> — action violates policy, reject and notify</li>
          <li><strong>AUDIT</strong> — action is permitted but requires full logging for review</li>
        </ul>

        <h3>What Goes in a Policy?</h3>
        <p>
          Policies should be defined by security and platform teams, not by the agent itself.
          A practical policy for an enterprise coding agent might look like:
        </p>
        <ul>
          <li>ALLOW: read files within the project workspace directory</li>
          <li>ALLOW: HTTP calls to approved internal APIs on the allowlist</li>
          <li>WARN: shell commands that spawn child processes</li>
          <li>BLOCK: any file write to paths outside the workspace</li>
          <li>BLOCK: HTTP calls to external IPs not on the allowlist</li>
          <li>AUDIT: all database write operations</li>
          <li>BLOCK: any action that contains patterns matching known prompt injection payloads</li>
        </ul>

        <h3>MCP and the Gateway Problem</h3>
        <p>
          MCP (Model Context Protocol) makes this more urgent. When agents can call MCP
          servers that expose filesystem operations, terminal access, and API integrations,
          the attack surface grows significantly. A policy gateway needs to understand MCP
          semantics — not just HTTP method and URL, but which MCP tool is being called,
          with what parameters, in what context.
        </p>

        <h3>The Key Insight</h3>
        <p>
          Runtime security for AI agents is not about trusting the model less. It's about
          building the same controls we've always used for privileged processes —
          least privilege, audit logging, policy enforcement — and applying them to a new
          class of system. The model makes decisions; the gateway enforces boundaries.
          That separation of concerns is what makes agentic systems safe to operate at scale.
        </p>
        <p>
          This is the architecture behind <ExternalLink href="https://github.com/ibrahimsaleem/ClawProtect">ClawProtect</ExternalLink> — the open-source
          AI agent gateway I built to make this pattern practical.
        </p>
      </>
    ),
  },

  "nsa-mcp-security": {
    title: "NSA on MCP Security: AI is Shifting from Model Security to Agent Security",
    date: "2026-05-08",
    tags: ["MCP", "NSA", "Agentic AI", "AI Security"],
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          The NSA recently published a major paper on securing Model Context Protocol (MCP)
          AI systems. It's significant not just for what it says, but for what it signals:
          <strong> AI security is officially shifting from model security to agent security.</strong>
        </p>
        <p>
          For years, AI security conversations focused on the model layer — jailbreaks,
          adversarial inputs, training data poisoning. Those risks are real. But with the
          rise of agentic AI and MCP, the threat surface has expanded dramatically.
          The NSA's paper is a sign that the intelligence community has noticed.
        </p>

        <h3>What Is MCP and Why Does It Matter?</h3>
        <p>
          Model Context Protocol is the backbone of agentic AI. It's the standard that lets
          LLMs call tools — filesystem operations, API calls, database queries, terminal
          commands, web browsing — in a structured, discoverable way. Every major AI
          development platform (Claude Code, Cursor, Windsurf, Copilot) now supports MCP.
        </p>
        <p>
          When you give an LLM access to MCP tools, you're not just using a chatbot anymore.
          You're operating a privileged software agent. That changes the threat model completely.
        </p>

        <h3>The NSA's Core Concerns</h3>
        <p>The paper identified several critical risk categories for MCP systems:</p>
        <ul>
          <li>
            <strong>Tool poisoning</strong> — malicious MCP server descriptions that manipulate
            agent behavior by embedding hidden instructions in tool metadata
          </li>
          <li>
            <strong>Privilege escalation</strong> — agents granted broad MCP tool permissions
            that allow unintended actions beyond their design scope
          </li>
          <li>
            <strong>Rug pull attacks</strong> — a legitimate MCP server that changes its behavior
            after initial vetting (the "tool definition changes post-approval" problem)
          </li>
          <li>
            <strong>Cross-session data leakage</strong> — sensitive data from one agent session
            leaking into another through shared MCP server state
          </li>
          <li>
            <strong>Uncontrolled lateral tool calls</strong> — an agent using one MCP tool to
            discover and call other tools without explicit authorization
          </li>
        </ul>

        <h3>What This Means for Security Teams</h3>
        <p>
          If you're deploying AI agents with MCP access, you need to treat them like privileged
          software — because that's what they are. The NSA paper effectively validates the
          security architecture I've been advocating for:
        </p>
        <ul>
          <li>MCP tool calls should be vetted and allowlisted, not open-ended</li>
          <li>Agent behavior should be monitored at the tool-call layer, not just the output layer</li>
          <li>Tool definitions and server code should be version-pinned and integrity-verified</li>
          <li>Cross-agent isolation should prevent shared state leakage</li>
          <li>Egress controls should limit what MCP tools can reach externally</li>
        </ul>

        <h3>The Bigger Shift</h3>
        <p>
          Model security (red-teaming LLMs, alignment research, prompt hardening) isn't going away.
          But agent security is the new frontier. When AI systems can act autonomously — reading your
          files, calling your APIs, executing code — the security questions change:
        </p>
        <ul>
          <li>Not just "what can the model say?" but "what can the agent do?"</li>
          <li>Not just "how do we align the model?" but "how do we constrain the agent's capabilities?"</li>
          <li>Not just "what is the model's output?" but "what actions did the agent take?"</li>
        </ul>
        <p>
          The NSA publishing this paper is a watershed moment. Agent security is no longer
          a niche concern — it's a national security priority. If you're building or deploying
          agentic AI, now is the time to build security in, not bolt it on later.
        </p>
      </>
    ),
  },

  "tokenless-token-optimization": {
    title: "Most AI Teams Optimize Prompts — But Forget the Agent Itself",
    date: "2026-05-15",
    tags: ["TokenLess", "AI Efficiency", "Claude Code", "MCP"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          There's a pattern I've seen repeatedly with AI engineering teams: they spend
          weeks optimizing their prompts — shortening system messages, trimming few-shot
          examples, rewriting instructions — but completely ignore the agent layer.
          The result: their token costs keep climbing, their context windows keep filling up,
          and their inference bills keep growing.
        </p>
        <p>
          The prompt isn't the whole cost. The agent is. I built <strong>TokenLess</strong>
          to fix that.
        </p>

        <h3>What Is TokenLess?</h3>
        <p>
          TokenLess is an open-source token optimization hub — a collection of reusable AI
          skills (slash commands) that you can plug directly into Claude Code, Windsurf,
          MCP agents, and GitHub Copilot. Instead of manually reminding your AI assistant
          to be efficient every session, you give it a set of persistent skills that
          automatically enforce enterprise-ready token optimization practices.
        </p>

        <h3>The Core Insight</h3>
        <p>
          Most token waste doesn't come from prompts — it comes from agent behavior:
        </p>
        <ul>
          <li>Agents re-reading files they've already processed</li>
          <li>Agents including the full conversation history when only recent context matters</li>
          <li>Agents making redundant tool calls to fetch the same information</li>
          <li>Agents generating verbose intermediate output that gets fed back into the next call</li>
          <li>Agents using large context windows when a small focused window would work better</li>
        </ul>
        <p>
          These behaviors compound. An agent that re-reads a 50k-token codebase on every call
          is burning hundreds of thousands of tokens per session — before you've even written
          a single line of output.
        </p>

        <h3>What TokenLess Does</h3>
        <p>The skill packs cover five dimensions of token efficiency:</p>
        <ul>
          <li>
            <strong>Token &amp; Cost Tracking</strong> — real-time visibility into token spend
            per agent call, per tool, per session. Know exactly where your budget is going.
          </li>
          <li>
            <strong>Context Optimization</strong> — skills that compress, prune, and intelligently
            reuse context windows. Smart summarization of prior conversation state before window reset.
          </li>
          <li>
            <strong>Enterprise Skill Packs</strong> — drop-in optimization skills compatible with
            Claude Code, Windsurf, MCP-based agents, and GitHub Copilot.
          </li>
          <li>
            <strong>Training Paths</strong> — structured engineering guidelines for building
            token-efficient AI workflows from the ground up.
          </li>
          <li>
            <strong>Security-First Design</strong> — optimization patterns that never send
            sensitive data to external APIs and maintain audit trails of what context was used.
          </li>
        </ul>

        <h3>Real Numbers</h3>
        <p>
          In our benchmarks, a typical Claude Code workflow running without optimization
          uses ~100k tokens per complex task. With prompt caching alone: ~50k. With
          TokenLess skills applied on top: ~22k. That's a 78% reduction in token cost
          for the same output quality.
        </p>
        <p>
          At enterprise scale — hundreds of developers running AI agents every day —
          that's the difference between a manageable AI infrastructure budget and a runaway cost.
        </p>

        <h3>Getting Started</h3>
        <p>
          TokenLess is open source. You can install the skill packs directly from the
          GitHub repo and configure them in Claude Code's{" "}
          <code>.claude/commands/</code> directory. The skills are composable — use
          the full pack or pick individual optimization patterns.
        </p>
        <p>
          <ExternalLink href="https://github.com/ibrahimsaleem/TokenLess">
            View TokenLess on GitHub
          </ExternalLink>
        </p>
      </>
    ),
  },

  "ai-red-team-hallucination": {
    title: "AI-Assisted Red Teaming: The Hallucination Problem Is Dangerous",
    date: "2026-05-12",
    tags: ["Red Team", "AI Security", "LLM", "AppSec"],
    heroImage:
      "https://images.unsplash.com/photo-1555435025-10a3f6a24f06?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          AI-assisted red teaming is becoming mainstream. Security teams are using LLMs
          to speed up vulnerability research, generate attack payloads, map attack surfaces,
          and draft reports. But there's a problem that doesn't get talked about enough:
          <strong> AI hallucinations in security contexts aren't just wrong — they're dangerous.</strong>
        </p>

        <h3>What Hallucination Looks Like in Security</h3>
        <p>
          In a general AI context, hallucination means the model confidently produces
          incorrect information. In security workflows, that manifests as:
        </p>
        <ul>
          <li>
            <strong>Fake CVEs</strong> — citing vulnerability IDs that don't exist or
            attributing real CVEs to the wrong software versions
          </li>
          <li>
            <strong>Weak evidence</strong> — claiming a vulnerability exists based on code
            patterns that don't actually lead to exploitation
          </li>
          <li>
            <strong>Overstated severity</strong> — rating an informational finding as critical
            based on surface-level pattern matching rather than actual exploitability analysis
          </li>
          <li>
            <strong>Fabricated attack paths</strong> — describing multi-step exploitation chains
            that sound technically plausible but fail during actual testing
          </li>
          <li>
            <strong>Wrong remediation</strong> — recommending patches or configuration changes
            that don't address the actual vulnerability
          </li>
        </ul>

        <h3>Why This Is Uniquely Dangerous in Security</h3>
        <p>
          In most AI applications, a hallucination is annoying. You re-prompt, you fact-check,
          you move on. In security, the stakes are different:
        </p>
        <ul>
          <li>
            A security team that chases a hallucinated vulnerability wastes days of investigation
            time — time that could have caught real issues
          </li>
          <li>
            A red team report with fabricated findings destroys credibility and creates legal liability
          </li>
          <li>
            Remediation work done based on wrong vulnerability analysis leaves the actual
            vulnerability unpatched
          </li>
          <li>
            In incident response, a hallucinated attack path can misdirect the entire investigation
          </li>
        </ul>

        <h3>The Right Mental Model</h3>
        <p>
          AI doesn't replace security judgment — it amplifies people who know how to guide,
          verify, and control it. The failure mode isn't "AI is bad at security." The failure
          mode is "people trust AI output without verification in a domain where verification
          is non-negotiable."
        </p>
        <p>
          The right way to use AI in red teaming:
        </p>
        <ol>
          <li>Use AI to <em>generate hypotheses</em>, not conclusions</li>
          <li>Every AI-generated finding must be manually reproduced before it goes in a report</li>
          <li>CVE references must be cross-checked against NVD, not taken from LLM output</li>
          <li>Attack paths must be validated with actual PoC attempts, not accepted on model output alone</li>
          <li>Severity ratings must be determined by experienced analysts, not AI scoring</li>
        </ol>

        <h3>Building Verification Into AI Security Workflows</h3>
        <p>
          This is why I built EvilTrace AI's Zero-Hallucination Gate — a component that
          forces every finding to be traceable to verified evidence before it can advance
          in the pipeline. It's not about distrusting AI. It's about building the same
          verification discipline into AI workflows that we already apply to human analyst work.
        </p>
        <p>
          The teams that will use AI effectively in red teaming are the ones that treat AI
          output as "interesting lead worth investigating" — not "confirmed finding ready to report."
          That mindset shift, more than any prompt engineering technique, is what separates
          safe AI-assisted security work from dangerous AI-assisted security theater.
        </p>
      </>
    ),
  },

  "claude-malware-attack-path": {
    title: "Trusted AI Chats as Attack Paths: The Claude Malware Campaign",
    date: "2026-05-01",
    tags: ["Malware", "AI Security", "Claude", "Social Engineering"],
    heroImage:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          A campaign surfaced where attackers abused Google Ads and legitimate Claude shared
          chats to deliver Mac malware. The attack chain: a user searches for a Claude-related
          topic, clicks a sponsored Google Ad, lands on a page hosting a legitimate-looking
          Claude shared conversation — and that conversation contains fake install instructions
          delivering real malware.
        </p>
        <p>
          This isn't a vulnerability in Claude. It's something more interesting and more
          troubling: <strong>attackers abusing user trust in AI platforms as an attack vector.</strong>
        </p>

        <h3>How the Attack Worked</h3>
        <ol>
          <li>
            Attacker creates a fake Claude shared chat — a real Anthropic URL format that
            looks indistinguishable from a legitimate conversation
          </li>
          <li>
            The chat contains what appears to be a helpful tutorial — "how to install Claude
            locally" or similar — with a download link and install commands
          </li>
          <li>
            The attacker buys Google Ads targeting Claude-related searches to drive traffic
            to this page
          </li>
          <li>
            The user, expecting legitimate Claude content on a legitimate-looking Anthropic URL,
            follows the instructions and executes the malware
          </li>
        </ol>

        <h3>What Makes This Attack Effective</h3>
        <p>
          The attack is effective because it exploits a chain of trust:
        </p>
        <ul>
          <li>Users trust Google Ads for legitimate services (despite well-known ad abuse)</li>
          <li>Users trust Anthropic URLs as legitimate Claude content</li>
          <li>Users trust AI-generated instructions as technically accurate</li>
          <li>Users trust "shared chat" format as verified human-AI interaction</li>
        </ul>
        <p>
          None of those trust signals were compromised at the platform level. The attacker
          used legitimate infrastructure to create a convincing trust chain that ended in malware.
        </p>

        <h3>The Broader Lesson</h3>
        <p>
          AI security is no longer only about model safety — jailbreaks, alignment, output filtering.
          It's also about how attackers abuse trusted AI ecosystems and how users interact with
          AI platforms in security-relevant ways.
        </p>
        <p>
          The threat model for AI now includes:
        </p>
        <ul>
          <li>Social engineering through AI-generated content that looks authoritative</li>
          <li>Abuse of shared content features to distribute malware via trusted URLs</li>
          <li>Ad-driven traffic to fake AI tutorials and install guides</li>
          <li>AI-branded phishing using look-alike domains and legitimate-platform content</li>
        </ul>

        <h3>What Users and Organizations Should Do</h3>
        <ul>
          <li>Never follow software install instructions from shared AI chats — verify against official documentation</li>
          <li>Use browser extensions or enterprise controls to block malicious ad redirects</li>
          <li>Train security awareness programs to specifically cover AI platform impersonation</li>
          <li>Implement application allowlisting to prevent unauthorized executables on Mac endpoints</li>
          <li>Monitor for suspicious processes following AI tool downloads</li>
        </ul>
        <p>
          The lesson for defenders: your threat model needs to include the AI tools your
          users trust. Attackers have already figured out that users lower their guard
          around AI platforms. Now is the time to harden that surface.
        </p>
      </>
    ),
  },

  "vlm-prompt-injection": {
    title: "Hidden Instructions in Images: Prompt Injection in Vision-Language Models",
    date: "2026-04-28",
    tags: ["Prompt Injection", "VLM", "AI Security", "Cisco"],
    heroImage:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Cisco published research demonstrating prompt injection in vision-language models
          (VLMs) via hidden instructions embedded directly inside images. The technique works
          by making tiny, human-imperceptible visual changes to an image — changes so subtle
          that no human reviewer would notice them — but that VLMs still read and respond to
          as instructions.
        </p>
        <p>
          This is prompt injection for the visual modality. And it has serious implications
          for any AI system that processes images as part of its workflow.
        </p>

        <h3>How It Works</h3>
        <p>
          Traditional prompt injection embeds malicious instructions in text that gets
          processed by an LLM — in a webpage, a document, a database field. Visual prompt
          injection is the same attack, extended to the image modality:
        </p>
        <ol>
          <li>
            An attacker crafts an image with adversarial perturbations — pixel-level
            changes that encode a text instruction invisible to humans
          </li>
          <li>
            The image is placed in a context where a VLM will process it: a screenshot,
            a PDF diagram, a ticket attachment, a webpage preview, a product image
          </li>
          <li>
            When the VLM processes the image, it reads the hidden instruction alongside
            the visible content and may follow it
          </li>
          <li>
            The agent acts on the injected instruction — exfiltrating data, modifying
            outputs, calling unauthorized tools, or ignoring safety rules
          </li>
        </ol>

        <h3>Why This Matters for AI Agents</h3>
        <p>
          Modern AI agents with vision capabilities process images constantly:
        </p>
        <ul>
          <li>Coding agents that can see screenshots of UIs or error messages</li>
          <li>Customer service agents processing product photos or document scans</li>
          <li>Security agents analyzing dashboard screenshots or network diagrams</li>
          <li>Productivity agents reading PDFs with embedded figures</li>
          <li>Web-browsing agents that see webpage screenshots</li>
        </ul>
        <p>
          Any of these visual inputs can potentially contain adversarial instructions.
          The agent cannot tell the difference between a legitimate image and one
          containing a hidden injection payload.
        </p>

        <h3>The Fundamental Challenge</h3>
        <p>
          What makes visual prompt injection particularly hard to defend against:
        </p>
        <ul>
          <li>
            <strong>Imperceptibility</strong> — the perturbations are invisible to humans,
            so manual review doesn't catch them
          </li>
          <li>
            <strong>Ubiquity of image inputs</strong> — restricting image processing would
            break the core functionality of vision-capable agents
          </li>
          <li>
            <strong>Cross-modal trust confusion</strong> — agents may grant instructions
            embedded in images the same trust level as user instructions
          </li>
          <li>
            <strong>Detection difficulty</strong> — there's no simple signature-based
            detection for adversarial image perturbations
          </li>
        </ul>

        <h3>Defense Approaches</h3>
        <p>
          Current defenses are incomplete but worthwhile:
        </p>
        <ul>
          <li>
            <strong>Input sanitization</strong> — pre-processing images through adversarial
            perturbation detectors or compression/recompression before VLM processing
          </li>
          <li>
            <strong>Privilege separation</strong> — image-processing agents shouldn't have
            access to sensitive tools or data; treat visual inputs as untrusted
          </li>
          <li>
            <strong>Output monitoring</strong> — flag agent actions that weren't predictable
            from the visible content of processed images
          </li>
          <li>
            <strong>Source verification</strong> — for high-stakes workflows, only process
            images from verified, integrity-checked sources
          </li>
        </ul>
        <p>
          This research underscores a principle I keep coming back to: if an AI system
          can "see" something, attackers will try to hide instructions inside it.
          Every AI input modality is also a potential injection surface.
        </p>
      </>
    ),
  },

  "next-breach-ai-tool": {
    title: "Your Next Breach Won't Start with a Firewall — It'll Start with an AI Tool",
    date: "2026-04-22",
    tags: ["AI Security", "Data Breach", "Zero Trust", "Identity"],
    heroImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          In a single week: Ameriprise, Kemper, Citizens Financial, and Vercel all had
          security incidents. Same underlying pattern across all of them: attackers weren't
          breaking through firewalls. They were logging in. Or getting your tools to do it for them.
        </p>
        <p>
          The era of perimeter defense is over. Your next breach won't start at the firewall.
          It'll start with an over-permissioned AI tool, a trusted plugin, or an identity
          with too much access.
        </p>

        <h3>The New Attack Pattern</h3>
        <p>
          The incidents from that week shared a structural pattern that's becoming the new
          normal for enterprise breaches:
        </p>
        <ol>
          <li>
            <strong>Entry via trusted identity</strong> — compromised credentials, OAuth token
            theft, or session hijacking — not network exploitation
          </li>
          <li>
            <strong>Lateral movement via integrated tools</strong> — using AI tools, dev
            platforms, or integrated services that have cross-system access
          </li>
          <li>
            <strong>Data access through trusted applications</strong> — legitimate business
            tools (CRM, data platforms, AI assistants) that have broad read access used
            to exfiltrate data without triggering alerts
          </li>
          <li>
            <strong>Persistence via trusted infrastructure</strong> — using legitimate cloud
            resources, CI/CD pipelines, or SaaS configurations to maintain access
          </li>
        </ol>

        <h3>Why AI Tools Are the New Attack Surface</h3>
        <p>
          AI tools and agents have a unique property that makes them especially attractive
          to attackers: they're designed to access everything.
        </p>
        <p>
          A developer's AI coding assistant might have access to their entire codebase,
          credentials files, SSH keys, cloud configurations, and API tokens — because
          it needs that access to be useful. An enterprise AI knowledge tool might have
          read access to all company documents, emails, and databases.
        </p>
        <p>
          When these tools are compromised — through prompt injection, plugin vulnerabilities,
          OAuth scope abuse, or token theft — an attacker inherits that broad access.
          Not as a restricted guest. As the AI tool, which everyone trusts.
        </p>

        <h3>The Over-Permission Problem</h3>
        <p>
          Most AI tool deployments violate least-privilege by default. Vendors want their
          tools to "just work," so they request broad permissions. Developers grant them
          because dealing with permission scoping is friction. The result: every AI tool
          in your environment is a potential crown-jewels access point.
        </p>

        <h3>What Zero Trust Actually Means for AI</h3>
        <p>
          Zero Trust isn't just "verify every user." For AI tools, it means:
        </p>
        <ul>
          <li>
            <strong>Scope all AI integrations to minimum required permissions</strong> —
            not "all docs" but "these specific docs"
          </li>
          <li>
            <strong>Treat AI tool credentials as high-value secrets</strong> — rotate them,
            monitor their use, set alerts on anomalous access patterns
          </li>
          <li>
            <strong>Monitor AI tool behavior, not just AI tool outputs</strong> —
            what APIs did it call, what data did it access, what did it send externally?
          </li>
          <li>
            <strong>Require re-authorization for sensitive operations</strong> —
            don't let a single OAuth token grant perpetual broad access
          </li>
          <li>
            <strong>Audit AI plugin and integration inventories</strong> —
            most security teams can't name all the AI tools their developers are using
          </li>
        </ul>

        <h3>The Hard Truth</h3>
        <p>
          The enterprises that got hit this week were using standard security controls —
          firewalls, EDR, SIEM. But those controls weren't watching their AI tools.
          The attackers were.
        </p>
        <p>
          Your threat model needs to include every AI tool with system access as a
          potential breach vector. Not because AI is insecure by nature, but because
          AI tools with over-provisioned access are high-value, low-visibility targets.
          And attackers have already found them.
        </p>
      </>
    ),
  },

  "self-evolving-agents-security": {
    title: "AI Agents Are Becoming Self-Evolving: A Security Wake-Up Call",
    date: "2026-03-25",
    tags: ["Agentic AI", "AI Governance", "Security", "Meta-Skills"],
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          We talk about AI agents like they're fixed systems — you deploy them, they do
          a job, you update them when needed. But a new class of capability is changing
          that assumption: <strong>self-evolving agents</strong> that can create and
          persist new capabilities for themselves.
        </p>
        <p>
          Concepts like meta-skills in Google's Agent Development Kit let agents read
          skill specifications, learn from examples, generate new capability implementations,
          and persist them across sessions. Once an agent can decide what it can become,
          the security model changes fundamentally.
        </p>

        <h3>What Self-Evolution Means</h3>
        <p>
          Traditional AI agents have a fixed tool set defined at deployment time.
          A self-evolving agent can:
        </p>
        <ul>
          <li>Observe a task it can't currently do well</li>
          <li>Generate a new skill or tool to do it better</li>
          <li>Store that skill persistently so it's available in future sessions</li>
          <li>Share that skill with other agents in the system</li>
        </ul>
        <p>
          In a controlled engineering context, this is powerful. An agent that improves
          its own code generation by creating new specialized tools doesn't need human
          intervention to get better at its job.
        </p>

        <h3>The Security Problem</h3>
        <p>
          When agents can create new capabilities, capability creation itself becomes an
          execution boundary that needs to be secured.
        </p>
        <p>
          Consider what happens when an attacker can influence an agent to generate a new
          "skill" — through prompt injection in a document the agent reads, through
          malicious data in a database the agent queries, or through a compromised MCP server.
          That skill persists across sessions. It runs with the agent's permissions.
          It might propagate to other agents that load shared skill libraries.
        </p>
        <p>
          This is agent-level supply chain compromise. Not "I injected a bad prompt this
          session" but "I planted a persistent capability that will run every time this
          agent operates."
        </p>

        <h3>The Governance Gap</h3>
        <p>
          Current AI security frameworks weren't designed for self-evolving agents:
        </p>
        <ul>
          <li>
            Traditional allowlisting doesn't work when the tool set changes dynamically
          </li>
          <li>
            Code review processes don't cover AI-generated skills that are created
            and deployed at runtime
          </li>
          <li>
            Audit logs that track "which tools the agent used" don't capture
            "which tools the agent created"
          </li>
          <li>
            Permission models that scope agents to a fixed set of capabilities are
            undermined when agents can add to that set
          </li>
        </ul>

        <h3>What Security Teams Need to Think About Now</h3>
        <p>
          The organizations deploying Google ADK and similar frameworks need answers to
          these questions before they go to production:
        </p>
        <ol>
          <li>Is skill creation logged and audited?</li>
          <li>Are newly created skills reviewed before they become persistent?</li>
          <li>Is there a skill allowlist or approval workflow?</li>
          <li>Can skills be rolled back if they're found to be malicious?</li>
          <li>What's the blast radius if a rogue skill propagates to other agents?</li>
          <li>Are skill definitions stored with integrity protection?</li>
        </ol>
        <p>
          Self-evolving agents are coming regardless of whether security teams are ready.
          The window to build governance frameworks for capability creation is now — before
          these patterns are standard in production deployments.
        </p>
        <p>
          As AI agents become more autonomous, security isn't only about controlling what
          agents do. It's about controlling what agents <em>become</em>.
        </p>
      </>
    ),
  },

  "ai-cheatsheets-engineering": {
    title: "GenAI Depth Comes From Understanding What Happens Beyond the Prompt",
    date: "2026-04-10",
    tags: ["AI Engineering", "Transformers", "Prompt Caching", "LLMOps"],
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          Most people using AI tools interact at the prompt level. Type something in, get
          something out. That's fine for casual use. But if you're building AI systems,
          securing AI deployments, or trying to understand why your AI behaves the way
          it does — you need to understand what happens beyond the prompt.
        </p>
        <p>
          I put together three visual cheat sheets that cover the technical internals of
          AI systems from an engineering and security perspective. These are the concepts
          that unlock real depth in AI work.
        </p>

        <h3>Cheat Sheet 1: AI Engineering Architecture</h3>
        <p>
          The first sheet covers the full stack of a production AI system:
        </p>
        <ul>
          <li>
            <strong>RAG (Retrieval-Augmented Generation)</strong> — how knowledge bases
            are chunked, embedded, stored, retrieved, and injected into context. Why
            chunk size and overlap matter. How re-ranking works.
          </li>
          <li>
            <strong>Agentic architectures</strong> — the difference between single-shot
            inference, chain-of-thought, tool use, and multi-agent orchestration. When
            to use each.
          </li>
          <li>
            <strong>Evaluation pipelines</strong> — how to measure AI system quality beyond
            "does it seem right." RAGAS, G-Eval, human evaluation frameworks.
          </li>
        </ul>
        <p>
          From a security perspective: knowing the RAG architecture tells you where the
          injection surfaces are. Knowing the agent orchestration pattern tells you
          where the privilege escalation risks live.
        </p>

        <h3>Cheat Sheet 2: Transformer Internals</h3>
        <p>
          The second sheet goes into the model itself:
        </p>
        <ul>
          <li>
            <strong>Tokenization</strong> — how text becomes numbers. Why tokenization
            boundaries matter for injection attacks and why some characters behave
            unexpectedly in prompts.
          </li>
          <li>
            <strong>Embeddings</strong> — how semantic meaning is encoded in vector space.
            Why embedding similarity is the foundation of RAG retrieval and vector DB security.
          </li>
          <li>
            <strong>Attention mechanisms</strong> — how the model decides what to "pay
            attention to" in context. Why long contexts degrade attention on early content.
            Why position matters.
          </li>
          <li>
            <strong>Logits and sampling</strong> — how the model produces output token by
            token. Why temperature matters. How top-p and top-k affect output diversity.
          </li>
        </ul>
        <p>
          Understanding transformers at this level is what separates prompt engineers
          from AI engineers. It tells you why your system behaves the way it does —
          not just that it does.
        </p>

        <h3>Cheat Sheet 3: Prompt Caching &amp; LLM Cost Optimization</h3>
        <p>
          The third sheet is the most immediately practical for enterprise AI:
        </p>
        <ul>
          <li>
            <strong>How prompt caching works</strong> — which parts of a prompt are
            cache-eligible, how cache hits reduce cost, how to structure prompts for
            maximum cache efficiency
          </li>
          <li>
            <strong>Context window economics</strong> — the cost difference between
            input tokens, cached tokens, and output tokens across major providers
          </li>
          <li>
            <strong>Batching strategies</strong> — when to batch requests vs. process
            in real-time, and the latency/cost tradeoffs
          </li>
          <li>
            <strong>Model selection economics</strong> — how to route requests between
            frontier and efficient models based on task complexity
          </li>
        </ul>

        <h3>Why This Connects to Security</h3>
        <p>
          These aren't purely technical curiosities. They connect directly to enterprise
          security concerns:
        </p>
        <ul>
          <li>
            Tokenization knowledge helps you understand why some prompt injection payloads
            work and others don't
          </li>
          <li>
            Attention internals help you understand context poisoning — injecting content
            that biases the model's attention away from security constraints
          </li>
          <li>
            Cache architecture tells you what data is stored, for how long, and whether
            cross-user cache contamination is possible
          </li>
          <li>
            Cost optimization directly reduces the blast radius of prompt injection attacks
            that try to maximize token consumption
          </li>
        </ul>
        <p>
          GenAI depth comes from understanding the full stack. The prompt is the surface.
          The security and reliability of your system lives in what's underneath it.
        </p>
      </>
    ),
  },

  "2026-cybersecurity-ai-force-multiplier": {
    title: "2026 Cybersecurity: AI Is a Force Multiplier — Good and Bad",
    date: "2026-03-15",
    tags: ["AI Security", "2026 Predictions", "Agents", "Post-Quantum"],
    heroImage:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          We're three months into 2026 and the cybersecurity landscape already looks
          different from anything I predicted two years ago. AI has become a genuine
          force multiplier on both sides of the security equation — attackers and defenders
          alike are operating faster and at greater scale than before. Here's what
          I'm seeing and what it means for the rest of the year.
        </p>

        <h3>Shadow AI: The Invisible Risk</h3>
        <p>
          Shadow AI is quietly becoming one of the biggest breach risk factors in enterprises.
          Employees are using unauthorized AI tools to process work data — feeding documents,
          code, customer data, and internal reports into consumer AI products that weren't
          vetted by security teams.
        </p>
        <p>
          IBM's breach cost data shows that organizations with significant shadow AI usage
          are paying meaningfully more per incident — not because the AI tools themselves
          are being exploited, but because they've expanded the data exposure surface
          without corresponding security controls.
        </p>

        <h3>Deepfakes: From Novel to Normal</h3>
        <p>
          Deepfake-enabled attacks have exploded. CFO impersonation via AI voice and video
          is now a documented, repeatable attack pattern. What was a novelty two years ago
          is now a standard technique in business email compromise operations.
        </p>
        <p>
          The defense response has lagged. Most organizations still don't have
          out-of-band verification protocols for high-value financial requests.
          This gap is being actively exploited.
        </p>

        <h3>Prompt Injection: Still the #1 AI Security Risk</h3>
        <p>
          Despite being well-documented for years, prompt injection remains the most
          prevalent AI security vulnerability in production deployments. The reason:
          defense is structurally hard. Unlike SQL injection, which has mature ORM
          protections, prompt injection doesn't have a clean technical fix — it requires
          architectural discipline (input validation, privilege separation, output monitoring)
          that most teams haven't implemented.
        </p>
        <p>
          I expect prompt injection to remain the #1 AI security risk through at least mid-2027,
          until the industry develops something equivalent to parameterized queries for
          the LLM context.
        </p>

        <h3>The Real 2026 Story: Attacks ON AI Agents</h3>
        <p>
          The shift I'm most focused on isn't attackers using AI — it's attackers attacking AI.
          Specifically, attacks targeting autonomous AI agents that have been granted
          significant system privileges.
        </p>
        <p>
          An autonomous AI agent with excessive privileges can:
        </p>
        <ul>
          <li>Exfiltrate data at machine speed without human detection</li>
          <li>Automate entire attack chains — reconnaissance, exploitation, lateral movement, exfiltration — without a single human click</li>
          <li>Persist access by creating new credentials or modifying configurations</li>
          <li>Evade detection by using legitimate tool calls that appear as normal agent activity</li>
        </ul>
        <p>
          We've already seen proof-of-concept work demonstrating all of these techniques.
          The first major breach attributable to compromised AI agent privileges is a matter
          of when, not if.
        </p>

        <h3>Post-Quantum: The Long Game</h3>
        <p>
          NIST finalized its post-quantum cryptography standards in 2024. Organizations
          that haven't started their crypto-agility programs are now officially behind.
          The Q-Day timeline is uncertain, but the migration work is massive — and every
          year of delay makes it harder.
        </p>

        <h3>What Security Teams Should Prioritize in 2026</h3>
        <ol>
          <li>Build AI tool inventory and access governance programs</li>
          <li>Implement prompt injection defenses in all AI agent deployments</li>
          <li>Establish out-of-band verification for deepfake-vulnerable workflows</li>
          <li>Start post-quantum migration planning if you haven't already</li>
          <li>Treat AI agents as privileged users in your identity and access management frameworks</li>
        </ol>
        <p>
          AI is a force multiplier. That means it amplifies what you're already doing —
          good and bad. The organizations that will win in this environment are the ones
          that operationalize AI security as a discipline, not a project.
        </p>
      </>
    ),
  },

  "clawprotect-release": {
    title: "ClawProtect: Defense-in-Depth Security for AI Agent Gateways",
    date: "2026-03-10",
    tags: ["ClawProtect", "eBPF", "Prompt Injection", "AI Security"],
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&h=800&fit=crop",
    Content: () => (
      <>
        <p>
          After months of research, building, and testing, I'm releasing{" "}
          <strong>ClawProtect</strong> — a defense-in-depth security stack for AI agent
          gateways. It's the security layer that should exist between every AI agent
          and the systems it touches, and it's open source.
        </p>
        <p>
          The academic paper accompanying the release is also live, covering the full
          threat model, architecture decisions, and evaluation results.
        </p>

        <h3>Why I Built ClawProtect</h3>
        <p>
          Every major AI agent framework gives you powerful capabilities with minimal
          security controls. You can give an agent file system access, shell execution,
          API call permissions, and database write access — and the framework will happily
          execute whatever the model decides to do with those tools.
        </p>
        <p>
          There's no built-in runtime policy enforcement. No syscall-level monitoring.
          No egress controls. No content inspection before tool calls execute.
          The agent is a privileged process with the trust level of the system operator —
          and no guardrails.
        </p>
        <p>
          ClawProtect fixes that with a five-layer defense architecture.
        </p>

        <h3>Architecture: Five Security Layers</h3>

        <h4>Layer 1: Content-Aware Security Proxy</h4>
        <p>
          Sits between the agent and all tool calls. Inspects every action — file reads,
          API calls, shell commands, database queries — for:
        </p>
        <ul>
          <li>Prompt injection patterns in tool parameters</li>
          <li>PII detection in inputs and outputs</li>
          <li>Secret and credential patterns (API keys, tokens, passwords)</li>
          <li>Known vulnerability exploitation signatures</li>
        </ul>
        <p>
          Actions are evaluated against policy (ALLOW / WARN / BLOCK / AUDIT) before
          execution. Blocked actions are logged and the agent is notified with a safe error.
        </p>

        <h4>Layer 2: eBPF Kernel Monitor</h4>
        <p>
          The most technically novel component. Uses extended Berkeley Packet Filter
          (eBPF) programs loaded into the Linux kernel to provide syscall-level
          behavioral visibility for agent processes:
        </p>
        <ul>
          <li>Tracks every system call made by agent processes</li>
          <li>Monitors file I/O patterns for unexpected access</li>
          <li>Detects process spawning (agents spawning child processes is a red flag)</li>
          <li>Observes network connections at the socket level, before TLS</li>
        </ul>
        <p>
          eBPF monitoring runs in kernel space with minimal overhead and can't be
          bypassed by the agent process itself — unlike userspace monitoring that
          a sophisticated agent could potentially detect and evade.
        </p>

        <h4>Layer 3: Egress Firewall</h4>
        <p>
          Strict outbound policy enforcement with allowlist-based controls:
        </p>
        <ul>
          <li>Only explicitly approved external endpoints are reachable</li>
          <li>DNS queries are monitored for domain generation algorithm (DGA) patterns</li>
          <li>Data volume limits per session detect exfiltration attempts</li>
          <li>Protocol enforcement prevents covert channel use</li>
        </ul>

        <h4>Layer 4: Cross-Layer Adaptive Event Bus</h4>
        <p>
          The integration layer that makes the other three layers coherent:
        </p>
        <ul>
          <li>Aggregates events from proxy, eBPF monitor, and egress firewall</li>
          <li>Correlates across layers to detect multi-step attack patterns</li>
          <li>Triggers adaptive responses when correlated risk exceeds thresholds</li>
          <li>Exports to SIEM (Splunk, Elastic, CloudWatch) for audit and investigation</li>
        </ul>

        <h3>Research Results</h3>
        <p>
          The academic paper includes evaluation results from testing ClawProtect against
          common AI agent attack scenarios:
        </p>
        <ul>
          <li>Prompt injection via tool parameters: 97% detection rate</li>
          <li>Data exfiltration via egress: 100% block rate (allowlist enforcement)</li>
          <li>Privilege escalation via unexpected tool calls: detected in all test cases</li>
          <li>Covert channel via DNS: detected by the egress monitor in all cases</li>
          <li>Runtime overhead: &lt;3% latency increase on agent tool calls</li>
        </ul>

        <h3>Getting Started</h3>
        <p>
          ClawProtect is open source and available on GitHub. The repository includes:
        </p>
        <ul>
          <li>Full source code for all four security layers</li>
          <li>Docker deployment configuration</li>
          <li>Policy configuration examples for common agent frameworks</li>
          <li>Integration guides for Claude Code, LangChain, and custom MCP agents</li>
          <li>The full academic paper (PDF)</li>
        </ul>
        <p>
          <ExternalLink href="https://github.com/ibrahimsaleem/ClawProtect">
            View ClawProtect on GitHub
          </ExternalLink>
        </p>
        <p>
          This is v1.0. The roadmap includes Windows support, additional MCP framework
          integrations, a cloud-hosted policy management dashboard, and a threat intelligence
          feed for automatic policy updates. Contributions welcome.
        </p>
      </>
    ),
  },
};

export default blogContent;


