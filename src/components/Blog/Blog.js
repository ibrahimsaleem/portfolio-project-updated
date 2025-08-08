import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogPosts from "./blogData";

function Blog() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">Latest <span className="purple">Insights</span></h1>
        <p style={{ color: "white" }}>Curated posts and updates from my work in AI, security, and data science.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post) => (
            <Col md={4} className="project-card" key={post.id}>
              <Card className="project-card-view">
                <Card.Img variant="top" src={post.image} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: "#9aa2b1" }}>{post.date}</Card.Subtitle>
                  <div style={{ marginBottom: 10 }}>
                    {post.tags.map((t) => (
                      <Badge key={t} bg="secondary" style={{ marginRight: 6 }}>{t}</Badge>
                    ))}
                  </div>
                  <Card.Text style={{ textAlign: "justify" }}>{post.excerpt}</Card.Text>
                  {post.link?.startsWith("http") ? (
                    <Button variant="primary" href={post.link} target="_blank" rel="noreferrer">Read More</Button>
                  ) : (
                    <Button as={Link} to={`/blog/${post.id}`} variant="primary">Read More</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;


