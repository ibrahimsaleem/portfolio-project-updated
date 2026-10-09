// Ibrahim's factual profile, shared by the job-fit popup and the voice assistant. Kept evidence-only so neither
// can invent anything; update it here when the CV changes.
export const PROFILE_FACTS = `
CANDIDATE: Mohammad Ibrahim Saleem
LINKEDIN: 5,386 followers (as of Oct 2026); posts on AI security, LLM routing and agentic AI.
LOCATION: Houston, TX
CONTACT: +1 (713) 853-7974 | ibrahimsaleem244@gmail.com | linkedin.com/in/ibrahimsaleem91 | github.com/ibrahimsaleem

CURRENT ROLE: AI Security & Governance Engineer, AT&T (Jan 2026–present, Plano TX, Hybrid)
- Designed agentic AI governance/security-review pipelines; reduced AI use-case approval time from 10-12 days to under 6 minutes.
- Built a provider-agnostic LLM red-team harness (415+ adversarial prompts, MITRE ATT&CK-structured, OWASP Top 10 for LLMs & Agents coverage).
- Audited a 15-node LangGraph AI governance pipeline; found a critical fail-open defect.
- Works within OWASP Top 10 for LLMs & Agents, NIST AI-RMF, ISO 42001, zero-trust principles.

PRIOR ROLE: GenAI & Data Science Intern, NOV Inc. (June 2025-Dec 2025, Houston TX)
- Architected an autonomous multi-agent GenAI system (Azure OpenAI GPT-4o/5) for document parsing; 360x throughput improvement, 95%+ accuracy.
- Built hybrid-search (BM25 + dense embeddings) vector-DB retrieval for agentic workflows.
- Fine-tuned Code-Llama 8B for a secure MCP server (natural language -> Expression Language).
- Automated email triage/routing, reclaiming 20+ hours/week of manual work.
- Co-author (2nd author) on published paper: "Self-Improving Generative AI Agents for Automated Daily Mud Report Parsing" - IADC/SPE International Drilling Conference & Exhibition, March 2026. DOI 10.2118/230772-MS (verified via Crossref).

PRIOR ROLE: Research Assistant - AI & Cybersecurity, University of Houston (Sep 2024-May 2025)
- First author on published paper: "LIMA: Leveraging Large Language Models and MCP Servers for Initial Machine Access" - IEEE FMLDS 2025. DOI 10.1109/fmlds67896.2025.00135 (verified via Crossref).
- LIMA's actual published results: Claude 3.5 completed HackTheBox/custom-VM targets with a mean completion time of 13 minutes, up to 2x faster than an expert human tester, 90-100% autonomous completion on low-complexity targets, full run cost <= $0.05.
- Built PentestThinkingMCP, an open-source MCP server using Beam Search and Monte Carlo Tree Search (MCTS) for autonomous attack-path planning. 38 GitHub stars, 8 forks (verified). Listed on Smithery.ai, Glama.ai, MCP Toplist.

PRIOR ROLE: Associate Software Engineer, Nagarro Software Pvt. Ltd. (Mar 2023-Feb 2024)
- Built C#/.NET Core backend + SQL Server across 25+ enterprise APIs, 30% query performance improvement.
- Delivered REST APIs at 99.9% uptime handling 1,000+ daily requests, with JWT/RBAC security.

FOUNDER ROLES:
- Founder & AI Engineer, WarmNodeAI (Apr 2026-present) - privacy-focused AI platform for professional relationship intelligence. Live at warmnode.me.
- Founder & AI Product Engineer, HireEase (Nov 2024-present) - AI-powered career/job-application platform; 40,000+ applications processed, 300+ clients (self-reported traction figures).

EDUCATION: M.S. Cybersecurity, University of Houston (Graduated May 2026, GPA 3.98/4.0, $16,000 scholarship). B.Tech Computer Science Engineering, Rajiv Gandhi Proudyogiki Vishwavidyalaya (July 2023).

CERTIFICATIONS: Microsoft Certified Azure AI Engineer Associate, Microsoft Azure AI Fundamentals (AI-900), Microsoft Azure Fundamentals (AZ-900), OWASP Top 10 for LLMs, ISC2 Certified in Cybersecurity (CC), CompTIA Security+ (in progress), Fortinet NSE 1-3.

KEY OPEN-SOURCE / SIDE PROJECTS:
- ClawProtect - AI agent security gateway (Go, Python, eBPF, Prometheus): real-time prompt-injection/PII/command-injection detection, eBPF kernel monitoring.
- SwitchLane - cost-aware LLM request-routing engine (Python, FastAPI, RouteLLM): 40.5% inference cost reduction at 100% pass rate.
- EvilTrace AI - multi-agent DFIR engine (7-agent pipeline, Zero-Hallucination Gate), built for the FIND EVIL Hackathon.
- TokenLess - open-source token-optimization skill pack for AI coding agents (Claude Code, Copilot, etc.), up to 78% token-cost reduction on real workflows.
- Saleem Harness / Saleem Meta Harness - personalized coding-agent CLI + a tool that builds other coding-agent harnesses from templates.
- Compass - internal AI agent platform built around a "Ward" guardrail layer for policy/safety enforcement on autonomous agent actions.

SKILLS: Python, Go, C#, C++, SQL, TypeScript/JavaScript, Bash/PowerShell | LangChain, LangGraph, MCP (Model Context Protocol), Hugging Face, Azure OpenAI, RAG, Multi-Agent Systems, Fine-Tuning | Azure Cloud, Docker, Kubernetes, Terraform, GitLab CI/CD | OWASP Top 10 for LLMs & Agents, NIST AI-RMF, ISO 42001, eBPF, Zero Trust, MITRE ATT&CK | Splunk/SPL, SOAR/Cortex XSOAR concepts, SIEM/EDR

LEARNING AGILITY (concrete evidence, not a general trait claim): MCP (Model Context Protocol) is a very new standard (Anthropic released it in late 2024) — Ibrahim had already built and shipped multiple MCP servers on it (PentestThinkingMCP, MCP Security Lab) within months of release. He built a personalized coding-agent CLI (Saleem Harness) and a second tool that builds other coding-agent harnesses from templates (Saleem Meta Harness) — both on agent-harness engineering patterns, prompt/context engineering, and AI-agent security (prompt injection defense) that only became common practice in 2025-2026. He holds a Microsoft Azure AI Engineer Associate certification earned in 2026, on top of earlier Azure fundamentals certs, showing continued certification while working full-time. Across AT&T, NOV, and his own projects, his work spans whatever the current frontier tooling is (Claude, GPT-4o/5, LangGraph, MCP, RouteLLM) rather than one fixed stack. He is also a self-described heavy AI-assisted ("AI-fueled") developer — using AI coding agents (Claude Code and similar) as a core part of his own development workflow to design, build, and deploy production systems quickly. He has founded two companies (WarmNodeAI, HireEase) and has 4 research papers (2 published), on top of full-time engineering work — evidence of building and learning in parallel, not sequentially. Self-reported: a manager has described his output as equivalent to that of three engineers.
`;
