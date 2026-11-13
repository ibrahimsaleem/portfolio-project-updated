import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaDatabase, FaUserShield, FaBoxes, FaUserLock, FaSyringe, FaBalanceScale,
  FaCheckDouble, FaKey, FaProjectDiagram, FaCube, FaIdBadge, FaLock, FaEye,
  FaCoins, FaCrosshairs, FaSitemap, FaClipboardCheck, FaShieldAlt,
  FaSkullCrossbones, FaTools, FaStar, FaCheck, FaLayerGroup, FaRobot,
  FaServer, FaFlask, FaFilter,
} from "react-icons/fa";
import "./AiSecurityLayers.css";

const GROUPS = [
  { id: "before", name: "Before the model", color: "#00D4FF", Icon: FaDatabase },
  { id: "request", name: "Around every request", color: "#3DFF7A", Icon: FaFilter },
  { id: "secrets", name: "Secrets and retrieval", color: "#FFB020", Icon: FaKey },
  { id: "agents", name: "Agents and tools", color: "#F472B6", Icon: FaRobot },
  { id: "platform", name: "The platform underneath", color: "#6C8CFF", Icon: FaServer },
  { id: "prove", name: "Proving it works", color: "#FF8A4C", Icon: FaFlask },
];

// first: one of the five layers the post says to check first
const LAYERS = [
  { group: "before", name: "Data governance and lineage", Icon: FaDatabase, owasp: "LLM04",
    guards: "Training and pipeline data", attack: "Poisoned data", job: "Classify data and trace where it flows" },
  { group: "before", name: "Sensitive data and PII filtering", Icon: FaUserShield, owasp: "LLM02",
    guards: "What goes into and comes out of the model", attack: "Leaked sensitive information", job: "Redact on the fly" },
  { group: "before", name: "Model supply chain checks", Icon: FaBoxes, owasp: "LLM03", first: true,
    guards: "External weights, packages and artifacts", attack: "Compromised dependencies", job: "Scan for tampered models before they reach production" },
  { group: "before", name: "Model access control", Icon: FaUserLock,
    guards: "Endpoints and API keys", attack: "Unauthorized model use", job: "Grant least privilege" },
  { group: "request", name: "Prompt injection defense", Icon: FaSyringe, owasp: "LLM01", first: true,
    guards: "User input, and everything the model reads from outside: web pages, files, emails", attack: "Jailbreaks and instruction overrides", job: "Screen hostile input" },
  { group: "request", name: "Behavioral guardrails", Icon: FaBalanceScale, owasp: "LLM07",
    guards: "How the model responds", attack: "System prompt leakage, going off policy", job: "Hold the topic and policy lines" },
  { group: "request", name: "Output validation", Icon: FaCheckDouble, owasp: "LLM05",
    guards: "Whatever consumes the model's answer", attack: "Improper output handling, such as a response that ends up in a shell, a query or a page", job: "Verify schema and content before anything acts on it" },
  { group: "secrets", name: "Secrets and key handling", Icon: FaKey,
    guards: "Credentials and tokens", attack: "Reused or leaked keys", job: "Vault them and rotate them" },
  { group: "secrets", name: "RAG and vector protection", Icon: FaProjectDiagram, owasp: "LLM08",
    guards: "Embeddings and retrieval", attack: "Weak vector boundaries", job: "Keep tenants isolated so one customer's documents never answer another customer's question" },
  { group: "agents", name: "Agent and tool sandboxing", Icon: FaCube, owasp: "LLM06", first: true,
    guards: "Actions and tool calls", attack: "Too much agency", job: "Limit what an agent can do, so a bad prompt cannot become a real incident" },
  { group: "agents", name: "Workload and agent identity", Icon: FaIdBadge,
    guards: "Machine and agent credentials", attack: "A hijacked workload identity", job: "Issue short-lived identities per task" },
  { group: "platform", name: "Encryption everywhere", Icon: FaLock,
    guards: "Data at rest, in transit and in use", attack: "Interception and theft", job: "Encrypt, and isolate sensitive workloads" },
  { group: "platform", name: "Runtime monitoring", Icon: FaEye, first: true,
    guards: "Live traffic and behavior", attack: "Drift and live abuse", job: "Flag anomalies early" },
  { group: "platform", name: "Cost abuse controls", Icon: FaCoins, owasp: "LLM10",
    guards: "Inference spend and quotas", attack: "Unbounded consumption", job: "Cap spikes and throttle abuse" },
  { group: "prove", name: "Adversarial red teaming", Icon: FaCrosshairs, first: true,
    guards: "The weak spots you have not found yet", attack: "Hidden vulnerabilities", job: "Attack it before anyone else does" },
  { group: "prove", name: "Threat modeling and response", Icon: FaSitemap,
    guards: "The full attack surface", attack: "No plan when you are breached", job: "Map the risks and write the response" },
  { group: "prove", name: "Compliance and audit trail", Icon: FaClipboardCheck,
    guards: "Controls and evidence", attack: "Failed audits", job: "Map your controls to the frameworks you answer to" },
].map((l, i) => ({ ...l, n: i + 1 }));

const GROUP_BY_ID = Object.fromEntries(GROUPS.map((g) => [g.id, g]));
const STORE_KEY = "asl-covered-v1";

const loadCovered = () => {
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw).filter((n) => Number.isInteger(n)) : [];
  } catch (e) {
    return [];
  }
};

// Decorative stack of the six groups, bottom (foundation) to top (proof).
function StackGraphic({ active, onPick, reduce }) {
  return (
    <svg className="asl-stack" viewBox="0 0 520 290" role="img" aria-label="Six groups of AI security layers, stacked from data at the bottom to testing at the top">
      {GROUPS.map((g, i) => {
        const cy = 235 - i * 38;
        const on = active === "all" || active === g.id;
        return (
          <motion.g
            key={g.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: on ? 1 : 0.28, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.09 }}
            style={{ cursor: "pointer" }}
            onClick={() => onPick(active === g.id ? "all" : g.id)}
          >
            <polygon points={`30,${cy} 160,${cy + 36} 290,${cy} 290,${cy + 12} 160,${cy + 48} 30,${cy + 12}`} fill={g.color} opacity="0.45" />
            <polygon points={`30,${cy} 160,${cy - 36} 290,${cy} 160,${cy + 36}`} fill={g.color} fillOpacity="0.9" stroke="#fff" strokeOpacity="0.35" />
            <text x="305" y={cy + 5} fill={g.color} fontSize="15" fontWeight="600">{g.name}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}

function Row({ Icon, label, text, cls }) {
  return (
    <div className={`asl-row ${cls}`}>
      <span className="asl-row-label"><Icon aria-hidden="true" /> {label}</span>
      <span className="asl-row-text">{text}</span>
    </div>
  );
}

function AiSecurityLayers() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState([]);
  const [covered, setCovered] = useState([]);

  useEffect(() => setCovered(loadCovered()), []);

  const toggleCovered = (n) => {
    setCovered((prev) => {
      const next = prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n];
      try { window.localStorage.setItem(STORE_KEY, JSON.stringify(next)); } catch (e) { /* private mode */ }
      return next;
    });
  };
  const toggleOpen = (n) => setOpen((o) => (o.includes(n) ? o.filter((x) => x !== n) : [...o, n]));

  const shown = LAYERS.filter((l) => filter === "all" || l.group === filter);
  const pct = Math.round((covered.length / LAYERS.length) * 100);
  const nextUp = LAYERS.find((l) => l.first && !covered.includes(l.n)) || LAYERS.find((l) => !covered.includes(l.n));

  return (
    <div className="asl">
      <StackGraphic active={filter} onPick={setFilter} reduce={reduce} />

      <div className="asl-chips" role="group" aria-label="Filter layers by group">
        <button type="button" className={`asl-chip ${filter === "all" ? "on" : ""}`} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          <FaLayerGroup aria-hidden="true" /> All 17
        </button>
        {GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`asl-chip ${filter === g.id ? "on" : ""}`}
            style={{ "--c": g.color }}
            aria-pressed={filter === g.id}
            onClick={() => setFilter(filter === g.id ? "all" : g.id)}
          >
            <g.Icon aria-hidden="true" /> {g.name}
          </button>
        ))}
      </div>

      <div className="asl-score" aria-live="polite">
        <div className="asl-score-top">
          <strong>{covered.length} of 17 covered</strong>
          <span>{nextUp ? <>Next to check: <b>{nextUp.name}</b></> : "Every layer covered. Now test them."}</span>
        </div>
        <div className="asl-bar" role="progressbar" aria-valuemin={0} aria-valuemax={17} aria-valuenow={covered.length} aria-label="Layers your team covers">
          <motion.div className="asl-bar-fill" animate={{ width: `${pct}%` }} transition={{ duration: reduce ? 0 : 0.5 }} />
        </div>
        <p className="asl-hint">Tap a layer to open it. Mark the ones your team already covers; this stays on your device only.</p>
      </div>

      <div className="asl-grid" data-speech-skip>
        {shown.map((l, i) => {
          const g = GROUP_BY_ID[l.group];
          const isOpen = open.includes(l.n);
          const done = covered.includes(l.n);
          return (
            <motion.div
              key={l.n}
              className={`asl-card ${isOpen ? "open" : ""} ${done ? "done" : ""}`}
              style={{ "--c": g.color }}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : Math.min(i * 0.04, 0.4) }}
            >
              <button
                type="button"
                className="asl-head"
                aria-expanded={isOpen}
                aria-controls={`asl-panel-${l.n}`}
                onClick={() => toggleOpen(l.n)}
              >
                <span className="asl-icon"><l.Icon aria-hidden="true" /></span>
                <span className="asl-title">
                  <span className="asl-num">{String(l.n).padStart(2, "0")}</span>
                  {l.name}
                </span>
                <span className="asl-badges">
                  {l.first && <span className="asl-first"><FaStar aria-hidden="true" /> Check first</span>}
                  {l.owasp && <span className="asl-owasp">{l.owasp}</span>}
                  {done && <FaCheck className="asl-done" aria-label="Covered" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`asl-panel-${l.n}`}
                    className="asl-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.25 }}
                  >
                    <div className="asl-panel-in">
                      <Row Icon={FaShieldAlt} label="Guards" text={l.guards} cls="g" />
                      <Row Icon={FaSkullCrossbones} label="Attack" text={l.attack} cls="a" />
                      <Row Icon={FaTools} label="Core job" text={l.job} cls="j" />
                      <button
                        type="button"
                        className={`asl-cover ${done ? "on" : ""}`}
                        aria-pressed={done}
                        onClick={() => toggleCovered(l.n)}
                      >
                        <FaCheck aria-hidden="true" /> {done ? "We cover this" : "Mark as covered"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Plain text for the "Listen" button; hidden from sight and from screen readers (the cards above are the accessible version). */}
      <ul className="asl-speech" aria-hidden="true" data-speech-only>
        {LAYERS.map((l) => (
          <li key={l.n}>
            {`Layer ${l.n}, ${l.name}. Guards: ${l.guards}. Attack: ${l.attack}${l.owasp ? `, ${l.owasp}` : ""}. Core job: ${l.job}.`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AiSecurityLayers;
