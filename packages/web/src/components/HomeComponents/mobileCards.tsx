import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './mobileCards.css';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const MobileCards = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const cdStyle = isMobile ? 'parentElement' : 'hiddenParent';
  const [firstCardState, changeFirstCard] = useState('cardHolderTwo');
  const [secondCardState, changeSecondCard] = useState('hidden');
  const [thirdCardState, changeThirdCard] = useState('hidden');
  const [fourthCardState, changeFourthCard] = useState('hidden');

  return (
    <div className={cdStyle}>
      <div className={firstCardState}>
        <Card>
          <Card.Img variant="top" src="/pr-department.png" className="imageSized" />
          <Card.Body>
            <Card.Title>Public Relations</Card.Title>
            <Card.Text>
              The financial powerhouse to all our initiatives! Manage sponsorships with
              international companies and scout for the best collaboration opportunities in and
              outside of AUBG!
            </Card.Text>
            <Button variant="primary">Meet the Talkers</Button>
            <Button
              className="buttonPadding"
              variant="primary"
              onClick={() => {
                changeFirstCard('hidden');
                changeSecondCard('cardHolderTwo');
              }}
            >
              Next Team
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className={secondCardState}>
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
            <Button variant="primary">Meet the Movers</Button>
            <Button
              variant="primary"
              className="buttonPadding"
              onClick={() => {
                changeSecondCard('hidden');
                changeThirdCard('cardHolderTwo');
              }}
            >
              Next Team
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className={thirdCardState}>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/design-community.png'}
            className="imageSized"
          />
          <Card.Body>
            <Card.Title>Marketing</Card.Title>
            <Card.Text>
              Want to run marketing campaigns and develop social media management skills? To create
              eye-catching designs and digital visuals? Unlock the door to you creative potential
              and make your ideas come to life!
            </Card.Text>
            <Button variant="primary">Meet the Market Makers</Button>
            <Button
              className="marketButtonPadding"
              variant="primary"
              onClick={() => {
                changeThirdCard('hidden');
                changeFourthCard('cardHolderTwo');
              }}
            >
              Next team
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className={fourthCardState}>
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
              projects, work with the best professionals and grow your arsenal of tech abilities!
            </Card.Text>
            <Button variant="primary">Meet the Nerds</Button>
            <Button
              variant="primary"
              onClick={() => {
                changeFourthCard('hidden');
                changeFirstCard('cardHolderTwo');
              }}
              className="buttonPadding"
            >
              Next team
            </Button>
          </Card.Body>
        </Card>
      </div>
      ;
    </div>
  );
};

export default MobileCards;
