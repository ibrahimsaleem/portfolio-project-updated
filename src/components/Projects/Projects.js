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

// New generated project images
import evilTraceImg from "../../Assets/Projects/eviltrace-ai.svg";
import tokenlessImg from "../../Assets/Projects/tokenless.svg";
import clawProtectImg from "../../Assets/Projects/clawprotect.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications </strong> & Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are my research publications, active projects, and recent works.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Research Publications */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="LIMA: LLM-MCP Penetration Testing (IEEE FMLDS 2025)"
              description="🏆 PUBLISHED — First author. Autonomous penetration testing framework using LLMs and MCP servers for initial machine access. 95% success rate, reduced testing from 8+ hours to 15 minutes. Claude 3.5 outperformed expert pentesters on 12/15 HTB boxes at $0.05/run."
              link="https://www.linkedin.com/in/ibrahimsaleem91/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="Self-Improving GenAI Agent for Report Parsing (SPE 2025)"
              description="🏆 PUBLISHED — Second author. Autonomous 3-agent GenAI system (vendor detection, prompt optimization, extraction) using Azure OpenAI GPT-4o/5. 360x speed improvement (8 min vs 2 days), 89–100% accuracy, 0 security incidents. Applied OWASP LLM Top 10 & NIST AI-RMF."
              link="https://www.linkedin.com/in/ibrahimsaleem91/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="EncoderThinkingMCP (IEEE Southwest 2026)"
              description="🔬 IN RESEARCH — AI-driven MCP server providing structured workflows, reasoning, and multi-framework support for encoder-decoder model development. Co-authored with Prof. Tania Banerjee. IEEE Southwest 2026 submission."
              link="https://www.linkedin.com/in/ibrahimsaleem91/"
            />
          </Col>

          {/* NEW: Latest Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evilTraceImg}
              isBlog={false}
              title="EvilTrace AI — Multi-Agent DFIR Engine"
              description="🏆 HACKATHON — Built for the FIND EVIL Hackathon. Autonomous 7-agent DFIR engine that verifies security claims against actual log artifacts — zero hallucinations. Features a Zero-Hallucination Gate, Self-Correction Loop, Threat-Intel Enrichment via Exa Search API, and a Streamlit dashboard with chronological timelines. EvilTrace doesn't guess. It verifies."
              link="https://github.com/ibrahimsaleem/EvilTraceAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tokenlessImg}
              isBlog={false}
              title="TokenLess — AI Token Optimization Hub"
              description="⚡ OPEN SOURCE — Token optimization hub with reusable AI skills that plug directly into Claude Code, Windsurf, MCP agents, Copilot, and other AI workflows. Includes token & cost tracking, context optimization, enterprise efficiency strategies, and training paths. Reduces token cost by up to 78% on real workflows."
              link="https://github.com/ibrahimsaleem/TokenLess"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clawProtectImg}
              isBlog={false}
              title="ClawProtect — AI Agent Security Gateway"
              description="🛡️ RESEARCH — Defense-in-depth security stack for AI agent gateways. Features a content-aware security proxy (prompt injection, PII, secrets detection), eBPF-based kernel monitoring for syscall-level visibility, egress firewall for outbound policy enforcement, and a cross-layer adaptive event bus for Splunk/SIEM integration."
              link="https://github.com/ibrahimsaleem/ClawProtect"
            />
          </Col>

          {/* Featured AI Security Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pentestMcpImg}
              isBlog={false}
              title="PentestThinkingMCP — Autonomous Pentest Server"
              description="🔴 MCP server enabling LLM-driven attack chains (Metasploit, Nmap, Burp Suite). Compromised HTB 'Lame' in 3 minutes ($0.03, 95% cost reduction). Modular AI agent framework with beam search & MCTS for reconnaissance, privilege escalation, and post-exploitation across 20+ scenarios."
              link="https://github.com/ibrahimsaleem/PentestThinkingMCP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="Agentic Lean Embedding System for Vulnerability Discovery"
              description="🔬 ACTIVE RESEARCH — Agentic pipeline combining lean embeddings for vulnerability discovery. Semantic indexing for OS system-wide analysis: 500+ secrets, 200+ insecure API patterns, 150+ risky settings detected. 90% faster discovery with cross-source correlation and human-in-the-loop triage."
              link="https://www.linkedin.com/in/ibrahimsaleem91/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="Contact Us AI Automation — Threat Modeling Report"
              description="Comprehensive threat modeling report applying OWASP Top 10 for LLMs across full AI lifecycle. Mapped LLM-01 (Prompt Injection), LLM-06 (Sensitive Data Disclosure), LLM-08 (Excessive Agency). 0 critical vulnerabilities, 100% compliance, 96% response accuracy processing 50+ emails daily."
              link="https://www.linkedin.com/in/ibrahimsaleem91/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600&fit=crop"
              isBlog={false}
              title="Cybersecurity Awareness Platform"
              description="Interactive platform with 30+ penetration testing tools (Metasploit, Burp Suite) serving 1,000+ learners. Integrated attack simulations, automated scoring, and progress tracking. Secure coding workshops teaching 200+ developers to remediate security flaws."
              link="https://sctool.web.app/"
            />
          </Col>

          {/* AI/ML Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={localRagImg}
              isBlog={false}
              title="LocalRAGAgent"
              description="Privacy-focused Retrieval Augmented Generation (RAG) system running entirely on local hardware. Enables secure document analysis and question answering without sending sensitive data to external APIs."
              link="https://github.com/ibrahimsaleem/LocalRAGAgent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secureOfflineAiImg}
              isBlog={false}
              title="Secure Offline AI Assistant"
              description="Air-gapped AI assistant for high-security environments. Local model deployment, zero external dependencies, and specialized security tooling integration for sensitive network operations."
              link="https://github.com/ibrahimsaleem/secure-offline-ai"
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