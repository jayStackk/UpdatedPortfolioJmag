import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "@/components/skillset/Particle";
import ResumePic from '../assets/JohnMCSTACK.png';
import Image from "next/image";

const Resume = () => {
  const imageRef = useRef(null);

  // Function to handle image download
  const handleImageDownload = () => {
    const canvas = document.createElement("canvas");
    // const image = imageRef.current;

    // canvas.width = image.width;
    // canvas.height = image.height;

    // const context = canvas.getContext("2d");
    // context.drawImage(image, 0, 0);

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "JohnMCSTACK.png"; // Set the desired download filename
    link.click();
  };

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