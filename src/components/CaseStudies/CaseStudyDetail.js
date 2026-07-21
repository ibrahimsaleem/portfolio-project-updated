import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Particle from "../Particle";
import caseStudiesContent from "./caseStudiesContent";
import FlowDiagram from "./FlowDiagram";
import BlockDiagram from "./BlockDiagram";
import StatRow from "./StatRow";
import "./CaseStudies.css";

function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudiesContent[id];

  if (!study) {
    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">Case study not found</h1>
          <p style={{ color: "white" }}>The case study you are looking for does not exist.</p>
          <Link to="/case-studies" className="btn btn-primary">Back to Case Studies</Link>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={11} lg={9} xl={8} className="case-study-content">
            <div className="case-study-hero">
              <h1 className="project-heading" style={{ textAlign: "left", marginBottom: 10 }}>
                {study.title}
              </h1>
              <div className="case-study-meta" style={{ fontSize: "1rem" }}>{study.org}</div>
              <div className="case-study-meta" style={{ color: "#9aa2b1" }}>{study.date}</div>
              <div style={{ marginTop: 12 }}>
                {study.tags.map((t) => (
                  <span className="case-study-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            {study.tldr && (
              <div className="case-study-tldr">{study.tldr}</div>
            )}

            {study.stats && study.stats.length > 0 && (
              <StatRow stats={study.stats} />
            )}

            <p className="case-study-body-text">
              {study.overview}
            </p>

            {study.myRole && study.myRole.length > 0 && (
              <>
                <h2 className="case-study-section-title">{study.myRoleHeading || "My Role"}</h2>
                <ul className="case-study-role-list">
                  {study.myRole.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {study.flowSteps && study.flowSteps.length > 0 && (
              <>
                <h2 className="case-study-section-title">{study.flowHeading}</h2>
                <FlowDiagram steps={study.flowSteps} />
              </>
            )}

            {study.insightText && (
              <>
                <h2 className="case-study-section-title">{study.insightHeading}</h2>
                <p className="case-study-body-text">
                  {study.insightText}
                </p>
              </>
            )}

            {study.controls && study.controls.length > 0 && (
              <>
                <h2 className="case-study-section-title">{study.controlsHeading}</h2>
                <BlockDiagram blocks={study.controls} pipeline={study.controlsPipeline} />
              </>
            )}

            {study.results && study.results.length > 0 && (
              <>
                <h2 className="case-study-section-title">{study.resultsHeading}</h2>
                <ul className="case-study-role-list">
                  {study.results.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {study.references && study.references.length > 0 && (
              <>
                <h2 className="case-study-section-title">References</h2>
                <div className="case-study-references">
                  {study.references.map((ref) => (
                    <a
                      key={ref.url}
                      className="case-study-reference-link"
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt /> {ref.label}
                    </a>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: 40, marginBottom: 20 }}>
              <Link to="/case-studies" className="btn btn-primary">← Back to Case Studies</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CaseStudyDetail;
