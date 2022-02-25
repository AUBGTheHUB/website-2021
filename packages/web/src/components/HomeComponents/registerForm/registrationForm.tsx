import React from 'react';
import './registerForm.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const RegistrationForm = () => {
  const [teamBlock, setTeamBlock] = useState('notVisible');
  const [hackPart, setHackPart] = useState('notVisible');
  const [expLevel, setExpLevel] = useState('notVisible');

  return (
    <div className="RegistrationHolder">
      <div className="regForm">
        <h1 className="headerTextHackBG">Hackathon Registration Form</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Text className="text-muted">
              Registrations with emails which already exist in our system won't be accepted!
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="haveTeam">
            <Form.Label>Do you have a team?</Form.Label>
            <Form.Switch
              onClick={() => {
                if (teamBlock == 'notVisible') {
                  setTeamBlock('isVisible');
                } else {
                  setTeamBlock('notVisible');
                }
                console.log(teamBlock);
              }}
            ></Form.Switch>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamName">
            <Form.Label className={teamBlock}>Team Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your team's name"
              className={teamBlock}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter your age"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getLocation">
            <Form.Label>Where are you from?</Form.Label>
            <Form.Control type="text" placeholder="Town, Country"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getSchool">
            <Form.Label>Where do you study?</Form.Label>
            <Form.Control type="text" placeholder="Enter your school or university"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getSource">
            <Form.Label>How did you here about us?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Facebook, LinkedIn, from friends, from university ..."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getParticipation">
            <Form.Label>Have you participated in hackathons before?</Form.Label>
            <Form.Switch
              onClick={() => {
                if (hackPart == 'notVisible') {
                  setHackPart('visible');
                } else {
                  setHackPart('notVisible');
                }
              }}
            ></Form.Switch>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getHackathons">
            <Form.Label className={hackPart}>Hackathons</Form.Label>
            <Form.Control
              className={hackPart}
              type="text"
              placeholder="Enter the hackathonGs you have attended"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Switch
              onClick={() => {
                if (expLevel == 'notVisible') {
                  setExpLevel('visible');
                } else {
                  setExpLevel('notVisible');
                }
              }}
            ></Form.Switch>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getProgrammingLevel">
            <Form.Label className={expLevel}>Programming Level</Form.Label>
            <Form.Select aria-label="Default select example" className={expLevel}>
              <option>Choose from here</option>
              <option value="1">1 year</option>
              <option value="2">1-3 years</option>
              <option value="3">3+ years</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getStrongestSide">
            <Form.Label>What are your strong sides?</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Programming, Design, Presenting, Marketing e.t.c."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getSize">
            <Form.Label className="padRightABit">T-shirt size: </Form.Label>
            <Form.Check
              inline
              label="S"
              type="radio"
              name="group1"
              id="inline-radio-3"
            ></Form.Check>
            <Form.Check
              inline
              label="M"
              type="radio"
              name="group1"
              id="inline-radio-3"
            ></Form.Check>
            <Form.Check
              inline
              label="L"
              type="radio"
              name="group1"
              id="inline-radio-3"
            ></Form.Check>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getIntern">
            <Form.Label>Are you looking for an internship?</Form.Label>
            <Form.Switch></Form.Switch>
          </Form.Group>
          <Form.Group className="md-3" controlId="getJobInterest">
            <Form.Label>What are your job interests?</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Front-end, Back-end, Blockchain technologies e.t.c."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="md-3" controlId="getConsent">
            <Form.Label>Do you mind sharing this information with our sponsors?</Form.Label>
            <Form.Switch></Form.Switch>
          </Form.Group>
          <Form.Group className="md-3" controlId="getNewsletter">
            <Form.Label>
              After the event we will be sharing a newsletter with a potential job oppenings. Do you
              mind sending you information?
            </Form.Label>
            <Form.Switch></Form.Switch>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
