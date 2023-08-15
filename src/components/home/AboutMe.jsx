import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Pictorial from '../../assets/home-main.svg'
import Image from "next/image";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">John Magpantay </span>
                 and I'm from <span className="yellow"> Lodi, CA.</span>
                <br />
                <br />
                Season 5 graduate from CodeStack Academy | Current intern at CodeStack- SJCOE.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I have knowledge in programming languages such as
                    <b className="yellow"> C#, JavaScript, TypeScript, SQL, HTML, CSS.</b>
                  <b className="yellow"></b>
                  <br />
                  <br />
                  I have a passion of working
                  with libraries and frameworks like <b className="yellow">React, NextJS, Angular & React-native</b>
                  <i>
                    <b className="yellow">
                      {" "}
                     
                    </b>
                  </i>
                  &nbsp;
                  <i>
                    <b className="yellow"></b>
                  </i>
                  <br />
                  <br />
                  The process of turning ideas into fully functional software excited me! and thrive on challenges that come with it.
                  <br />
                  <br />
                  
                  {/* <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i> */}
                  <br />
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <Image src={Pictorial} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me!
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/jayStackk"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/john-magpantay-0a2953271/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About