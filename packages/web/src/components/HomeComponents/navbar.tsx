import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import HubLogo from './resized_hub_logo.png';
import './navbar.css';
import { useMediaQuery } from 'react-responsive';
const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const bgStyle = isMobile ? 'dark' : 'transparent';
  //const textStyle = isMobile ? 'dark' : 'light';

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg={bgStyle} variant="dark" className="navbar">
        <Container>
          <Image src={HubLogo} width="70px" className="img-fluid"></Image>
          <Navbar.Brand className="el-5" href="#home">
            THE HUB AUBG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about" className="link-text">
                About Us
              </Nav.Link>
              <Nav.Link href="#team" className="link-text">
                Team
              </Nav.Link>
              <Nav.Link href="#hackaubg4" className="link-text">
                HackAUBG 4.0
              </Nav.Link>
              <Nav.Link eventKey={2} className="link-text" href="#Careers">
                Career Opportunities
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
