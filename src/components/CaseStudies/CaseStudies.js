import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSitemap } from "react-icons/fa";
import Particle from "../Particle";
import caseStudies from "./caseStudiesData";
import "./CaseStudies.css";

function CaseStudies() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Case <span className="purple">Studies</span>
        </h1>
        <p style={{ color: "white" }}>
          In-depth breakdowns of published research and enterprise AI security work —
          architecture, controls, and measured results, for anyone who wants to go deeper
          than a project card.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {caseStudies.map((study) => (
            <Col md={6} className="project-card" key={study.id}>
              <Card className="case-study-card-view">
                <Card.Body>
                  <div style={{ marginBottom: 10 }}>
                    <FaSitemap
                      style={{
                        color: "var(--matrix-green)",
                        fontSize: "1.6em",
                        filter: "drop-shadow(0 0 6px rgba(0,255,65,0.6))",
                      }}
                    />
                  </div>
                  <Card.Title style={{ color: "var(--cyber-cyan)" }}>{study.title}</Card.Title>
                  <div className="case-study-meta">{study.org}</div>
                  <div className="case-study-meta" style={{ color: "#9aa2b1" }}>{study.date}</div>
                  <div style={{ margin: "10px 0" }}>
                    {study.tags.map((t) => (
                      <span className="case-study-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <Card.Text style={{ textAlign: "justify", color: "rgba(210,225,245,0.9)" }}>
                    {study.summary}
                  </Card.Text>
                  <Button as={Link} to={`/case-studies/${study.id}`} variant="primary">
                    View Case Study
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default CaseStudies;
