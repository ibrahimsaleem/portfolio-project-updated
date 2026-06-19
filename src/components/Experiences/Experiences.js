import React from "react";
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperiencesCards";
import Particle from "../Particle";
import "./Experiences.css";

function Experiences() {
  // Education data (left side)
  const educationData = [
    {
      type: "education",
      title: "Master of Science in Cybersecurity",
      organization: "University of Houston, Houston, TX",
      date: "Expected May 2026",
      description:
        "GPA: 3.98/4.0 | Awarded $16,000 Scholarship. Coursework: Network Security, Secure Enterprise Computing, Cryptography, Data Analysis for Cybersecurity, Cybersecurity Risk Management, Secure Software Design.",
      documentLink: "https://www.uh.edu/"
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science Engineering",
      organization: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      date: "July 2023",
      description:
        "Coursework: Python, Software Engineering, Data Structures & Algorithms, OOP, DBMS, Cloud Computing, Operating Systems, Computer Networks, Cryptography, Machine Learning.",
      documentLink: "https://www.rgpv.ac.in/"
    },
  ];

  // Work experience data (right side)
  const experienceData = [
    {
      type: "experience",
      title: "AI Security & Governance Engineer",
      organization: "AT&T — Plano, TX (Hybrid)",
      date: "Jan 2026 – Present",
      description:
        "Designing and securing enterprise AI governance workflows for GenAI and agentic AI systems — reducing AI use-case review from 10–12 days to under 6 minutes through automated agentic security review pipelines. Developing privacy-preserving tokenization and masking frameworks for enterprise networking data. Performing adversarial testing, architecture security reviews, and behavioral risk assessments on enterprise LLMs prior to deployment. Creating enterprise AI security frameworks aligned with OWASP Top 10 for LLMs, NIST AI-RMF, ISO 42001, and zero-trust principles.",
      documentLink: "https://www.att.com/"
    },
    {
      type: "experience",
      title: "GenAI & Data Science Intern",
      organization: "NOV Inc. (National Oilwell Varco) — Houston, TX",
      date: "June 2025 – Dec 2025",
      description:
        "Built Contact Us AI Automation system routing queries with 96% accuracy, processing 50+ emails daily (0 critical vulnerabilities, 100% OWASP compliance). Architected self-improving multi-agent GenAI system for MUD report parsing — 360x speed improvement (8 min vs 2 days), 89–100% accuracy, published at SPE 2025. Secured MCP server for Expression Language conversion, mitigating command injection, tool poisoning, and weak authentication. Consulted team on secure agentic coding practices and conducted AI security reviews.",
      documentLink: "https://www.nov.com/"
    },
    {
      type: "experience",
      title: "Research Assistant — AI & Cybersecurity",
      organization: "University of Houston, Houston, TX",
      date: "Sep 2024 – May 2025",
      description:
        "Led research on LIMA (first author) — LLM-driven penetration testing framework using MCP servers, achieving 95% success rate and reducing testing time from 8+ hours to 15 minutes. Published at IEEE FMLDS 2025. Built PentestThinkingMCP server integrating Nmap, Metasploit, and Burp Suite for vulnerability discovery across 50+ scenarios. Benchmarked Claude 3.5 against expert pentesters on 12/15 HTB boxes ($0.05/run, 95% cost reduction).",
      documentLink: "https://www.uh.edu/"
    },
    {
      type: "experience",
      title: "Associate Software Engineer",
      organization: "Nagarro Software Pvt. Ltd.",
      date: "March 2023 – February 2024",
      description:
        "Engineered scalable backend solutions using C#, .NET Core, and SQL Server with security controls, input validation, and SQL injection prevention — optimizing queries by 30% across 25+ APIs. Delivered secure REST APIs with JWT, RBAC, and OWASP compliance, handling 1000+ daily requests (99.9% uptime). Streamlined data analytics pipelines, reducing reporting time by 40%.",
      documentLink: "https://drive.google.com/file/d/1iCmJo79hqhu-ZX7JYsbArzW6FtDOv4cI/view"
    },
    {
      type: "experience",
      title: "Research & Cybersecurity Intern",
      organization: "State Cyber Cell MP Police",
      date: "July 2022 – December 2022",
      description:
        "Conducted security assessments on critical infrastructure systems to identify vulnerabilities in power grids and telecom networks. Researched emerging attack vectors using Python-based threat intelligence analytics. Delivered cybersecurity awareness training to 500+ students and professionals.",
      documentLink: "https://www.linkedin.com/posts/ibrahimsaleem91_cybersecurity-technology-internship-activity-6956594217557110784-LO4_/"
    },
    {
      type: "experience",
      title: "Python Developer Intern",
      organization: "Dolphinox Pvt Ltd",
      date: "June 2022 – September 2022",
      description:
        "Engineered backend APIs using Python and Django paired with React for front-end development. Built a product sales and inventory management website with full-stack integration.",
      documentLink: "https://drive.google.com/file/d/1n5G5ldpu5OrVqQn53_0H37s-CmXflNLg/view"
    },
    {
      type: "experience",
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      date: "January 2017 – March 2023",
      description:
        "Delivered customized web solutions for diverse clients using React JS, WordPress, and Joomla — including landing pages, digital menus, and e-commerce platforms — improving clients' online visibility and user engagement.",
      documentLink: "https://www.linkedin.com/in/ibrahimsaleem91/details/projects/"
    },
  ];

  return (
    <Container fluid className="experience-section" id="experiences">
      <Particle />
      <Container>
        <div className="section-heading">
          <h1 className="experience-heading">
             <span className="purple"> My Timeline</span>
          </h1>
          <p className="section-description">
            Here is a parallel timeline of my education and professional experiences.
          </p>
        </div>
        
        <div className="parallel-timeline-container">
          <div className="timeline-column education-column">
            <h3 className="column-title">
              <span className="education-color">Education</span>
            </h3>
            {educationData.map((item, index) => (
              <div key={`edu-${index}`} className="timeline-item-parallel">
                <div className="timeline-marker education"></div>
                <ExperienceCard {...item} />
              </div>
            ))}
          </div>

          <div className="timeline-center-line"></div>
          
          <div className="timeline-column experience-column">
            <h3 className="column-title">
              <span className="experience-color">Experience</span>
            </h3>
            {experienceData.map((item, index) => (
              <div key={`exp-${index}`} className="timeline-item-parallel">
                <div className="timeline-marker experience"></div>
                <ExperienceCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Experiences;