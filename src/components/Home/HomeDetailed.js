import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLogo from "../../Assets/ibrahim.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Experiences from "../Experiences/Experiences";
import ResumeNew from "../Resume/ResumeNew";  
import Projects from "../Projects/Projects";
import Certificates from "../Certificates/Certificates";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";

function HomeDetailed() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohammad Ibrahim Saleem</strong>
              </h1>
              <p
                className="tagline"
                style={{ color: "white", fontSize: "1.2em", marginTop: "10px", marginLeft: "45px" }}
              >
                AI Security & Governance Engineer @ AT&T | Houston, TX | M.S. Cybersecurity @ UH
              </p>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
      {isVisible && (
        <div 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            cursor: 'pointer',
            backgroundColor: '#c770f0',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            color: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#a340d9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#c770f0';
          }}
        >
          ↑
        </div>
      )}
      
      <Home2 />
      
      {/* Professional Skillset Section */}
      <Container fluid className="skillset-section" style={{ backgroundColor: "#0c0513", padding: "80px 0" }}>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "50px" }}>
                Professional <strong className="purple">Skillset</strong>
              </h1>
            </Col>
          </Row>

          {/* AI Security Expertise */}
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12}>
              <Card style={{ backgroundColor: "#1a1625", border: "1px solid #c770f0", marginBottom: "30px" }}>
                <Card.Body style={{ padding: "40px" }}>
                  <h3 style={{ color: "#c770f0", textAlign: "center", marginBottom: "30px" }}>
                    🔐 AI Security & Governance
                  </h3>
                  <Row>
                    <Col md={6}>
                      <div style={{ color: "white", fontSize: "1.1em", lineHeight: "2" }}>
                        <p><strong>LLM Security:</strong> Prompt injection defense, jailbreak testing, output validation</p>
                        <p><strong>Agentic AI Security:</strong> MCP server security, tool poisoning, excessive agency controls</p>
                        <p><strong>AI Governance:</strong> Secure AI SDLC, permit-to-operate workflows, risk reviews</p>
                        <p><strong>Privacy-Preserving AI:</strong> Tokenization, masking, sensitive data pipelines</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div style={{ color: "white", fontSize: "1.1em", lineHeight: "2" }}>
                        <p><strong>Frameworks:</strong> OWASP Top 10 for LLMs, NIST AI-RMF, ISO 42001</p>
                        <p><strong>Adversarial Testing:</strong> AI red teaming, behavioral risk assessments</p>
                        <p><strong>Secure RAG:</strong> Context poisoning defense, retrieval security controls</p>
                        <p><strong>Research:</strong> 2 Published Papers (IEEE FMLDS 2025, SPE 2025)</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Programming & Development */}
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12}>
              <Card style={{ backgroundColor: "#1a1625", border: "1px solid #c770f0", marginBottom: "30px" }}>
                <Card.Body style={{ padding: "40px" }}>
                  <h3 style={{ color: "#c770f0", textAlign: "center", marginBottom: "30px" }}>
                    💻 Programming & Development
                  </h3>
                  <Row>
                    <Col md={6}>
                      <div style={{ color: "white", fontSize: "1.1em", lineHeight: "2" }}>
                        <p><strong>Languages:</strong> Python, C#, C++, SQL, Bash/Shell, PowerShell, JavaScript/TypeScript</p>
                        <p><strong>AI/ML:</strong> LangChain, LangGraph, Hugging Face, Llama/Ollama, Azure OpenAI, FastAPI</p>
                        <p><strong>Backend:</strong> .NET Core, Flask, FastAPI, REST APIs, JWT, RBAC</p>
                        <p><strong>Databases:</strong> SQL Server, MongoDB, PostgreSQL</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div style={{ color: "white", fontSize: "1.1em", lineHeight: "2" }}>
                        <p><strong>Cloud & DevSecOps:</strong> Azure (Key Vault, Managed Identities, Defender for Cloud), AWS, Docker, Kubernetes</p>
                        <p><strong>Security Tools:</strong> Burp Suite, Metasploit, Nmap, Wireshark, Splunk, Semgrep, GitLeaks, Trivy</p>
                        <p><strong>Penetration Testing:</strong> Web app & network pentesting, AI red teaming, threat modeling</p>
                        <p><strong>CI/CD:</strong> GitLab CI/CD, Databricks, GitHub Actions</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Certifications */}
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12}>
              <Card style={{ backgroundColor: "#1a1625", border: "1px solid #c770f0", marginBottom: "30px" }}>
                <Card.Body style={{ padding: "40px" }}>
                  <h3 style={{ color: "#c770f0", textAlign: "center", marginBottom: "30px" }}>
                    🏅 Certifications
                  </h3>
                  <Row style={{ justifyContent: "center" }}>
                    {[
                      "OWASP Top 10 for LLMs",
                      "Security+ (In Progress)",
                      "Azure AZ-900",
                      "Azure AI-900",
                      "ISC2 CC",
                      "Fortinet NSE 1–3",
                    ].map((cert, i) => (
                      <Col md={4} key={i}>
                        <div style={{ color: "white", fontSize: "1.05em", padding: "10px 0", textAlign: "center" }}>
                          🎖️ {cert}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Technical Icons Grid */}
          <Row>
            <Col md={12}>
              <h2 style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
                Technologies I Work With
              </h2>
            </Col>
          </Row>
          
          <Techstack />

          <Row style={{ marginTop: "50px" }}>
            <Col md={12}>
              <h2 style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
                Tools & Platforms
              </h2>
            </Col>
          </Row>
          
          <Toolstack />

          {/* Education Highlight */}
          <Row style={{ marginTop: "20px" }}>
            <Col md={12}>
              <Card style={{ backgroundColor: "#1a1625", border: "1px solid #c770f0" }}>
                <Card.Body style={{ padding: "40px", textAlign: "center" }}>
                  <h3 style={{ color: "#c770f0", marginBottom: "30px" }}>
                    🎓 Education
                  </h3>
                  <Row>
                    <Col md={6}>
                      <div style={{ color: "white", fontSize: "1.1em", marginBottom: "20px" }}>
                        <strong>M.S. Cybersecurity</strong><br/>
                        University of Houston, Houston TX<br/>
                        GPA: 3.98/4.0 — Graduated May 2026<br/>
                        <span style={{ color: "#c770f0", fontSize: "0.9em" }}>Awarded $16,000 Scholarship</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div style={{ color: "white", fontSize: "1.1em", marginBottom: "20px" }}>
                        <strong>B.Tech Computer Science Engineering</strong><br/>
                        Rajiv Gandhi Proudyogiki Vishwavidyalaya<br/>
                        July 2023
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Experiences />
      <ResumeNew />
      <Projects />
      <Certificates />
    </section>
  );
}

export default HomeDetailed;
