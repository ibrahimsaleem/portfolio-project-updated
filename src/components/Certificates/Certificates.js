import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "../Particle";

import linkedinLogo from "../../Assets/1.jpeg"; // Import the LinkedIn logo
import azureLogo from "../../Assets/2.jpeg"; // Import the Azure logo
import awsLogo from "../../Assets/3.png";
import cSharpLogo from "../../Assets/4.jpeg"; // Import the C# logo
import angularLogo from "../../Assets/5.jpeg"; // Import the Angular logo
import fortinetLogo2 from "../../Assets/6.png"; // Import the Fortinet logo
import ciscoLogo from "../../Assets/7.png"; // Import the Cisco logo
import fortinetLogo1 from "../../Assets/8.png";
import barkatullahLogo from "../../Assets/9.png"; // Import the Barkatullah University logo
import AILogo from "../../Assets/AI.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've completed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Certificate: React: Creating and Hosting a Full-Stack Site */}
          <Col md={4} className="project-card">
            <CertificateCard
             imgPath={linkedinLogo}
              isBlog={false}
              title="React: Creating and Hosting a Full-Stack Site"
              description="Issued Oct 2023. Skills: React.js"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

          {/* Certificate: Azure Essential Training for Developers */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={azureLogo}
              isBlog={false}
              title="Azure Essential Training for Developers"
              description="Issued Jul 2023"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

          {/* Certificate: AWS Management Console: Beginner's Guide to Services */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={awsLogo}
              isBlog={false}
              title="AWS Management Console: Beginner's Guide to Services"
              description="Issued Jun 2023"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

          {/* Certificate: C# and .NET Essential Training */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cSharpLogo}
              isBlog={false}
              title="C# and .NET Essential Training"
              description="Issued May 2023. Skills: C#"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

          {/* Certificate: Learning the Angular CLI */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={angularLogo}
              isBlog={false}
              title="Learning the Angular CLI"
              description="Issued May 2023"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

         

          {/* Certificate: NSE 2 Network Security Associate */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={fortinetLogo2}
              isBlog={false}
              title="NSE 2 Network Security Associate"
              description="Issued Jun 2022 · Expires Jun 2024. Credential ID: G9jnGQwIgz"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>
           {/* Certificate: NSE 1 Network Security Associate */}
           <Col md={4} className="project-card">
            <CertificateCard
              imgPath={fortinetLogo1}
              isBlog={false}
              title="NSE 1 Network Security Associate"
              description="Issued May 2021 · Expired May 2023. Credential ID: SGdkHEUIpJ"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

          {/* Certificate: Introduction to Cybersecurity */}
          <Col md={4} className="project-card">
            <CertificateCard
             imgPath={ciscoLogo}
              isBlog={false}
              title="Introduction to Cybersecurity"
              description="Issued May 2022"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>


         

          {/* Certificate: Software Development Trainee */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={AILogo}
              isBlog={false}
              title="AI Foundation Certificate"
              description="Issued Jan 2021. Credential ID: 16253062-166. Skills: Python"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>

         
           {/* Certificate: Certificate Course in Modern Arabic */}
           <Col md={4} className="project-card">
            <CertificateCard
              imgPath={barkatullahLogo}
              isBlog={false}
              title="Certificate Course in Modern Arabic"
              description="Issued Feb 2022. Organization: Barkatullah University, Bhopal. Credential ID: 2280100009"
              link="#" // Replace "#" with the actual link to the certificate
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
