import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './marketingTeam.css';

const MarketingTeam = () => {
  return (
    <div className="initialHolder">
      <h1 className="headerText">Marketing Team</h1>
      <div className="holder">
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Ilian.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Ilian - Head</Card.Title>

            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/ilian-spasse-4370821b9/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'marko.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Marko</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/kristina-borisova-447293142/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Sasho.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Aleksandar</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/kristina-borisova-447293142/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Iren.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Iren</Card.Title>
            <Button className="socialButton" href="https://www.linkedin.com/in/iren-dimitrova/">
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Daria.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Daria</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/daria-naidenova-5360521ab/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + 'tsveti.png'}
            className="imageTag"
          />
          <Card.Body>
            <Card.Title>Tsvetana</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/kristina-borisova-447293142/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Dani.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Daniela</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/daniela-georgieva-40aa5b226/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + 'Hristo.png'}
            className="imageTag"
          />
          <Card.Body>
            <Card.Title>Hristo</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/hristo-hubenov-aa7402191/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + 'elissa.png'}
            className="imageTag"
          />
          <Card.Body>
            <Card.Title>Elisa</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/elisa-nika-571248224/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Boyan.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Boyan</Card.Title>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/kristina-borisova-447293142/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + 'siel (1).png'}
            className="imageTag"
          />
          <Card.Body>
            <Card.Title>Siel</Card.Title>
            <Button className="socialButton" href="https://www.linkedin.com/in/siel-rien/">
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MarketingTeam;
