import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Mohammad Ibrahim Saleem</span> — I <b className="purple">build agentic AI systems, and I secure them</b>, as an AI Security Engineer at <b className="purple">AT&T</b>, based in Houston, TX. I specialize in autonomous multi-agent systems, LLM red-teaming, and cloud security — from designing agentic governance pipelines to hardening them against real-world adversarial risk. I hold an M.S. in Cybersecurity from the University of Houston (GPA: 3.98/4.0, $16K scholarship) and have <b className="purple">4 research papers</b> in agentic AI and security, including 2 published at IEEE FMLDS 2025 and SPE 2025. I'm also the founder of WarmNodeAI and HireEase (40,000+ applications processed, 300+ clients).
          </p>
          <ul>
            <li className="about-activity"><ImPointRight /> Agentic AI systems: multi-agent orchestration, LangGraph, MCP, autonomous reasoning (Beam Search, MCTS)</li>
            <li className="about-activity"><ImPointRight /> AI governance & secure AI SDLC for enterprise GenAI systems</li>
            <li className="about-activity"><ImPointRight /> Adversarial testing, prompt injection defense & AI red teaming</li>
            <li className="about-activity"><ImPointRight /> Cloud & ML infrastructure: Azure, Kubernetes, Terraform, model deployment & optimization</li>
            <li className="about-activity"><ImPointRight /> Founder — WarmNodeAI & HireEase (40,000+ applications processed)</li>
            <li className="about-activity"><ImPointRight /> Published researcher — IEEE FMLDS 2025 & SPE 2025</li>
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
