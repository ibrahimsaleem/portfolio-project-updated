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
      date: "Expected August 2026",
      description:
        `GPA: 4.0/4.0; Courses: Cybersecurity, Network Security, Secure Enterprise Computing, 
        Critical thinking in Info Sec, Cryptography, Data Science for Cybersecurity, Project Management`,
      documentLink: "https://drive.google.com/your-msc-transcript-link"  // Add your link here
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science Engineering",
      organization: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      date: "July 2023",
      description:
        "Courses: Python, Software Engineering, Data Structures & Algorithms, OOPS, DBMS, Cloud Computing, Operating Systems, Computer Networks, Cryptography, Machine Learning",
      documentLink: "https://drive.google.com/your-btech-transcript-link"  // Add your link here
    },
  ];

  // Work experience data (right side)
  const experienceData = [
    {
      type: "experience",
      title: "Applied AI Data Scientist",
      organization: "NOV (National Oilwell Varco)",
      date: "Jan 2025 – Present",
      description:
        "Developing machine learning models and data science solutions for the energy sector. Building predictive analytics, AI-powered automation, and MLOps pipelines. Deploying LLM/RAG systems and creating data-driven insights to optimize operational efficiency and decision-making processes.",
      documentLink: "https://www.nov.com/"
    },
    {
      type: "experience",
      title: "Research Assistant (AI & IoT Security)",
      organization: "University of Houston, Houston, TX",
      date: "Sep 2024 – Present",
      description:
        "Developing an AI-driven Automatic Pentesting security tool for automated code analysis and penetration testing using Bandit, Gemini AI, and Ollama (LLaMA). Designed a secure IoT pairing system leveraging automotive signal noise with cryptographic protocols and TLS/SSL encryption. Engineered a network security monitoring system integrating Python-based analytics and intrusion detection models, improving threat detection efficiency by 40%.",
      documentLink: "https://drive.google.com/research-assistant-letter"  // Add your link here
    },
    {
      type: "experience",
      title: "Associate Software Engineer",
      organization: "Nagarro Software Pvt. Ltd.",
      date: "March 2023 – February 2024",
      description:
        "Designed and developed scalable backend solutions using C#, .NET Core, and SQL Server—optimizing queries by 30%. Built secure REST APIs with JWT authentication and role-based access control. Developed interactive Angular-based dashboards and automated data analytics pipelines using Python and Pandas.",
      documentLink: "https://drive.google.com/file/d/1iCmJo79hqhu-ZX7JYsbArzW6FtDOv4cI/view"  // Add your link here
    },
    {
      type: "experience",
      title: "Research & Cyber Security Intern",
      organization: "State Cyber Cell MP Police",
      date: "July 2022 – December 2022",
      description:
        "Conducted security assessments on critical infrastructure systems to identify vulnerabilities in power grids and telecom networks. Researched emerging attack vectors using Python-based threat intelligence analytics and delivered cybersecurity awareness training to over 500 students and professionals.",
      documentLink: "https://www.linkedin.com/posts/ibrahimsaleem91_cybersecurity-technology-internship-activity-6956594217557110784-LO4_/?utm_source=linkedin_share&utm_medium=member_desktop_web"  // Add your link here
    },
    {
      type: "experience",
      title: "Python Developer Intern",
      organization: "Dolphinox Pvt Ltd",
      date: "June 2022 – September 2022",
      description:
        "Enhanced project understanding and planning efficiency by creating Use-case, Database, Class, and Object diagrams during the design phase. Engineered robust back-end APIs utilizing Python and Django, paired with HTML, CSS, and JavaScript in the React Framework for front-end development, ensuring seamless web development process and enhanced user experience. Played a pivotal role in the development of a product sales and inventory management website.",
      documentLink: "https://drive.google.com/file/d/1n5G5ldpu5OrVqQn53_0H37s-CmXflNLg/view"  // Add your link here
    },
    {
      type: "experience",
      title: "Campus Ambassador/Content Writer Intern",
      organization: "World Cyber Security Forum",
      date: "April 2022 – June 2022",
      description:
        "Leveraged strong writing and editing skills to create high-quality cybersecurity content, including technical tutorials, blogs, and news articles. Conducted in-depth research on various cybersecurity topics including testing techniques, cyber attacks, viruses, and cyber laws. Played a key role as Campus Ambassador in promoting cybersecurity awareness among college students through educational initiatives and workshops.",
      documentLink: "https://www.worldcybersecurities.com/bangladesh-deals-with-undp-for-cybersecurity-awareness-campaign/"  // Add your link here
    },
    {
      type: "experience",
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      date: "January 2017 - March 2023",
      description:
        "Provided website development services to diverse clients, including local businesses and remote clients, utilizing frameworks such as React JS, WordPress, and Joomla. Specialized in enhancing businesses' online presence by creating digital assets like landing pages, web pages, digital menus, and advertisements. Successfully delivered customized web solutions that improved clients' online visibility and user engagement.",
      documentLink: "https://www.linkedin.com/in/ibrahimsaleem91/details/projects/"  // Add your link here
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