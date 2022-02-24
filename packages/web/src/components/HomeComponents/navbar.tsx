import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button } from 'react-bootstrap';
import HubLogo from './resized_hub_logo.png';
import './navbar.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import MobileCards from './mobileCards';
import { stateChanging } from './stateChangerTracker';

const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const bgStyle = isMobile ? 'dark' : 'transparent';
  const cdStyle = isMobile ? 'cardStyleHidden' : 'cardStyle';
  //const textStyle = isMobile ? 'dark' : 'light';

  const [name, changeName] = useState('about_preslide');
  const nameDefiner = () => {
    if (name == 'about_preslide') {
      stateChanging.stateChangeTracker = 1;
      changeName('about_slide');
    } else if (name == 'about_slide') {
      changeName('about_backslide');
    } else if (name == 'about_backslide') {
      changeName('about_slide');
    }
  };

  const returnAboutPreslide = () => {
    if (stateChanging.stateChangeTracker == 0) {
      changeName('about_preslide');
    } else if (stateChanging.stateChangeTracker != 0) {
      changeName('about_backslide');
    }
  };

  return (
    <>
      <div className="main_container">
        <Navbar collapseOnSelect expand="lg" bg={bgStyle} variant="dark" className="navbar">
          <Container>
            <Image src={HubLogo} width="70px" className="img-fluid"></Image>
            <Navbar.Brand className="el-5" href="/">
              THE HUB AUBG
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#about" className="link-text" onClick={returnAboutPreslide}>
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#team"
                  className="link-text"
                  onClick={() => {
                    nameDefiner();
                    console.log(stateChanging.stateChangeTracker);
                  }}
                >
                  Team
                </Nav.Link>
                <Nav.Link href="/hackaubg" className="link-text" onClick={returnAboutPreslide}>
                  HackAUBG 4.0
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  className="link-text"
                  href="#Careers"
                  onClick={returnAboutPreslide}
                >
                  Career Opportunities
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
