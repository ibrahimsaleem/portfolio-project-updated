import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaShieldAlt } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Terminal-style brand */}
        <Navbar.Brand href="/" className="d-flex align-items-center" style={{ gap: "8px" }}>
          <FaShieldAlt
            style={{
              color: "#00FF41",
              fontSize: "1.1em",
              filter: "drop-shadow(0 0 6px rgba(0,255,65,0.7))",
            }}
          />
          <span
            style={{
              fontFamily: "'Share Tech Mono', 'Courier New', monospace",
              color: "#00FF41",
              fontWeight: "700",
              fontSize: "1.1em",
              letterSpacing: "2px",
              textShadow: "0 0 10px rgba(0,255,65,0.6)",
            }}
          >
            &gt;_IS
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/experience" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/ibrahimsaleem91/recent-activity/all/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> LinkedIn
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/blog" onClick={() => updateExpanded(false)}>
                <ImBlog style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/certificates" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Certs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/ibrahimsaleem"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.1em" }} />{" "}
                <AiFillStar style={{ fontSize: "1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
