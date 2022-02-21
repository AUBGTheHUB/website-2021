import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './marketingTeam.css';

const PRTeam = () => {
  return (
    <div className="initialHolder">
      <h1 className="headerText">Public Relations Team</h1>
      <div className="holder">
        <Card style={{ width: '18rem' }} className="cards">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'krisi.png'} className="imageTag" />
          <Card.Body>
            <Card.Title>Krisi</Card.Title>
            <Card.Text>
              Our beloved president of THE HUB and miracle maker .. random words , fuck yeah , let's
              go to Under!!!!
            </Card.Text>
            <Button
              className="socialButton"
              href="https://www.linkedin.com/in/kristina-borisova-447293142/"
            >
              Find on LinkedIn
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PRTeam;
