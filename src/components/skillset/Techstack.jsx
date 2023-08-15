import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiAngular,
  SiSupabase,
  SiPrisma,
  SiBootstrap,
  SiTailwindcss
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> 
        <h1 style={{ fontSize: '11px'}}> HTML </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h1 style={{ fontSize: '11px'}}> JavaScript </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h1 style={{ fontSize: '11px'}}> CSS </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h1 style={{ fontSize: '11px'}}> NodeJs </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h1 style={{ fontSize: '11px'}}> ReactJS </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h1 style={{ fontSize: '11px'}}> Redux </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h1 style={{ fontSize: '11px'}}> Mongo DB </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular/>
        <h1 style={{ fontSize: '11px'}}> Angular </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase/>
        <h1 style={{ fontSize: '11px'}}> Supabase </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
        <h1 style={{ fontSize: '11px'}}> Prisma </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h1 style={{ fontSize: '11px'}}> Git </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h1 style={{ fontSize: '11px'}}> Bootstrap </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h1 style={{ fontSize: '11px'}}> Tailwind </h1>
      </Col>
    </Row>
  );
}

export default Techstack;