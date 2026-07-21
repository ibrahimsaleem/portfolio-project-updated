import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgCodeSlash, CgHashtag } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiMysql,
  SiApachenetbeanside,
  SiFirebase,
  SiJava,
  SiCanva,
  SiDotnet,
  SiAngular,
  SiMicrosoftsqlserver,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpenai,
  SiDocker,
  SiApacheairflow,
  SiPowerbi,
  SiTableau,
  SiKubernetes,
  SiSplunk
} from "react-icons/si";
import { FaChartLine, FaRobot, FaUserShield, FaSearch } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h5>C/C#</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <h5>HTML/CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <h5>SQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <h5>Angular</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <h5>.NET</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5>Firebase</h5>
      </Col>
      
      {/* AI/ML & Data */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <h5>PyTorch</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h5>TensorFlow</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <h5>scikit-learn</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <h5>Pandas</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <h5>NumPy</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <h5>OpenAI</h5>
      </Col>
      
      {/* Data & Platform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h5>Docker</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
        <h5>Airflow</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <h5>Power BI</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <h5>Tableau</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <h5>Kubernetes</h5>
      </Col>

      {/* Security Operations & Detection */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
        <h5>Splunk / SPL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
        <h5>SOAR / Cortex XSOAR</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine />
        <h5>SIEM / EDR</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSearch />
        <h5>Sigma / KQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserShield />
        <h5>IAM / Zero Trust</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
