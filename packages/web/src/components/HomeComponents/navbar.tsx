import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button } from 'react-bootstrap';
import HubLogo from './resized_hub_logo.png';
import './navbar.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import MobileCards from './mobileCards';
import { stateChanging } from './stateChangerTracker';

const Navigation = (stateChangeNumber: any) => {
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
            <Navbar.Brand className="el-5" href="#home">
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
                <Nav.Link href="#hackaubg4" className="link-text" onClick={returnAboutPreslide}>
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
        <div className={name}>
          <div className="cardContainer">
            <MobileCards></MobileCards>
            <div className={cdStyle}>
              <Card>
                <Card.Img variant="top" src="/pr-department.png" className="imageSized" />
                <Card.Body>
                  <Card.Title>Public Relations</Card.Title>
                  <Card.Text>
                    The financial powerhouse to all our initiatives! Manage sponsorships with
                    international companies and scout for the best collaboration opportunities in
                    and outside of AUBG!
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className={cdStyle}>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + '/design-community.png'}
                  className="imageSized"
                />
                <Card.Body>
                  <Card.Title>Marketing</Card.Title>
                  <Card.Text>
                    Want to run marketing campaigns and develop social media management skills? To
                    create eye-catching designs and digital visuals? Unlock the door to you creative
                    potential and make your ideas come to life!
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className={cdStyle}>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + '/development-department.png'}
                  className="imageSized"
                />
                <Card.Body>
                  <Card.Title>Development</Card.Title>
                  <Card.Text>
                    Practive and perfect your programming skils! Take part in external real-world
                    projects, work with the best professionals and grow your arsenal of tech
                    abilities!
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className={cdStyle}>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + '/logistics-department.png'}
                  className="imageSized"
                />
                <Card.Body>
                  <Card.Title>Logistics</Card.Title>
                  <Card.Text>
                    Precision, Preparation, Planning! Learn how to pull off the impossible and more:
                    logistics of on-campus events, fieldtrips, people management, Team Buildings!
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
