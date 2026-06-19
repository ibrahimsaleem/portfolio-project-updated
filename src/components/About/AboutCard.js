import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Mohammad Ibrahim Saleem</span> — an <b className="purple">AI Security & Governance Engineer</b> at <b className="purple">AT&T</b>, based in Houston, TX. I specialize in securing enterprise LLM and agentic AI systems through AI threat modeling, adversarial testing, governance workflows, and runtime controls. I'm pursuing an M.S. in Cybersecurity at the University of Houston (GPA: 3.98/4.0, $16K scholarship) and have <b className="purple">2 published research papers</b> at IEEE FMLDS 2025 and SPE 2025. My work spans OWASP Top 10 for LLMs, NIST AI-RMF, ISO 42001, MCP server security, secure RAG, and AI red teaming.
          </p>
          <ul>
            <li className="about-activity"><ImPointRight /> AI governance & secure AI SDLC for enterprise GenAI systems</li>
            <li className="about-activity"><ImPointRight /> Adversarial testing, prompt injection defense & AI red teaming</li>
            <li className="about-activity"><ImPointRight /> MCP server security & agentic AI threat modeling</li>
            <li className="about-activity"><ImPointRight /> Privacy-preserving AI data pipelines & tokenization frameworks</li>
            <li className="about-activity"><ImPointRight /> Published researcher — IEEE FMLDS 2025 & SPE 2025</li>
            <li className="about-activity"><ImPointRight /> Autonomous penetration testing with LLM-driven frameworks</li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Treat prompts as untrusted input. Give agents least privilege. Build AI that is secure, auditable, and controllable."
          </p>
          <br />
          <footer className="blockquote-footer">Mohammad Ibrahim Saleem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
