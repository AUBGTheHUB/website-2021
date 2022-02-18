import React from 'react';
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import HubLogo from './hub_logo.svg';
import './hackAUBG.css';

const HackAUBG = () => {
  return (
    <div className="landing">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
        <Container>
          <Image src={HubLogo} width="50px" className="paddedLeft"></Image>
          <Navbar.Brand className="el-5" href="/">
            THE HUB AUBG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about" className="link-text">
                About
              </Nav.Link>
              <Nav.Link href="#team" className="link-text">
                Mentors
              </Nav.Link>
              <Nav.Link href="#hackaubg4" className="link-text">
                Judges
              </Nav.Link>
              <Nav.Link href="#Careers" className="link-text">
                Partners
              </Nav.Link>
              <Nav.Link href="#Careers" className="link-text">
                Theme
              </Nav.Link>
              <Nav.Link href="#Careers" className="link-text">
                FAQ
              </Nav.Link>
              <Nav.Link href="#Careers" className="link-text">
                Contact Us
              </Nav.Link>
              <Button>Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="textBody">
        <h1 className="textHead">
          <strong>HackAUBG 4.0</strong>
        </h1>
        <p className="textDate">April 1st-3rd, 2022</p>
        <p className="textDesc">Online Programming Hackathon in English</p>
        <p className="textReg">Registration is now open!</p>
      </div>
    </div>
  );
};

export default HackAUBG;
