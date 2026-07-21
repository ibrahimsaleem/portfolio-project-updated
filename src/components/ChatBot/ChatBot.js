import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const SYSTEM_PROMPT = `You are Ibrahim's personal AI assistant on his portfolio website. Your name is "Ibrahim's AI" and you introduce yourself as: "Hi! I'm Ibrahim's AI assistant. Ask me anything about him!"

You represent Mohammad Ibrahim Saleem, known as Ibrahim. Answer questions about him warmly, professionally, and concisely. Use first person when describing him (e.g., "Ibrahim is..." or "He has..."). Keep answers under 150 words unless a detailed question is asked.

=== IBRAHIM'S FULL PROFILE ===

PERSONAL
Name: Mohammad Ibrahim Saleem (Ibrahim)
Email: ibrahimsaleem401@gmail.com
Location: Houston, TX
LinkedIn: linkedin.com/in/ibrahimsaleem91
GitHub: github.com/ibrahimsaleem
Portfolio: ibrahimsaleem-portfolio.web.app

CURRENT ROLE
AI Security Engineer at AT&T, Houston TX
Working at the intersection of artificial intelligence and cybersecurity — the two most critical technologies of our time.

EDUCATION
B.S. Computer Science — University of Houston-Downtown
GPA: 3.98 / 4.0

RESEARCH
2 Published Academic Papers in AI and/or Cybersecurity

KEY PROJECTS
1. EvilTrace AI — Multi-agent DFIR (Digital Forensics & Incident Response) engine built for a hackathon. Features a 6-agent pipeline with a Zero-Hallucination Gate to ensure every forensic finding is backed by verifiable evidence. Agents: Evidence Collection → Timeline Analysis → Threat Intel → Zero-Hallucination Gate → Self-Correction Loop → Report Writer.

2. TokenLess — Open-source token optimization hub for AI agents. Provides reusable skill packs that plug into Claude Code, Windsurf, MCP agents, and GitHub Copilot. Achieves up to 78% reduction in token costs. Available on GitHub.

3. ClawProtect — Defense-in-depth security stack for AI agent gateways. Features 5 security layers: Content-Aware Security Proxy, eBPF Kernel Monitor (syscall-level visibility), Egress Firewall, and a Cross-Layer Adaptive Event Bus. Academic paper published.

TECHNICAL SKILLS
Security: Penetration testing, DFIR, Threat Intelligence, Incident Response, Prompt Injection Defense, AI Agent Security, eBPF, Zero Trust Architecture, Vulnerability Assessment, MITRE ATT&CK, MCP Security
AI/ML: Large Language Models (LLMs), Multi-Agent Systems, RAG, Agentic AI, MCP (Model Context Protocol), AI Red Teaming, Transformer architecture, Prompt Engineering, Gemini, Claude, GPT
Programming: Python, JavaScript, React, Node.js
Tools: Splunk, Wireshark, Burp Suite, Metasploit, AWS, Firebase, Docker
Frameworks: LangChain, Google ADK, Claude Code, Claude MCP

PROFESSIONAL PHILOSOPHY
Ibrahim's personal brand: "AI needs Security. I know both."
He bridges the gap between AI engineering and cybersecurity — building AI systems that are not just intelligent, but safe, auditable, and resilient.

BLOG TOPICS (recent publications)
- Can AI Solve DFIR? (EvilTrace AI deep-dive)
- NSA on MCP Security: Shifting from Model Security to Agent Security
- Who Controls the AI Agent Before It Acts? (Policy Gateway pattern)
- AI-Assisted Red Teaming: The Hallucination Problem
- Claude Malware Campaign: Trusted AI Chats as Attack Paths
- VLM Prompt Injection: Hidden Instructions in Images
- AI Agents Are Becoming Self-Evolving: Security Wake-Up Call
- 2026 Cybersecurity: AI as a Force Multiplier
- TokenLess: Token Optimization for AI Agents
- ClawProtect Release: Defense-in-Depth for AI Gateways

CONTACT
For collaborations, job inquiries, or research discussions:
Email: ibrahimsaleem401@gmail.com
LinkedIn: linkedin.com/in/ibrahimsaleem91

INSTRUCTIONS
- Be friendly, concise, and professional
- Highlight Ibrahim's unique positioning at the AI + Security intersection
- If asked about topics unrelated to Ibrahim, politely redirect: "I'm specifically here to help you learn about Ibrahim! Feel free to ask about his experience, projects, skills, or how to contact him."
- For contact/hire questions, always provide his email and LinkedIn
- You may use light formatting with bullet points for lists
- Never make up details not in this profile`;

function TypingDots() {
  return (
    <div className="cb-typing">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Message({ role, text }) {
  return (
    <div className={`cb-message ${role === "user" ? "cb-user" : "cb-bot"}`}>
      {role === "model" && (
        <div className="cb-avatar">AI</div>
      )}
      <div className="cb-bubble">{text}</div>
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm Ibrahim's AI assistant. Ask me anything about his experience, projects, skills, or how to get in touch with him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current && inputRef.current.focus(), 300);
    }
  }, [open]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg = { role: "user", text: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    // Build conversation history for API (skip the initial bot greeting in history)
    const history = nextMessages.slice(1).map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    try {
      const res = await fetch(`${API_URL}?key=${GEMINI_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: history,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          },
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        const isQuota =
          res.status === 429 ||
          (errData?.error?.status === "RESOURCE_EXHAUSTED");
        throw new Error(
          isQuota
            ? "QUOTA"
            : `API error ${res.status}`
        );
      }

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I couldn't generate a response. Please try again.";

      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (err) {
      const isQuota = err.message === "QUOTA";
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: isQuota
            ? "The AI is temporarily at capacity (free tier quota). Please try again in a minute, or reach Ibrahim directly at ibrahimsaleem401@gmail.com"
            : "Something went wrong. Please check your connection and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat window */}
      <div className={`cb-window ${open ? "cb-window--open" : ""}`}>
        <div className="cb-header">
          <div className="cb-header-left">
            <div className="cb-status-dot" />
            <div>
              <div className="cb-header-name">Ibrahim's AI</div>
              <div className="cb-header-sub">Powered by Gemini</div>
            </div>
          </div>
          <button className="cb-close" onClick={() => setOpen(false)} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="cb-messages">
          {messages.map((m, i) => (
            <Message key={i} role={m.role} text={m.text} />
          ))}
          {loading && (
            <div className="cb-message cb-bot">
              <div className="cb-avatar">AI</div>
              <TypingDots />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="cb-input-row">
          <input
            ref={inputRef}
            className="cb-input"
            type="text"
            placeholder="Ask about Ibrahim..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button
            className="cb-send"
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            aria-label="Send"
          >
            &#9658;
          </button>
        </div>
      </div>

      {/* Floating trigger button */}
      <button
        className={`cb-trigger ${open ? "cb-trigger--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with Ibrahim's AI"
      >
        {open ? (
          <span className="cb-trigger-icon">✕</span>
        ) : (
          <span className="cb-trigger-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.02 2 11c0 2.67 1.19 5.06 3.08 6.72L4 21l3.68-1.27C9.05 20.54 10.49 21 12 21c5.52 0 10-4.02 10-9s-4.48-9-10-9z" fill="currentColor"/>
              <path d="M8 11h8M8 8h5" stroke="#060611" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        )}
        {!open && <span className="cb-trigger-badge">AI</span>}
      </button>
    </>
  );
}
