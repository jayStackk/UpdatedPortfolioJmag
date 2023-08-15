/* eslint react/no-unescaped-entities */
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from '../assets/about.png'
// import Particle from '../components/Particle';
import homePic from '../assets/headshots.jpg'
import Particle from '@/components/skillset/Particle';
import About from '@/components/home/AboutMe';
import Type from '@/components/home/types';
import Image from 'next/image';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> John Magpantay</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: 'center'}}>
              <Image
                src={homePic}
                alt="home pic"
                className="img-fluid"
                style={{ maxWidth: '250px', maxHeight: "290px", borderRadius: '80px', marginTop:'50px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home