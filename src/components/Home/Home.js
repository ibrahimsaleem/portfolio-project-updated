import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/ibrahim.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Experiences from "../Experiences/Experiences";
import ResumeNew from "../Resume/ResumeNew";  
import Projects from "../Projects/Projects";
import Certificates from "../Certificates/Certificates";

function Home() {
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
                Applied AI Data Scientist (Houston, TX) | AI Engineer | Cybersecurity Researcher
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
      <Experiences />
      <ResumeNew />
      <Projects />
      <Certificates />
    </section>
  );
}

export default Home;
