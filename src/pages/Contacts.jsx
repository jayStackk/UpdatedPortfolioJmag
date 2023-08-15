import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '@/components/skillset/Particle';
import ContactForm from '../components/Contacts/Contact'
// import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contacts/Social'
// import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact