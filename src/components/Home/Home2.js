import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <span className="purple">Mohammad Ibrahim Saleem</span> — an <b className="purple">Applied AI Data Scientist</b> and <b className="purple">AI Engineer</b> based in Houston, TX.
              <br />
              <br />
              I recently started at <b className="purple">NOV</b> as an Applied AI Data Scientist, where I develop machine learning models, build data pipelines, and deploy AI solutions to solve real-world business problems. I'm also pursuing an M.S. in Cybersecurity at the University of Houston and previously worked as a Research Assistant on AI-driven security and secure IoT systems.
              <br />
              <br />
              I specialize in <b className="purple">Python, TensorFlow, PyTorch, scikit-learn</b> and build end-to-end ML solutions using <b className="purple">MLOps, cloud platforms, and modern data stacks</b>. My expertise spans <b className="purple">LLMs, RAG systems, predictive analytics, and AI security</b>.
              <br />
              <br />
              I'm the founder of <b className="purple">AplyEase</b> (YC applicant) — a service that combines AI + dedicated human assistants to deliver tailored job applications, custom resumes, and curated matches. I'm also working on a research paper in secure AI/IoT systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ibrahimsaleem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
