import React from 'react';
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import HubLogo from './hub_logo.svg';
import './hackAUBG.css';
const HackAUBG = () => {
  return (
    <div className="all">
      <div className="landing">
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className="navbar">
          <Container>
            <Image src={HubLogo} width="50px" className="paddedLeft"></Image>
            <Navbar.Brand className="el-5" href="/">
              THE HUB AUBG
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#AboutHack" className="link-text">
                  About
                </Nav.Link>
                <Nav.Link href="#Mentors" className="link-text">
                  Mentors
                </Nav.Link>
                <Nav.Link href="#Judges" className="link-text">
                  Judges
                </Nav.Link>
                <Nav.Link href="#Partners" className="link-text">
                  Partners
                </Nav.Link>
                <Nav.Link href="#Theme" className="link-text">
                  Theme
                </Nav.Link>
                <Nav.Link href="#FAQ" className="link-text">
                  FAQ
                </Nav.Link>
                <Nav.Link href="#ContactUs" className="link-text">
                  Contact Us
                </Nav.Link>
                <Button className="registerButton">Register</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="textBody">
          <h1 className="textHead">HackAUBG 4.0</h1>
          <p className="textDate">April 1st-3rd, 2022</p>
          <p className="textDesc">Online Programming Hackathon in English</p>
          <p className="textReg">Registration is now open!</p>
        </div>
      </div>
      <div className="aboutHack">
        <h1 className="aboutHeader">About HackAUBG 4.0</h1>
        <div className="aboutText">
          <p>
            HackAUBG is a 3-day-long programming hackathon organized by The Hub AUBG. 10 teams of
            university and high-school students will have 48 hours to create an IT solution and
            profitable product along a common social theme, i.e. Digital Wellbeing, Environmental
            Sustainability, etc. Of course, the theme is kept secret until the beginning of the
            competition! There is no limit to the technologies the teams can use in development and
            many take advantage of the mentors and their knowledge of cutting-edge practices to give
            something new and exciting a try!
          </p>
          <p>
            Yes! The teams are not alone in their journey! Mentors - IT professionals from Bulgaria
            who specialize in a wide range of technologies, are there to help the teams develop,
            design, and create business plans for their projects! Last, but not least, is the
            product presentation and software demo in front of the judges panel, where the teams get
            to wow the audience and show the potential of their creativity and the fruits of their
            labor.
          </p>
        </div>
        <div className="hackJourney">
          <div className="howToParticipateHeader">
            <h3 className="journeyh3">The HackAUBG Journey</h3>
            <p className="journeyp">
              How to participate in HackAUBG Online Programming Hackathon - HackAUBG 4.0
            </p>
          </div>
          <div className="firstStep">
            <div className="smFS">
              <p className="FSH">STEP 001</p>
              <p className="PutTogether">Put Together a Team and Register</p>
              <p className="FSHText">
                Get together with some fellow enthusiasts and register in the form below! Teams must
                be between 3 and 6 people. However, if you have less, the Hub team will help you
                link up with other hackers waiting to participate. If the number of registered teams
                becomes larger than 10, your team will be waitlisted until the last week before the
                competition.{' '}
              </p>
            </div>
            <Image className="fsImage" src={process.env.PUBLIC_URL + '/Teammates.png'}></Image>
          </div>
          <div className="secondStep">
            <Image className="ssImage" src={process.env.PUBLIC_URL + '/email.png'}></Image>
            <div className="smSS">
              <p className="SSH">STEP 002</p>
              <p className="PutTogether">Meet The Hub and Prepare</p>
              <p className="FSHText">
                Right after you click the 'Register' button youll get an email confirming your
                place. Then in the following 48 hours you will receive another email from us
                introducing you to your team facilitator – a member of The Hub who will guide and
                assist you through everything HackAUBG 3.0. Pro tip: take a few days to research
                some hackathon strategies, after all, you don’t want to be unprepared for you chance
                to bring home the prize of 2250 BGN!
              </p>
            </div>
          </div>
          <div className="thirdStep">
            <div className="smTS">
              <p className="TSH">STEP 003</p>
              <p className="PutTogether">Get Hackathoning!</p>
              <p className="FSHText">
                HackAUBG 3.0 starts on Friday, 26th of February. Since this edition of the hackathon
                is online, you need to secure a stable online connection and login to the Zoom
                Opening Ceremony! Each team member needs to be connected, or if you have gathered to
                code together, let us know in advance! Check out the Schedule below for all the
                details. Your facilitator will be checking in with you to make sure you have access
                to everything you need. Once the theme is announced, give it all you’ve got to
                develop, design, and strategize the most amazing software solution!{' '}
              </p>
            </div>
            <Image className="tsImage" src={process.env.PUBLIC_URL + 'Teamwork.png'}></Image>
          </div>
          <div className="fourthStep">
            <Image className="frImage" src={process.env.PUBLIC_URL + 'Presentation.png'}></Image>
            <div className="smFRS">
              <p className="FRH">STEP 004</p>
              <p className="PutTogether">Present and Win</p>
              <p className="FRHText">
                The is the home-stretch! You’ve put in the work and now need to blow the judges
                away! Your task consists of a pretty straight-forward Product Presentation, Software
                Demo and QA session with the judge panel. Check out the links below to see some of
                our tips and guides to creating the best project and giving an awesome presentation!
                Also, find below the Grading Criteria that the judges will use to determine the
                winners.
              </p>
            </div>
          </div>
          <div className="videoRecap">
            <h3 className="videoHeader">Check out the HackAUBG 2.0 Recap:</h3>
            <iframe
              className="video"
              src="https://www.youtube.com/embed/eqcWWrKQniE"
              title="HackAUBG 2.0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="usefulLinks">
            <div className="linksPart">
              <h3 className="usefulHeader">Useful Links for Participant Teams</h3>
              <div className="usefulButtons">
                <Button color="primary" className="butUL">
                  INFO BOOKLET
                </Button>
                <Button color="primary" className="butUL">
                  CLOSED MENTORSHIP SLOTS
                </Button>
                <Button color="primary" className="butUL">
                  DETAILS MENTORS
                </Button>
              </div>
            </div>
          </div>
          <div className="scheduleDiv">
            <h3 className="schedHeaderText">Schedule</h3>
            <div className="schedImageHolder">
              <Image className="schedImage" src={process.env.PUBLIC_URL + 'friday.png'}></Image>
              <Image className="schedImage" src={process.env.PUBLIC_URL + 'saturday.png'}></Image>
              <Image className="schedImage" src={process.env.PUBLIC_URL + 'sunday.png'}></Image>
            </div>
          </div>
        </div>
        <div className="awardSection">
          <h3 className="awardsText">Awards</h3>

          <Image className="awardsImage" src={process.env.PUBLIC_URL + 'awards.png'}></Image>
          <p className="muchMoreText">And much more!</p>
          <p className="additionalMuchMoreText">Take part in the games we have prepared!</p>
          <p className="additionalMuchMoreText">
            All participants will receive giftbags with swag from The Hub and HackAUBG 4.0 partners!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackAUBG;
