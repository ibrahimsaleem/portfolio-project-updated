import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

const COLORS = {
  green: "#00FF41",
  cyan: "#00D4FF",
  purple: "#C770F0",
  bg: "#060611",
  card: "rgba(0,6,18,0.92)",
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Login failed. Check email/password.");
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.cyan}40`,
          borderRadius: "12px",
          padding: "32px",
          width: "100%",
          maxWidth: "360px",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px", fontSize: "1.3em" }}>
          Admin Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        {error && (
          <p style={{ color: "#FF5F57", fontSize: "0.85em", marginBottom: "10px" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.cyan})`,
            color: "#060611",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid rgba(0,212,255,0.3)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  fontSize: "0.9em",
};

function LeadRow({ lead }) {
  const [expanded, setExpanded] = useState(false);
  const ts = lead.timestamp?.toDate ? lead.timestamp.toDate() : null;

  return (
    <div
      style={{
        background: COLORS.card,
        border: "1px solid rgba(0,212,255,0.15)",
        borderRadius: "10px",
        padding: "18px 20px",
        marginBottom: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          cursor: "pointer",
        }}
        onClick={() => setExpanded((v) => !v)}
      >
        <div>
          <strong style={{ color: "white" }}>
            {lead.name || "Anonymous"}
          </strong>{" "}
          {lead.email && (
            <span style={{ color: COLORS.cyan, fontSize: "0.85em" }}>
              ({lead.email})
            </span>
          )}
          {lead.isHiringManager && (
            <span
              style={{
                marginLeft: "10px",
                fontSize: "0.7em",
                color: COLORS.green,
                border: `1px solid ${COLORS.green}`,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              HIRING MANAGER
            </span>
          )}
          {lead.evaluation && (
            <span
              style={{
                marginLeft: "8px",
                fontSize: "0.7em",
                color: COLORS.purple,
                border: `1px solid ${COLORS.purple}`,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {lead.evaluation.score}% MATCH
            </span>
          )}
        </div>
        <span style={{ color: "rgba(200,220,240,0.5)", fontSize: "0.8em" }}>
          {ts ? ts.toLocaleString() : "..."} · {lead.page}
        </span>
      </div>

      {expanded && (
        <div style={{ marginTop: "14px", fontSize: "0.9em", color: "rgba(220,230,245,0.9)" }}>
          {lead.feedback && (
            <p>
              <strong>Feedback:</strong> {lead.feedback}
            </p>
          )}
          {lead.jobDescription && (
            <details style={{ marginBottom: "10px" }}>
              <summary style={{ cursor: "pointer", color: COLORS.cyan }}>
                Job description submitted
              </summary>
              <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.85em", marginTop: "8px" }}>
                {lead.jobDescription}
              </pre>
            </details>
          )}
          {lead.evaluation && (
            <div>
              <p>
                <strong style={{ color: COLORS.purple }}>
                  {lead.evaluation.verdict} — {lead.evaluation.score}%
                </strong>
              </p>
              <p>{lead.evaluation.summary}</p>
              {lead.evaluation.matchedEvidence?.length > 0 && (
                <>
                  <strong>Matched evidence:</strong>
                  <ul>
                    {lead.evaluation.matchedEvidence.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </>
              )}
              {lead.evaluation.gaps?.length > 0 && (
                <>
                  <strong>Gaps noted:</strong>
                  <ul>
                    {lead.evaluation.gaps.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminSubmissions() {
  const [user, setUser] = useState(undefined); // undefined = checking, null = signed out
  const [leads, setLeads] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "visitor_leads"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setLeads(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (err) => setLoadError(err.message)
    );
    return unsub;
  }, [user]);

  if (user === undefined) {
    return (
      <div style={{ minHeight: "100vh", background: COLORS.bg, color: "white", padding: "40px" }}>
        Loading...
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, padding: "40px 20px" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h1 style={{ color: "white", fontSize: "1.6em" }}>
            Visitor Submissions{" "}
            <span style={{ color: COLORS.cyan, fontSize: "0.6em" }}>
              ({leads.length})
            </span>
          </h1>
          <button
            onClick={() => signOut(auth)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,95,87,0.4)",
              color: "#FF5F57",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Sign out
          </button>
        </div>

        {loadError && (
          <p style={{ color: "#FF5F57" }}>Error loading leads: {loadError}</p>
        )}

        {leads.length === 0 && !loadError && (
          <p style={{ color: "rgba(200,220,240,0.6)" }}>No submissions yet.</p>
        )}

        {leads.map((lead) => (
          <LeadRow key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
}
