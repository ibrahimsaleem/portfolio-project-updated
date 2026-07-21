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
        "Designing and securing enterprise AI governance and SOC-style detection-response review workflows for GenAI and agentic AI systems — reducing AI use-case review and permit-to-operate approval from 10–12 days to under 6 minutes through automated agentic security review pipelines, escalation paths, and process controls. Built SLA tracking, control pass/fail, and remediation dashboards for security and governance stakeholders. Developed SOAR-style orchestration and API integrations — alert enrichment, analyst-style triage, evidence capture, ticket routing — using Python, REST APIs, Splunk/SPL-style queries, and Cortex XSOAR concepts. Performed adversarial testing and behavioral risk assessments on enterprise LLMs against OWASP Top 10 for LLMs and Agents, NIST AI-RMF, ISO 42001, and zero-trust principles, translating findings into remediation tasks and detection-response runbooks.",
      documentLink: "https://www.att.com/"
    },
    {
      type: "experience",
      title: "GenAI & Data Science Intern",
      organization: "NOV Inc. (National Oilwell Varco) — Houston, TX",
      date: "June 2025 – Dec 2025",
      description:
        "Built an AI assistant and workflow automation system for Contact Us email routing — using company content, user intent, and location context — eliminating 20+ hours of weekly manual forwarding at 95% routing accuracy across 50+ emails daily, with threat modeling and secure architecture validation. Architected a self-improving multi-agent GenAI workflow for MUD report parsing (Azure OpenAI GPT-4o/5) — 360x speed improvement (8 min vs 2 days), 89–100% accuracy, 0 security incidents, accepted as a published paper. Secured an MCP server converting natural language to Expression Language, mitigating command injection (RCE), weak authentication, rate-limit, and tool-poisoning risks across 5+ internal tools. Supported data scientists by testing AI solutions and recommending workflow controls for prompt injection, jailbreak, sensitive data exposure, and unbounded-consumption risks.",
      documentLink: "https://www.nov.com/"
    },
    {
      type: "experience",
      title: "Research Assistant — AI & Cybersecurity",
      organization: "University of Houston, Houston, TX",
      date: "Sep 2024 – May 2025",
      description:
        "Pioneered LIMA (first author) — an LLM-driven penetration testing and security automation framework achieving 95% success rate and reducing testing time from 8+ hours to 15 minutes, published at IEEE FMLDS 2025. Engineered the PentestThinkingMCP server integrating reasoning agents with Nmap, Metasploit, and Burp Suite for analyst-style vulnerability discovery and triage across 50+ scenarios (90% accuracy), with prompt-injection defenses and input/output validation. Established a quantitative benchmark showing Claude 3.5 outperformed expert pentesters on 12/15 HTB boxes ($0.05/run, 95% cost reduction).",
      documentLink: "https://www.uh.edu/"
    },
    {
      type: "experience",
      title: "Associate Software Engineer",
      organization: "Nagarro Software Pvt. Ltd.",
      date: "March 2023 – February 2024",
      description:
        "Engineered scalable backend and security automation solutions (C#, .NET Core, SQL Server) with secure coding controls, input validation, and SQL injection prevention across 25+ APIs, improving performance by 30%. Supported SOC-facing alert triage and incident-response workflows — security event logging, RBAC/JWT controls, API health checks, escalation paths, and runbook documentation — for 6+ applications serving 1,000+ daily requests. Built Splunk/SQL-style operational dashboards and KPI reports for incident trends, SLA status, and noisy-alert review, cutting weekly reporting effort from 20 to 12 hours (40%). Mapped application and API threats to Sigma/KQL-style detection logic and documented analyst handoff steps for repeatable detection-response workflows.",
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