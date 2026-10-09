import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./VisitorPopup.css";

const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const SHOWN_FLAG = "ibrahim_portfolio_popup_shown_v1";

// Same factual profile used by the site's chatbot — kept intentionally
// evidence-only so the fit evaluator below cannot invent anything.
const PROFILE_FACTS = `
CANDIDATE: Mohammad Ibrahim Saleem
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

const EVALUATOR_SYSTEM_PROMPT = `You are an independent, rigorous technical-recruiting assistant. Your ONLY job is to evaluate, honestly, whether Mohammad Ibrahim Saleem is a fit for a job description a recruiter pastes in. You represent his real record faithfully; you do not represent his interests over the truth.

RULES (do not break these):
1. Use ONLY the facts in CANDIDATE PROFILE below. Never invent a skill, employer, result, degree, or project that is not listed there.
2. Score honestly. A genuinely strong match (AI security, agentic AI/LLM engineering, GenAI, ML infrastructure, cybersecurity roles) can and should score high if the evidence supports it — do not artificially cap or deflate a real match. But a role this profile does not support (e.g. unrelated fields with no overlapping skills) must score low. Do not default to any fixed number in either direction; derive the score from the actual overlap between the job description and the profile.
3. Every "matchedEvidence" bullet must cite something specific and real from the profile (a named project, paper with venue/DOI, employer, quantified result) tied to a specific requirement in the job description. Do not write generic praise with no evidence behind it.
4. If the job description asks for something not in the profile (a language, a domain, years of experience, a clearance, an industry), say so plainly in "gaps". Do not paper over real gaps — never omit or soften a real gap just to look better.
5. Whenever "gaps" is non-empty, also fill "gapsContext" with ONE honest sentence, grounded in the LEARNING AGILITY facts in the profile (not generic praise), explaining why this specific gap is likely closeable quickly given his track record (e.g. reference the specific evidence — MCP servers built within months of the protocol's release, his own coding-agent harness projects, continued certification, founder + published-researcher + full-time-engineer in parallel, AI-assisted development workflow). This is additional honest context, not a replacement for stating the gap — the gap must still be listed plainly in "gaps". If "gaps" is empty, leave "gapsContext" as an empty string.
6. Output ONLY valid JSON matching this exact shape, no markdown, no commentary outside the JSON:
{
  "score": <integer 0-100>,
  "verdict": "<short headline, e.g. 'Strong Fit', 'Solid Fit', 'Partial Fit', 'Not a Strong Fit'>",
  "summary": "<2-3 sentence honest overall assessment, written for a recruiter reading it in 10 seconds>",
  "matchedEvidence": ["<bullet 1 tied to a specific JD requirement>", "<bullet 2>", "..."],
  "gaps": ["<honest gap 1, or empty array if genuinely none>"],
  "gapsContext": "<one sentence per rule 5, or empty string if gaps is empty>"
}

CANDIDATE PROFILE:
${PROFILE_FACTS}`;

function ScoreBadge({ score }) {
  let color = "#FF5F57";
  if (score >= 80) color = "#00FF41";
  else if (score >= 60) color = "#00D4FF";
  else if (score >= 40) color = "#FFB020";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "110px",
        height: "110px",
        borderRadius: "50%",
        border: `3px solid ${color}`,
        boxShadow: `0 0 24px ${color}55`,
        background: "rgba(0,6,18,0.6)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "1.8em",
          fontWeight: 800,
          color,
        }}
      >
        {score}%
      </div>
      <div style={{ fontSize: "0.65em", color: "rgba(200,220,240,0.6)" }}>
        MATCH
      </div>
    </div>
  );
}

export default function VisitorPopup() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState("ask"); // ask | browsing | recruiter | evaluating | result
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const excludedPaths = ["/admin-leads", "/ibrahim-eb1-o1-dossier-private"];
    if (excludedPaths.includes(window.location.pathname)) return;

    let already = false;
    try {
      already = sessionStorage.getItem(SHOWN_FLAG) === "1";
    } catch (e) {
      already = false;
    }
    if (already) return;

    const timer = setTimeout(() => {
      setVisible(true);
      try {
        sessionStorage.setItem(SHOWN_FLAG, "1");
      } catch (e) {
        // ignore — storage may be unavailable (private browsing etc.)
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
  }

  async function logSubmission(extra) {
    try {
      await addDoc(collection(db, "visitor_leads"), {
        timestamp: serverTimestamp(),
        name: name || null,
        email: email || null,
        page: window.location.pathname,
        ...extra,
      });
    } catch (e) {
      // Firestore may not be enabled yet, or the write may be blocked —
      // never let logging failures break the visitor's experience.
      console.warn("Could not log visitor submission:", e.message);
    }
  }

  async function submitBrowsingFeedback() {
    await logSubmission({ isHiringManager: false, feedback: feedback || null });
    setStep("thanks");
  }

  async function evaluateFit() {
    const jd = jobDescription.trim();
    if (!jd) {
      setError("Paste a job description first.");
      return;
    }
    if (!GEMINI_KEY) {
      setStep("fallback");
      await logSubmission({ isHiringManager: true, jobDescription: jd });
      return;
    }
    setError("");
    setStep("evaluating");

    const MAX_ATTEMPTS = 2;
    const REQUEST_TIMEOUT_MS = 9000;
    let lastErr = null;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      try {
        const res = await fetch(`${API_URL}?key=${GEMINI_KEY}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            system_instruction: { parts: [{ text: EVALUATOR_SYSTEM_PROMPT }] },
            contents: [{ role: "user", parts: [{ text: `JOB DESCRIPTION TO EVALUATE:\n\n${jd}` }] }],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 1536,
              responseMimeType: "application/json",
              thinkingConfig: { thinkingBudget: 0 },
            },
          }),
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`API error ${res.status}`);
        }

        const data = await res.json();
        const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsed = JSON.parse(raw);

        setEvaluation(parsed);
        setStep("result");
        await logSubmission({
          isHiringManager: true,
          jobDescription: jd,
          evaluation: parsed,
        });
        return; // success — stop retrying
      } catch (e) {
        clearTimeout(timeoutId);
        lastErr = e.name === "AbortError" ? new Error("Request timed out") : e;
        if (attempt < MAX_ATTEMPTS) {
          await new Promise((r) => setTimeout(r, 500));
        }
      }
    }

    // All attempts failed — never show a raw error to a recruiter.
    // Show a still-polished fallback instead, and log it so Ibrahim
    // knows the evaluator needs attention.
    console.warn("Job-fit evaluator failed after retries:", lastErr?.message);
    setStep("fallback");
    await logSubmission({
      isHiringManager: true,
      jobDescription: jd,
      evaluatorFailed: true,
    });
  }

  if (!visible) return null;

  return (
    <div className="vp-overlay">
      <div className="vp-card">
        <button className="vp-close" onClick={close} aria-label="Close">
          ×
        </button>

        {step === "ask" && (
          <>
            <h3 className="vp-title">👋 Quick question</h3>
            <p className="vp-sub">
              Are you a hiring manager or recruiter checking if Ibrahim's a fit
              for a role?
            </p>
            <div className="vp-row">
              <button className="vp-btn vp-btn-primary" onClick={() => setStep("recruiter")}>
                Yes, I'm hiring
              </button>
              <button className="vp-btn vp-btn-secondary" onClick={() => setStep("browsing")}>
                No, just browsing
              </button>
            </div>
          </>
        )}

        {step === "browsing" && (
          <>
            <h3 className="vp-title">Thanks for stopping by!</h3>
            <p className="vp-sub">Anything you'd like Ibrahim to know? (optional)</p>
            <input
              className="vp-input"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="vp-textarea"
              rows={3}
              placeholder="Feedback, a question, anything..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="vp-row">
              <button className="vp-btn vp-btn-primary" onClick={submitBrowsingFeedback}>
                Send
              </button>
              <button className="vp-btn vp-btn-secondary" onClick={close}>
                Skip
              </button>
            </div>
          </>
        )}

        {step === "thanks" && (
          <>
            <h3 className="vp-title">🙏 Thank you!</h3>
            <p className="vp-sub">Enjoy the rest of the site.</p>
            <button className="vp-btn vp-btn-primary" onClick={close}>
              Close
            </button>
          </>
        )}

        {step === "recruiter" && (
          <>
            <h3 className="vp-title">🎯 Job Fit Assistant</h3>
            <p className="vp-sub">
              Paste the job description below and I'll give you an honest,
              evidence-based read on whether Ibrahim's background fits —
              backed by his real projects, published papers, and work
              history, not generic praise.
            </p>
            <input
              className="vp-input"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="vp-input"
              placeholder="Your email (optional, so Ibrahim can follow up)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="vp-textarea"
              rows={6}
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            {error && <p className="vp-error">{error}</p>}
            <div className="vp-row">
              <button className="vp-btn vp-btn-primary" onClick={evaluateFit}>
                Evaluate Ibrahim's Fit
              </button>
              <button className="vp-btn vp-btn-secondary" onClick={close}>
                Not now
              </button>
            </div>
          </>
        )}

        {step === "evaluating" && (
          <div className="vp-loading">
            <div className="vp-spinner" />
            <p className="vp-sub">Reading the job description against Ibrahim's real work history...</p>
          </div>
        )}

        {step === "fallback" && (
          <div className="vp-result">
            <h3 className="vp-title">Thanks — that's on its way to Ibrahim</h3>
            <p className="vp-sub">
              The live AI evaluator is momentarily busy, but here's the short
              version: Ibrahim is an AI Security Engineer at AT&T working on
              agentic AI systems, LLM security, and cloud security — with
              published research (IEEE FMLDS 2025, SPE 2026), open-source
              projects (PentestThinkingMCP, ClawProtect, SwitchLane), and two
              founder ventures (WarmNodeAI, HireEase). He's also a fast,
              hands-on learner — he's already shipped multiple MCP servers and
              custom AI-agent harnesses on protocols that only became common
              practice in the last year.
            </p>
            <p className="vp-sub">
              <a href="/project" style={{ color: "#00D4FF" }}>See his full project list</a>
              {" · "}
              <a href="/resume" style={{ color: "#00D4FF" }}>View resume</a>
            </p>
            <div className="vp-contact">
              <p style={{ margin: "0 0 8px" }}>Reach out directly to Ibrahim:</p>
              <a href="tel:+17138537974">+1 (713) 853-7974</a>
              {" · "}
              <a href="mailto:ibrahimsaleem244@gmail.com">ibrahimsaleem244@gmail.com</a>
            </div>
            <button className="vp-btn vp-btn-primary" onClick={close} style={{ width: "100%", marginTop: "14px" }}>
              Done
            </button>
          </div>
        )}

        {step === "result" && evaluation && (
          <div className="vp-result">
            <div className="vp-result-top">
              <ScoreBadge score={evaluation.score} />
              <div>
                <h3 className="vp-title" style={{ marginBottom: "4px" }}>
                  {evaluation.verdict}
                </h3>
                <p className="vp-sub" style={{ margin: 0 }}>
                  {evaluation.summary}
                </p>
              </div>
            </div>

            {evaluation.matchedEvidence?.length > 0 && (
              <>
                <h4 className="vp-section-heading">Why he fits</h4>
                <ul className="vp-list">
                  {evaluation.matchedEvidence.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {evaluation.gaps?.length > 0 && (
              <>
                <h4 className="vp-section-heading vp-gaps-heading">Worth noting</h4>
                <ul className="vp-list">
                  {evaluation.gaps.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {evaluation.gapsContext && (
                  <p className="vp-gaps-context">{evaluation.gapsContext}</p>
                )}
              </>
            )}

            <div className="vp-contact">
              <p style={{ margin: "0 0 8px" }}>Reach out directly to Ibrahim:</p>
              <a href="tel:+17138537974">+1 (713) 853-7974</a>
              {" · "}
              <a href="mailto:ibrahimsaleem244@gmail.com">ibrahimsaleem244@gmail.com</a>
            </div>

            <button className="vp-btn vp-btn-primary" onClick={close} style={{ width: "100%", marginTop: "14px" }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
