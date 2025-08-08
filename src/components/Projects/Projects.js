import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import all project images
import aiResumeImg from "../../Assets/Projects/AI-resume.png";
import ddosImg from "../../Assets/Projects/DDos.png";
import troubleShieldImg from "../../Assets/Projects/Trouble.png";
import portfolio3dImg from "../../Assets/Projects/3dport.png";
import conceptechImg from "../../Assets/Projects/Conceptech.png";
import creamDreamImg from "../../Assets/Projects/CreamDream.png";
import cyberSecurityToolsImg from "../../Assets/Projects/cyber.png";
import whatNextImg from "../../Assets/Projects/whatnext.png";
import faceRecognitionImg from "../../Assets/Projects/emotion.jpeg";
import trailerFlixImg from "../../Assets/Projects/flix.gif";
import gymimg from "../../Assets/Projects/gym.png";
import ngo from "../../Assets/Projects/khidmatgroup.png";

//New project images
import detectionResponseImg from "../../Assets/Projects/Splunk.png";
import btnImg from "../../Assets/Projects/BTN.png";
import auroraImg from "../../Assets/Projects/Aurore.png";
import sarahArtsImg from "../../Assets/Projects/Sarah.png";

// Import additional project images
import iGroceryStoreImg from "../../Assets/Projects/Istore.png";
import jawaharImg from "../../Assets/Projects/Jawahar.png";

// AI/ML Project images
import aiPentestingImg from "../../Assets/Projects/Ai-pen.png";
import cyberpathAiImg from "../../Assets/Projects/cyberpath-ai.png";
import pentestMcpImg from "../../Assets/Projects/pentest-mcp.png";
import localRagImg from "../../Assets/Projects/local-rag.png";
import secureOfflineAiImg from "../../Assets/Projects/secure-offline-ai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* New Highlights */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="AplyEase (YC Applicant)"
              description="AI + human job search service: dedicated assistants, AI-tailored resumes, quality employers, visa-friendly filters, and transparent pricing (Basic $125, Best Value $350, Ultimate $599). Helping 100+ professionals land interviews."
              link="https://aplyease.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="Research: Secure AI/IoT Systems"
              description="Ongoing research paper on secure IoT pairing and AI-driven detection. Focus on practical threat models, cryptographic protocols, and ML-based anomaly detection."
              link="https://www.linkedin.com/in/ibrahimsaleem91/"
            />
          </Col>
          {/* AI/ML Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="CyberPath AI"
              description="Advanced AI-powered cybersecurity career guidance platform that creates personalized learning paths based on user skills and career goals. Leverages LLM technology to analyze industry trends and recommend targeted resources for skill development."
              link="https://github.com/ibrahimsaleem/cyberpath-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="PentestThinkingMCP"
              description="Model Context Protocol (MCP) tool for penetration testing that enhances security assessments with AI-driven analysis. Integrates with security tools to provide contextual insights and automated vulnerability prioritization."
              link="https://github.com/ibrahimsaleem/pentest-thinking-mcp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="LocalRAGAgent"
              description="Privacy-focused Retrieval Augmented Generation (RAG) system that runs entirely on local hardware. Enables secure document analysis and question answering without sending sensitive data to external APIs."
              link="https://github.com/ibrahimsaleem/local-rag-agent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="Secure Offline AI Assistant"
              description="Air-gapped AI assistant designed for high-security environments. Features local model deployment, zero external dependencies, and specialized security tooling integration for sensitive operations."
              link="https://github.com/ibrahimsaleem/secure-offline-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiPentestingImg}
              isBlog={false}
              title="AI Pentesting Tool"
              description="Open-source penetration testing tool powered by AI that scans Python projects for vulnerabilities. Integrates Bandit scanner with Google Gemini AI and Ollama (LLaMA) for intelligent analysis. Features real-time vulnerability assessment, prioritized remediation, and conversational UI."
              link="https://github.com/ibrahimsaleem/Pen-AI-deployed"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiResumeImg}
              isBlog={false}
              title="AI Resume Maker"
              description="AI-powered tool that automates resume formatting by converting plain text resumes into LaTeX code. Enhances ATS compatibility through job description-based tailoring using Python, REST APIs, and Google Gemini AI."
              link="https://airesumemaker.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={troubleShieldImg}
              isBlog={false}
              title="TroubleShield AI"
              description="Customizable AI framework for organizations to create tailored datasets for network infrastructure. Features fine-tuned LLaMA 3.2 model deployed via Ollama with OpenWebUI for complete data privacy and offline functionality."
              link="https://www.linkedin.com/in/ibrahimsaleem91/details/projects/1736502249793/single-media-viewer/?profileId=ACoAAB5y_j4B7tceTsLlPYmILVPafQ_KhLm7iEg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ddosImg}
              isBlog={false}
              title="DDoS Detection Framework (SDN)"
              description="Developed a real-time DDoS detection and mitigation system leveraging SDN's centralized control and machine learning algorithms. Implemented traffic analysis, feature extraction, and dynamic threat mitigation using Mininet, Ryu Controller, and KNN."
              link="https://github.com/ibrahimsaleem/DDoS-Detection-and-Mitigation-Framework-Using-Software-Defined-Networking-SDN-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={detectionResponseImg}
              isBlog={false}
              title="Splunk-Based Detection and Response Automation"
              description="Engineered Splunk-based security dashboards for real-time anomaly detection and integrated AbuseIPDB for automated reputation analysis."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7283431492070838272/"
            />
          </Col>
          
          {/* Web Development Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio3dImg}
              isBlog={false}
              title="3D Portfolio Website"
              description="Interactive portfolio built with Three.js, React.js, and Node.js featuring dynamic 3D elements, flowing matrix effects, and immersive camera movements for a futuristic web experience."
              link="https://ibrahimsaleem.com"
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyberSecurityToolsImg}
              isBlog={false}
              title="Cyber Security Tools Website"
              description="Developed a comprehensive cyber security guide website with over 30 security tools, enhancing users' ability to protect themselves online."
              link="https://sctool.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conceptechImg}
              isBlog={false}
              title="Conceptech Solutions"
              description="Developed a highly responsive futuristic website for a multinational corporation to showcase their company profile and post job openings. Integrated chatbot for efficient communication and user engagement."
              link="https://conceptechsolutions.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creamDreamImg}
              isBlog={false}
              title="Cream Dream Ice Cream"
              description="Developed a website for an ice cream store with digital menu and integrated chatbot for direct order placement, enhancing customer experience and streamlining the ordering process."
              link="https://cream-dream.web.app"
            />
          </Col>
          
          {/* E-commerce Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iGroceryStoreImg}
              isBlog={false}
              title="iGroceryStore"
              description="Full-stack e-commerce platform built with .NET Core and Angular. Features include product management, shopping cart, and secure checkout. Backend API deployed on Somee, frontend on Firebase."
              link="https://github.com/ibrahimsaleem/GroceryStoreAPI"
            />
          </Col>
          
          {/* Machine Learning Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatNextImg}
              isBlog={false}
              title="WhatNext? Movie Recommendation"
              description="ML-based movie recommendation system using sklearn cosine similarity algorithm. Built with Python Flask backend API and React frontend, deployed on Heroku and Firebase."
              link="https://www.linkedin.com/posts/ibrahimsaleem91_reactjs-machinelearning-ml-activity-6948020631686832128-JN9T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB5y_j4B7tceTsLlPYmILVPafQ_KhLm7iEg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecognitionImg}
              isBlog={false}
              title="Face Recognition Attendance"
              description="Python-based attendance system using OpenCV, LBPH and HaarCascade algorithms for face detection. Features SQL database integration and Excel/CSV export capabilities."
              link="https://github.com/ibrahimsaleem/Face-Recognition-Attendance-Software"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jawaharImg}
              isBlog={false}
              title="Jawahar Tent House"
              description="Developed a highly responsive website for a national event management company. Integrated chatbot and forms for lead capture and user data collection, maximizing client engagement through effective communication channels."
              link="https://jawahartent.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trailerFlixImg}
              isBlog={false}
              title="TrailerFlix Trailer Streaming Web App"
              description="Created a trailer streaming site with a Netflix-like UI, fetching trailers from YouTube for seamless viewing."
              link="https://trailerflix-b65b0.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymimg}
              isBlog={false}
              title="O2 Fitness Website"
              description="Built a responsive website for a local gym using React, enhancing their online presence and user engagement."
              link="https://o2fitnes.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ngo}
              isBlog={false}
              title="NGO Website"
              description="Developed a website for the NGO 'Khidmat Group' to boost visibility and donations, using HTML, CSS, and JavaScript."
              link="https://khidmat-group.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auroraImg}
              isBlog={false}
              title="Aurora Clothing Store"
              description="Built an e-commerce website for a handpainted clothing startup, integrated with Digital Showroom App. Enhanced their social media presence through Instagram marketing and aesthetic feed design using Canva."
              link="https://aurora-clothing.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sarahArtsImg}
              isBlog={false}
              title="Sarah Arts"
              description="Created a portfolio website for Arabic calligraphy artists to showcase their artwork. Implemented social media marketing strategies on Instagram to boost visibility and generate orders."
              link="https://sarah-arts.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={btnImg}
              isBlog={false}
              title="BTN 'Back To Natural'"
              description="Developed an e-commerce website and Android app for a natural products startup. Integrated payment gateway, inventory management, and established their presence across social media platforms."
              link="https://btn-natural.web.app"
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;