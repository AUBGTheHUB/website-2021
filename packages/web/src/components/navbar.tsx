import React from 'react';
import { Container, Nav, Navbar, NavItem, Dropdown, NavDropdown, Image } from 'react-bootstrap';
import HubLogo from './/resized_hub_logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Image src={HubLogo} width="70px" className="img-fluid"></Image>
          <Navbar.Brand className="el-5" href="#home">
            THE HUB AUBG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#hackaubg4">HackAUBG 4.0</Nav.Link>
              <Nav.Link eventKey={2} href="#Careers">
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
