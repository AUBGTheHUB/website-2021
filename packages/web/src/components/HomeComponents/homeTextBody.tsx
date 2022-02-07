import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import './homeTextBody.css';
import logoSVG from './/hub_logo.svg';

const TextBody = () => {
  return (
    <Container className="textAndLogo">
      <Container fluid="md" className="bodyText">
        <h1>We are THE HUB</h1>
        <p>Welcome to The Hub - the IT and Innovations club on AUBG campus!</p>
        <p>Join us and make the events, workshops, and projects of your dreams happen!</p>
        <Button variant="outline-primary" className="hackathonButton">
          Check out our upcoming Hackathon!
        </Button>
      </Container>
      <Image className="logo" src={logoSVG} />
    </Container>
  );
};

export default TextBody;
