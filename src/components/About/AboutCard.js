import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Mohammad Ibrahim Saleem</span> — an <b className="purple">Applied AI Data Scientist</b> and <b className="purple">AI Engineer</b> with a cybersecurity focus in Houston, TX. I recently joined <b className="purple">NOV</b> as an Applied AI Data Scientist, where I develop ML models, build data pipelines, and deploy AI solutions that drive measurable business impact. I'm pursuing an M.S. in Cybersecurity at the University of Houston and previously contributed as a Research Assistant in AI-driven security and secure IoT systems. I also founded <b className="purple">AplyEase</b> (YC applicant) — an AI + human job search service offering custom resumes, tailored applications, and curated matching. I love building secure, data-driven AI products end‑to‑end.
          </p>
          <ul>
            <li className="about-activity"><ImPointRight /> Machine Learning & Deep Learning model development</li>
            <li className="about-activity"><ImPointRight /> MLOps, data pipelines, and AI deployment</li>
            <li className="about-activity"><ImPointRight /> LLMs, RAG systems, and generative AI applications</li>
            <li className="about-activity"><ImPointRight /> Predictive analytics and data-driven insights</li>
            <li className="about-activity"><ImPointRight /> AI security and secure model deployment</li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Build securely. Measure impact. Iterate fast."
          </p>
          <br />
          <footer className="blockquote-footer">Mohammad Ibrahim Saleem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
