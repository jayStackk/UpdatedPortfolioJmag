import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiVisualstudio,
  SiSwagger,
  SiFigma,
  SiAdobe,
  SiJira,
  SiAzuredevops,
  SiGithub
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h1 style={{ fontSize: '11px'}}> VS code </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h1 style={{ fontSize: '11px'}}> Postman </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h1 style={{ fontSize: '11px'}}> Vercel </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h1 style={{ fontSize: '11px'}}> Netlify </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <h1 style={{ fontSize: '11px'}}> Visual Studio </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <h1 style={{ fontSize: '11px'}}> Swagger </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <h1 style={{ fontSize: '11px'}}> Figma </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
        <h1 style={{ fontSize: '11px'}}> AdobeXD </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h1 style={{ fontSize: '11px'}}> Jira </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <h1 style={{ fontSize: '11px'}}> Azure DevOps </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h1 style={{ fontSize: '11px'}}> Github </h1>
      </Col>
    </Row>
  );
}

export default Toolstack;