import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/ibrahim-headshot.jpg";
import Particle from "../Particle";
import MatrixRain from "../MatrixRain";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaDownload, FaEye, FaShieldAlt, FaBrain, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <section>
      {/* =================== CYBER HERO =================== */}
      <Container fluid className="home-section" id="home">
        <MatrixRain />
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              {/* Live status badge */}
              <div className="cyber-badge">
                <span className="badge-dot"></span>
                AI Security Engineer @ AT&T · Houston, TX
              </div>

              {/* MAIN GLITCH HERO */}
              <h1 className="cyber-tagline">
                <span
                  className="glitch-text"
                  data-text="AI needs Security."
                  style={{ display: "block" }}
                >
                  AI needs Security.
                </span>
                <span className="neon-green-text" style={{ display: "block" }}>
                  I know both.
                </span>
              </h1>

              {/* Name */}
              <h2 className="heading-name" style={{ marginTop: "16px" }}>
                Mohammad{" "}
                <strong className="main-name">Ibrahim Saleem</strong>
              </h2>

              {/* Typewriter */}
              <div className="home-hero-typewriter">
                <Type />
              </div>

              {/* Quick CTA row */}
              <div className="home-hero-cta">
                <a
                  href="https://www.linkedin.com/in/ibrahimsaleem91/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "10px 22px",
                    background: "linear-gradient(90deg, #00FF41, #00D4FF)",
                    color: "#060611",
                    borderRadius: "6px",
                    fontWeight: "700",
                    fontSize: "0.95em",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 0 16px rgba(0,255,65,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 28px rgba(0,255,65,0.6), 0 0 50px rgba(0,212,255,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(0,255,65,0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
                <a
                  href="https://github.com/ibrahimsaleem"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "10px 22px",
                    background: "transparent",
                    color: "#00D4FF",
                    border: "1px solid rgba(0,212,255,0.4)",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "0.95em",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(0,212,255,0.1)";
                    e.currentTarget.style.borderColor = "#00D4FF";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0,212,255,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(0,212,255,0.4)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <AiFillGithub /> GitHub
                </a>
              </div>
            </Col>

            {/* Profile image with rotating rings */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="cyber-profile-container">
                <div className="cyber-profile-ring">
                  <img
                    src={homeLogo}
                    alt="Mohammad Ibrahim Saleem"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* =================== STATS STRIP =================== */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,255,65,0.06), rgba(0,212,255,0.06), rgba(199,112,240,0.06))",
          borderTop: "1px solid rgba(0,212,255,0.12)",
          borderBottom: "1px solid rgba(0,212,255,0.12)",
          padding: "20px 0",
        }}
      >
        <Container>
          <Row style={{ textAlign: "center" }}>
            {[
              { value: "6+", label: "Years Experience", color: "#C770F0" },
              { value: "10+", label: "Years Coding", color: "#00D4FF" },
              { value: "2", label: "Published Papers", color: "#00FF41" },
              { value: "AT&T", label: "Current Employer", color: "#00D4FF" },
              { value: "95%", label: "Pentest Success Rate", color: "#C770F0" },
              { value: "3.98", label: "M.S. GPA / 4.0", color: "#00FF41" },
            ].map((stat, i) => (
              <Col xs={6} md key={i} style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "1.9em",
                    fontWeight: "700",
                    color: stat.color,
                    textShadow: `0 0 12px ${stat.color}80`,
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78em",
                    color: "rgba(180,200,230,0.6)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* =================== RECRUITER SECTION =================== */}
      <Container
        fluid
        className="recruiter-section"
        style={{ padding: "70px 0" }}
      >
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center", marginBottom: "50px" }}>
              <div
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "rgba(0,212,255,0.6)",
                  fontSize: "0.8em",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                &gt;_ quick_overview --for recruiters
              </div>
              <h2
                style={{
                  color: "white",
                  fontSize: "2.2em",
                  fontWeight: "700",
                }}
              >
                What I{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #00FF41, #00D4FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Bring
                </span>{" "}
                to Your Team
              </h2>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
            {/* Card 1 */}
            <Col md={4} style={{ marginBottom: "24px" }}>
              <Card
                style={{
                  background: "rgba(0,6,18,0.88)",
                  border: "1px solid rgba(0,255,65,0.2)",
                  borderRadius: "12px",
                  height: "100%",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.35s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,255,65,0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0,255,65,0.15), 0 8px 32px rgba(0,0,0,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,255,65,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Body style={{ padding: "28px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "18px",
                    }}
                  >
                    <FaShieldAlt
                      style={{
                        fontSize: "1.8em",
                        color: "#00FF41",
                        filter: "drop-shadow(0 0 8px rgba(0,255,65,0.6))",
                      }}
                    />
                    <h5
                      style={{
                        color: "#00FF41",
                        margin: 0,
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Research & Impact
                    </h5>
                  </div>
                  <div
                    style={{
                      color: "rgba(200,220,240,0.85)",
                      fontSize: "0.95em",
                      lineHeight: "1.75",
                    }}
                  >
                    <p style={{ marginBottom: "8px" }}>
                      <span style={{ color: "#00FF41", fontWeight: "600" }}>
                        2 Published Papers
                      </span>{" "}
                      — IEEE FMLDS 2025, SPE 2025
                    </p>
                    <p style={{ marginBottom: "8px" }}>
                      <span style={{ color: "#00FF41", fontWeight: "600" }}>
                        3 Active Research Projects
                      </span>{" "}
                      in AI Security
                    </p>
                    <p style={{ marginBottom: "8px" }}>
                      <span style={{ color: "#00FF41", fontWeight: "600" }}>
                        95% pentest success rate
                      </span>{" "}
                      with LLM-driven LIMA framework
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      Reduced AI security review from{" "}
                      <span style={{ color: "#00FF41", fontWeight: "600" }}>
                        10 days → 6 minutes
                      </span>{" "}
                      @ AT&amp;T
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4} style={{ marginBottom: "24px" }}>
              <Card
                style={{
                  background: "rgba(0,6,18,0.88)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  borderRadius: "12px",
                  height: "100%",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0,212,255,0.15), 0 8px 32px rgba(0,0,0,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Body style={{ padding: "28px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "18px",
                    }}
                  >
                    <FaBrain
                      style={{
                        fontSize: "1.8em",
                        color: "#00D4FF",
                        filter: "drop-shadow(0 0 8px rgba(0,212,255,0.6))",
                      }}
                    />
                    <h5
                      style={{
                        color: "#00D4FF",
                        margin: 0,
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Core Expertise
                    </h5>
                  </div>
                  <div
                    style={{
                      color: "rgba(200,220,240,0.85)",
                      fontSize: "0.95em",
                      lineHeight: "1.75",
                    }}
                  >
                    <p style={{ marginBottom: "6px" }}>
                      <span style={{ color: "#00D4FF", fontWeight: "600" }}>
                        AI Security:
                      </span>{" "}
                      LLM Sec, Prompt Injection, AI Red Teaming
                    </p>
                    <p style={{ marginBottom: "6px" }}>
                      <span style={{ color: "#00D4FF", fontWeight: "600" }}>
                        Governance:
                      </span>{" "}
                      OWASP LLM Top 10, NIST AI-RMF, ISO 42001
                    </p>
                    <p style={{ marginBottom: "6px" }}>
                      <span style={{ color: "#00D4FF", fontWeight: "600" }}>
                        Cloud:
                      </span>{" "}
                      Azure Defender, Key Vault, AWS, Docker
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      <span style={{ color: "#00D4FF", fontWeight: "600" }}>
                        Agentic AI:
                      </span>{" "}
                      MCP Security, Threat Modeling, RAG
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4} style={{ marginBottom: "24px" }}>
              <Card
                style={{
                  background: "rgba(0,6,18,0.88)",
                  border: "1px solid rgba(199,112,240,0.2)",
                  borderRadius: "12px",
                  height: "100%",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(199,112,240,0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(199,112,240,0.15), 0 8px 32px rgba(0,0,0,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(199,112,240,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Body style={{ padding: "28px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "18px",
                    }}
                  >
                    <FaLock
                      style={{
                        fontSize: "1.8em",
                        color: "#C770F0",
                        filter:
                          "drop-shadow(0 0 8px rgba(199,112,240,0.6))",
                      }}
                    />
                    <h5
                      style={{
                        color: "#C770F0",
                        margin: 0,
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Let's Connect
                    </h5>
                  </div>
                  <div
                    style={{
                      color: "rgba(200,220,240,0.85)",
                      fontSize: "0.95em",
                      lineHeight: "1.75",
                      marginBottom: "20px",
                    }}
                  >
                    <p style={{ marginBottom: "6px" }}>
                      <strong style={{ color: "#C770F0" }}>Location:</strong>{" "}
                      Houston, TX
                    </p>
                    <p style={{ marginBottom: "6px" }}>
                      <strong style={{ color: "#C770F0" }}>Status:</strong>{" "}
                      AI Security Engineer @ AT&amp;T
                    </p>
                    <p style={{ marginBottom: "6px" }}>
                      <strong style={{ color: "#C770F0" }}>Grad:</strong>{" "}
                      M.S. Cybersecurity, UH — May 2026
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      <strong style={{ color: "#C770F0" }}>LinkedIn:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/in/ibrahimsaleem91/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#C770F0",
                          textDecoration: "none",
                        }}
                      >
                        ibrahimsaleem91
                      </a>
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Button
                        href="/cv1page.pdf"
                        target="_blank"
                        style={{
                          background:
                            "linear-gradient(90deg,#00FF41,#00D4FF)",
                          border: "none",
                          color: "#060611",
                          fontWeight: "700",
                          padding: "8px 14px",
                          fontSize: "0.85em",
                          borderRadius: "6px",
                          flex: 1,
                        }}
                      >
                        <FaDownload style={{ marginRight: "5px" }} />
                        1-Page CV
                      </Button>
                      <Button
                        href="/cv2page.pdf"
                        target="_blank"
                        style={{
                          background: "rgba(0,212,255,0.1)",
                          border: "1px solid rgba(0,212,255,0.35)",
                          color: "#00D4FF",
                          fontWeight: "600",
                          padding: "8px 14px",
                          fontSize: "0.85em",
                          borderRadius: "6px",
                          flex: 1,
                        }}
                      >
                        <FaDownload style={{ marginRight: "5px" }} />
                        2-Page CV
                      </Button>
                    </div>
                    <Button
                      href="mailto:ibrahimsaleem244@gmail.com"
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(199,112,240,0.4)",
                        color: "#C770F0",
                        padding: "10px",
                        borderRadius: "6px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(199,112,240,0.1)";
                        e.currentTarget.style.boxShadow =
                          "0 0 20px rgba(199,112,240,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <MdEmail style={{ marginRight: "8px" }} />
                      Email Me
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Social + View Detailed */}
          <Row style={{ marginTop: "20px" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "18px",
                  marginBottom: "30px",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/ibrahimsaleem91/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#00D4FF",
                    fontSize: "1.8em",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00FF41";
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 8px rgba(0,255,65,0.7))";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#00D4FF";
                    e.currentTarget.style.filter = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/ibrahimsaleem"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#00D4FF",
                    fontSize: "1.8em",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00FF41";
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 8px rgba(0,255,65,0.7))";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#00D4FF";
                    e.currentTarget.style.filter = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <AiFillGithub />
                </a>
              </div>

              <Link to="/detailed" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(0,212,255,0.4)",
                    color: "#00D4FF",
                    padding: "14px 36px",
                    fontSize: "1em",
                    fontFamily: "'Share Tech Mono', monospace",
                    borderRadius: "6px",
                    cursor: "pointer",
                    letterSpacing: "1px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(0,212,255,0.08)";
                    e.currentTarget.style.borderColor = "#00D4FF";
                    e.currentTarget.style.boxShadow =
                      "0 0 24px rgba(0,212,255,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(0,212,255,0.4)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaEye style={{ marginRight: "10px" }} />
                  &gt;_ view_detailed_portfolio
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
