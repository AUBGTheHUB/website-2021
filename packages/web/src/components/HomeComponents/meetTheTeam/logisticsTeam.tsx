import React from 'react';
import { Card, Button, Navbar, Container } from 'react-bootstrap';
import './marketingTeam.css';

const LogisticsTeam = () => {
  return (
    <div className="allallall">
      <Navbar className="navTeams" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="textWhite">
            Go Back
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="textWhite">
              Signed in as: <a>Logistics</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="initialHolder">
        <div className="holder">
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Kaloyan.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Kaloyan - Head</Card.Title>

              <Button className="disabledButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Gabi.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Gabriela</Card.Title>
              <Button className="disabledButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Mira.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Mira</Card.Title>
              <Button className="disabledButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Zdravko.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Zdravko</Card.Title>
              <Button className="disabledButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Teodora.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Teodora</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/teodora-miteva-34112a223/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Plamen.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Plamen</Card.Title>
              <Button className="disabledButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogisticsTeam;
