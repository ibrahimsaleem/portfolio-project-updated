import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import blogContent from "./blogContent";

function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">Post not found</h1>
          <p style={{ color: "white" }}>The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </Container>
      </Container>
    );
  }

  const { title, date, tags, heroImage, Content } = post;

  return (
    <Container fluid className="project-section">
      <Container>
        <Row>
          <Col md={12}>
            <img src={heroImage} alt={title} style={{ width: "100%", borderRadius: 12, marginBottom: 20 }} />
            <h1 className="project-heading" style={{ marginTop: 10 }}>{title}</h1>
            <div style={{ color: "#9aa2b1", marginBottom: 10 }}>{date}</div>
            <div style={{ marginBottom: 20 }}>
              {tags.map((t) => (
                <Badge bg="secondary" key={t} style={{ marginRight: 6 }}>{t}</Badge>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ color: "white", lineHeight: 1.8, fontSize: "1.05rem" }}>
              <Content />
            </div>
            <div style={{ marginTop: 30 }}>
              <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogPost;


