import React from 'react';
import { Card, Button, Navbar, Container } from 'react-bootstrap';
import './marketingTeam.css';

const PRTeam = () => {
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
              Signed in as: <a>Public Relations</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="initialHolder">
        <div className="holder">
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Marie.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Marie - Head</Card.Title>

              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/marie-goygadjieva-a280321b0/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/krisi.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Krisi - President</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/kristina-borisova-447293142/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Ivan Asen.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Ivan-Asen</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/ivan-enchev-79a5a91aa/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Diana.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Diana</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/diana-materova-429595201/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Boyanna.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Boyana</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/boyana-chopeva-5866011b0/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Christiyana.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Kristiyana</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/kristiyana-gavrailova-605590212/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Mariela.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Mariela</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/mariela-nikolova/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Tihomir.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Tihomir</Card.Title>
              <Button className="socialButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PRTeam;
