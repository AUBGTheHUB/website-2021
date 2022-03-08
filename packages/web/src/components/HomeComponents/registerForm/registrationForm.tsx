import { SyntheticEvent } from 'react';
import axios from 'axios';
import * as React from 'react';
import './registerForm.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [teamBlock, setTeamBlock] = useState('notVisible');
  const [hackPart, setHackPart] = useState('notVisible');
  const [expLevel, setExpLevel] = useState('notVisible');
  const [jobInterest, setJobInterest] = useState('notVisible');
  const [messageState, setMessageState] = useState('');
  const [messageShowState, setMessageShowState] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    hasTeam: false,
    teamName: '',
    age: 0,
    location: '',
    school: '',
    source: '',
    participatedBefore: false,
    hackathons: '',
    experience: false,
    programmingLevel: '',
    strongestSides: '',
    tSize: '',
    lookingForInternship: false,
    jobInterest: '',
    infoConsent: false,
    jobOffersConsent: false
  });

  const history = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log(target.type);
    // console.log(target.checked);

    setFormState({
      ...formState,
      [name]: value
    });
    // console.log(formState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    axios
      .post('https://hubaubgapi.azurewebsites.net/api/v1/signup', formState)
      .then((res) => {
        console.log(res.status);
        if (res.status == 201) {
          setMessageShowState(true);
          setMessageState('green');
          setTimeout(() => {
            history('/hackaubg');
          }, 3000);
        } else {
          setMessageShowState(true);
          setMessageState('red');
        }
      })
      .catch((err) => {
        console.log(err);
        setMessageShowState(true);
        setMessageState('red');
      });
    console.log(formState);

    event.preventDefault();
  };

  return (
    <div className="RegistrationHolder">
      <div className="regForm">
        <h1 className="headerTextHackBG">Hackathon Registration Form</h1>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted-white">
              Registrations with emails which already exist in our system won't be accepted!
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="haveTeam">
            <Form.Label>Do you have a team?</Form.Label>
            <Form.Switch
              name="hasTeam"
              onChange={handleInputChange}
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
            <Form.Label className={teamBlock}> Name</Form.Label>
            <Form.Control
              name="teamName"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your team's name"
              className={teamBlock}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your age"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getLocation">
            <Form.Label>Where are you from?</Form.Label>
            <Form.Control
              name="location"
              onChange={handleInputChange}
              type="text"
              placeholder="Town, Country"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getSchool">
            <Form.Label>Where do you study?</Form.Label>
            <Form.Control
              name="school"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your school or university"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getSource">
            <Form.Label>How did you hear about us?</Form.Label>
            <Form.Control
              name="source"
              onChange={handleInputChange}
              type="text"
              placeholder="Facebook, LinkedIn, from friends, from university ..."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getParticipation">
            <Form.Label>Have you participated in hackathons before?</Form.Label>
            <Form.Switch
              name="participatedBefore"
              onChange={handleInputChange}
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
              name="hackathons"
              onChange={handleInputChange}
              className={hackPart}
              type="text"
              placeholder="Enter the hackathonGs you have attended"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Switch
              name="experience"
              onChange={handleInputChange}
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
            <Form.Select
              name="programmingLevel"
              onChange={handleInputChange}
              aria-label="Default select example"
              className={expLevel}
            >
              <option>Choose from here</option>
              <option value="1 year">1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3+ years">3+ years</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getStrongestSide">
            <Form.Label>What are your strong sides?</Form.Label>
            <Form.Control
              name="strongestSides"
              onChange={handleInputChange}
              as="textarea"
              rows={2}
              placeholder="Programming, Design, Presenting, Marketing e.t.c."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getSize">
            <Form.Label className="padRightABit">T-shirt size: </Form.Label>
            <Form.Select
              name="tSize"
              onChange={handleInputChange}
              aria-label="Default select example"
            >
              <option>Choose from here</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="getIntern">
            <Form.Label>Are you looking for an internship?</Form.Label>
            <Form.Switch
              name="lookingForInternship"
              onChange={handleInputChange}
              onClick={() => {
                if (jobInterest == 'notVisible') {
                  setJobInterest('isVisible');
                } else {
                  setJobInterest('notVisible');
                }
                console.log(jobInterest);
              }}
            ></Form.Switch>
          </Form.Group>
          <Form.Group className="md-3" controlId="getJobInterest">
            <Form.Label className={jobInterest}>What are your job interests?</Form.Label>
            <Form.Control
              name="jobInterests"
              onChange={handleInputChange}
              as="textarea"
              rows={2}
              placeholder="Front-end, Back-end, Blockchain technologies e.t.c."
              className={jobInterest}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="md-3" controlId="getConsent">
            <Form.Label>Do you mind sharing this information with our sponsors?</Form.Label>
            <Form.Switch name="infoConsent" onChange={handleInputChange}></Form.Switch>
          </Form.Group>
          <Form.Group className="md-3" controlId="getNewsletter">
            <Form.Label>
              After the event we will be sharing a newsletter with a potential job oppenings. Do you
              mind sending you information?
            </Form.Label>
            <Form.Switch name="jobOffersConsent" onChange={handleInputChange}></Form.Switch>
          </Form.Group>
          <Form.Group>
            <Form.Label
              id="signUpMessage"
              style={{ color: messageState }}
              visuallyHidden={!messageShowState}
            >
              {messageState == 'red'
                ? 'Non-valid information or empty input fields!'
                : 'Your registration was successful!'}
            </Form.Label>
          </Form.Group>
          <Button
            type="submit"
            className="buttonReg"
            onClick={() => {
              if (messageState != 'red') {
                setTimeout((e) => {
                  e.preventDefault();
                  window.location.href = 'hackaubg';
                }, 1000);
              }
            }}
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
