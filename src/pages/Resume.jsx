import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "@/components/skillset/Particle";
import ResumePic from '../assets/JohnMCSTACK.png';
import Image from "next/image";


const Resume = () => {
  

  return (

   
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            onClick={handleImageDownload}
          >
            <AiOutlineDownload />
            &nbsp;Download Image
          </Button>
        </Row>

        <Row className="resume">
          <Image
            // ref={imageRef}
            src={ResumePic}
            style={{
              height: '450px',
              width:'332px' ,
               
              borderStyle : 'solid', 
              borderWidth :"4px",
              
            }}
            
            alt="Resume Image"
          />
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>

        </Row> */}
      </Container>
      </div>
   
  );
};

export default Resume;