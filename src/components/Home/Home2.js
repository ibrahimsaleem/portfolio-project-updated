import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ibrahim-uh.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            {/* Terminal window wrapper */}
            <div className="terminal-window" style={{ textAlign: "left" }}>
              {/* Terminal header bar */}
              <div className="terminal-header">
                <span
                  className="terminal-dot"
                  style={{ background: "#FF5F57" }}
                ></span>
                <span
                  className="terminal-dot"
                  style={{ background: "#FEBC2E" }}
                ></span>
                <span
                  className="terminal-dot"
                  style={{ background: "#28C840" }}
                ></span>
                <span style={{ marginLeft: "10px", opacity: 0.6 }}>
                  ibrahim@security:~$ cat about_me.txt
                </span>
              </div>

              <div className="terminal-body">
                {/* Section header */}
                <div
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    color: "rgba(0,212,255,0.5)",
                    fontSize: "0.75em",
                    letterSpacing: "2px",
                    marginBottom: "10px",
                  }}
                >
                  &gt;_ INTRODUCING
                </div>

                <h1
                  style={{
                    fontSize: "2em",
                    fontWeight: "800",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  LET ME{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #00FF41, #00D4FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    INTRODUCE
                  </span>{" "}
                  MYSELF
                </h1>

                <div className="home-about-body">
                  <p>
                    Hi! I'm{" "}
                    <span
                      style={{
                        color: "#00FF41",
                        fontWeight: "700",
                        textShadow: "0 0 8px rgba(0,255,65,0.4)",
                      }}
                    >
                      Mohammad Ibrahim Saleem
                    </span>{" "}
                    — an{" "}
                    <strong style={{ color: "#00D4FF" }}>
                      AI Security &amp; Governance Engineer
                    </strong>{" "}
                    at{" "}
                    <strong style={{ color: "#00D4FF" }}>AT&amp;T</strong>,
                    based in Houston, TX.
                  </p>

                  <p>
                    I specialize in{" "}
                    <strong style={{ color: "#00FF41" }}>
                      securing enterprise LLM and agentic AI systems
                    </strong>{" "}
                    — from AI threat modeling and adversarial testing to
                    governance workflows and runtime controls. I design
                    AI security reviews aligned with{" "}
                    <strong style={{ color: "#00D4FF" }}>
                      OWASP Top 10 for LLMs, NIST AI-RMF, and ISO 42001
                    </strong>
                    , and build privacy-preserving data pipelines for
                    production GenAI systems.
                  </p>

                  <p>
                    Previously at{" "}
                    <strong style={{ color: "#C770F0" }}>NOV</strong> where
                    I built and secured agentic AI systems including MCP
                    servers, multi-agent pipelines, and AI governance
                    frameworks — published at{" "}
                    <strong style={{ color: "#00FF41" }}>SPE 2025</strong>.
                    My research on autonomous penetration testing (
                    <strong style={{ color: "#00FF41" }}>LIMA</strong>) was
                    published at{" "}
                    <strong style={{ color: "#00FF41" }}>
                      IEEE FMLDS 2025
                    </strong>
                    .
                  </p>

                  <p style={{ marginBottom: 0 }}>
                    Focus areas:{" "}
                    <strong style={{ color: "#00D4FF" }}>
                      AI red teaming · MCP server security · prompt
                      injection defense · autonomous penetration testing
                    </strong>
                    .
                  </p>

                  {/* Inline terminal quote */}
                  <div
                    style={{
                      marginTop: "24px",
                      padding: "14px 18px",
                      background: "rgba(0,255,65,0.04)",
                      border: "1px solid rgba(0,255,65,0.15)",
                      borderLeft: "3px solid #00FF41",
                      borderRadius: "0 8px 8px 0",
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "0.85em",
                      color: "rgba(0,255,65,0.8)",
                      lineHeight: 1.6,
                    }}
                  >
                    "Treat prompts as untrusted input. Give agents least
                    privilege. Build AI that is secure, auditable, and
                    controllable."
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Avatar with tilt */}
          <Col md={4} className="myAvtar">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#00D4FF"
              glareBorderRadius="16px"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "2px solid rgba(0,212,255,0.3)",
                  boxShadow:
                    "0 0 30px rgba(0,212,255,0.2), 0 20px 60px rgba(0,0,0,0.5)",
                  maxWidth: "320px",
                  width: "100%",
                }}
              >
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Mohammad Ibrahim Saleem at University of Houston"
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center top",
                    maxHeight: "420px",
                  }}
                />
                {/* Cyber overlay gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(0,212,255,0.08) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Animated border */}
                <div
                  style={{
                    position: "absolute",
                    inset: -2,
                    borderRadius: "18px",
                    background:
                      "conic-gradient(from 0deg, #00FF41, #00D4FF, #C770F0, #00FF41)",
                    zIndex: -1,
                    animation: "rotateRing 8s linear infinite",
                    opacity: 0.35,
                  }}
                />
              </div>
            </Tilt>
          </Col>
        </Row>

        {/* Social links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontWeight: "700" }}>
              FIND ME{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#00FF41,#00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ON
              </span>
            </h1>
            <p>
              Feel free to{" "}
              <span style={{ color: "#00D4FF" }}>connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ibrahimsaleem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Itsjustmark_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ibrahimsaleem91/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/Ibrahimmmm._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
