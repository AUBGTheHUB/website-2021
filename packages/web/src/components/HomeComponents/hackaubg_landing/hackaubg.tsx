import React from 'react';
import { Navbar, Container, Nav, Image, Button, Card } from 'react-bootstrap';
import HubLogo from './hub_logo.svg';
import './hackAUBG.css';
import { GoLocation } from 'react-icons/go';
import { useMediaQuery } from 'react-responsive';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai';
const HackAUBG = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const bgStyle = isMobile ? 'dark' : 'transparent';
  document.title = 'HackAUBG 4.0';
  return (
    <div className="all">
      <div className="landing">
        <Navbar collapseOnSelect expand="xl" bg={bgStyle} variant="dark" className="navbar">
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
                <Nav.Link href="#FAQ" className="link-text">
                  FAQ
                </Nav.Link>
                <Button className="displayNone" href="register">
                  Register
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="textBody">
          <h1 className="textHead">HackAUBG 4.0</h1>
          <p className="textDate">April 1st-3rd, 2022</p>
          <p className="textDesc">Programming Hackathon in English</p>
          <p className="textReg">Registration is closed!</p>
          <Button className="displayNone" href="/register">
            Register
          </Button>
        </div>
      </div>
      <div className="aboutHack" id="AboutHack">
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
              How to participate in HackAUBG, On Ground Programming Hackathon - HackAUBG 4.0
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
                competition.
              </p>
            </div>
            <Image className="fsImage" src="/Teammates.png"></Image>
          </div>
          <div className="secondStep">
            <Image className="ssImage" src="/email.png"></Image>
            <div className="smSS">
              <p className="SSH">STEP 002</p>
              <p className="PutTogether">Meet The Hub and Prepare</p>
              <p className="FSHText">
                Right after you click the 'Register' button you'll get an email confirming your
                place. Then in the following 48 hours, you will receive another email from us
                introducing you to your team facilitator - a member of The Hub who will guide and
                assist you through everything HackAUBG 4.0. Pro tip: take a few days to research
                some hackathon strategies, after all, you don't want to be unprepared for your
                chance to bring home the prize of 3000 BGN!
              </p>
            </div>
          </div>
          <div className="thirdStep">
            <div className="smTS">
              <p className="TSH">STEP 003</p>
              <p className="PutTogether">Get Hackathoning!</p>
              <p className="FSHText">
                HackAUBG 4.0 starts on Friday, April 1st. This edition of the hackathon is back to
                being fully on-ground. This means that we will be expecting you in person at the
                opening ceremony. Be sure to make arrangements for your stay in Blagoevgrad if you
                are not currently located here. You can always turn to your facilitator and we will
                be happy to help you arrange your stay. Check out the schedule below for all the
                details. Your facilitator will be checking in with you to make sure you have access
                to everything you need. Once the theme is announced, give it all you've got to
                develop, design, and strategize the most amazing software solution!{' '}
              </p>
            </div>
            <Image className="tsImage" src="Teamwork.png"></Image>
          </div>
          <div className="fourthStep">
            <Image className="frImage" src="Presentation.png"></Image>
            <div className="smFRS">
              <p className="FRH">STEP 004</p>
              <p className="PutTogether">Present and Win</p>
              <p className="FRHText">
                This is the home stretch! You've put in the work and now need to blow the judges
                away! Your task consists of a pretty straightforward Product Presentation, Software
                Demo, and Q&A session with the judge panel. Check out the links below to see some of
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
            <h2>
              <em>More info on HackAUBG 4.0 TBA!</em>
            </h2>

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
            <div className="schedImageHolder">
              <div className="tableOne">
                <h3>Friday</h3>
                <table id="customers">
                  <tr>
                    <td>5:00 PM</td>
                    <td>Registration and Networking</td>
                  </tr>
                  <tr className="trTable">
                    <td>7 PM</td>
                    <td>Opening Ceremony</td>
                  </tr>
                  <tr className="trTable">
                    <td>8:30 PM</td>
                    <td>Brainstorming</td>
                  </tr>
                  <tr className="trTable">
                    <td>9:30 PM</td>
                    <td>Pitching</td>
                  </tr>
                  <tr>
                    <td>10:00 PM</td>
                    <td>Start</td>
                  </tr>
                </table>
              </div>

              <div className="tableTwo">
                <h3 className="schedHeaderText">Schedule</h3>
                <h3>Saturday</h3>
                <table id="customers">
                  <tr>
                    <td>9:30 AM</td>
                    <td>Breakfast</td>
                  </tr>
                  <tr className="trTable">
                    <td>11:00 AM</td>

                    <td>Mentor meeting</td>
                  </tr>

                  <tr className="trTable">
                    <td>11:30 AM</td>
                    <td>Mentorship start</td>
                  </tr>
                  <tr className="trTable">
                    <td>1:00 PM</td>
                    <td>Lunch and HR sessions</td>
                  </tr>
                  <tr className="trTable">
                    <td>2:00 PM</td>
                    <td>Mentorship+Coding</td>
                  </tr>
                  <tr className="trTable">
                    <td>7:00 PM</td>
                    <td>Dinner</td>
                  </tr>
                  <tr className="trTable">
                    <td>8:00 PM</td>
                    <td>Coding</td>
                  </tr>
                  <tr>
                    <td>12:00 AM</td>
                    <td>Energizer Activity</td>
                  </tr>
                </table>
              </div>
              <div className="tableThree">
                <h3>Sunday</h3>
                <table id="customers">
                  <tr>
                    <td>9:30 AM</td>
                    <td>Breakfast</td>
                  </tr>
                  <tr className="trTable">
                    <td>10:30 AM</td>
                    <td>Coding</td>
                  </tr>
                  <tr className="trTable">
                    <td>1:00 PM</td>
                    <td>Presentation, Submission Deadline</td>
                  </tr>
                  <tr className="trTable">
                    <td>1:00 PM</td>
                    <td>Lunch</td>
                  </tr>
                  <tr className="trTable">
                    <td>2:00 PM</td>
                    <td>Presentations Begin</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>Award Ceremony</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="mentorsSection" id="Mentors">
            <h3 className="mentorsText">Mentors</h3>
            <div className="mentorsDiv">
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src="andom mitev.png"
                  className="mentorImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057064861020472'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src="Andri ivanov.png"
                  className="mentorImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057064851020473'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src="borislav.png"
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065054353786'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src="dimitar glavnikov.png"
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065004353791'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src="dimitar Mitkov.png"
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065051020453'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src={'/gavril.png'}
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065197687105'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src={'/Iskren dimov.png'}
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065241020434'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src={'/georgi ganchev.png'}
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065227687102'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src={'/MArtin.png'}
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057065351020423'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="mentorCard">
                <Card.Img
                  variant="top"
                  src={'/anton GavrAilov.png'}
                  className="mentorImage"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057068217686803/5057133851013573'
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Card>
            </div>
          </div>
          <div className="judgesHolder" id="Judges">
            <h3 className="judgesHeaderText">Judges</h3>
            <div className="judgesDiv">
              <Card style={{ width: '15rem' }} className="judgesCard">
                <Card.Img
                  variant="top"
                  src={'/Monova.png'}
                  className="judgesImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057597960967162/5057589710967987'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="judgesCard">
                <Card.Img
                  variant="top"
                  src={'/stoilov.png'}
                  className="judgesImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057597960967162/5057589640967994'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="judgesCard">
                <Card.Img
                  variant="top"
                  src={'/marinova.png'}
                  className="judgesImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057597960967162/5057589644301327'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="judgesCard">
                <Card.Img
                  variant="top"
                  src={'/Malchev.png'}
                  className="judgesImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057597960967162/5057589637634661'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <Card style={{ width: '15rem' }} className="judgesCard">
                <Card.Img
                  variant="top"
                  src={'/kumanov.png'}
                  className="judgesImage"
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/TheHubAUBG/photos/pcb.5057597960967162/5057589634301328'
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
            </div>
          </div>
          <div className="scheduleDiv">
            <h3 className="schedHeaderText">Grading Criteria</h3>
            <div className="schedImageHolder">
              <div className="tableTwo">
                <table id="customers">
                  <tr>
                    <td>
                      <strong>Complexity of the project (20 points)</strong>
                    </td>
                    <td>
                      <strong>Project Realization (10 points)</strong>
                    </td>
                    <td>
                      <strong>Project Idea (10 points)</strong>
                    </td>
                    <td>
                      <strong>Presentation (10 points)</strong>
                    </td>
                  </tr>
                  <tr className="trTable">
                    <td>Scale (6p)</td>
                    <td>Completeness (10p)</td>
                    <td>Originality (4p)</td>
                    <td>Demo (5p for Live, 3p for just Code)</td>
                  </tr>
                  <tr className="trTable">
                    <td>Project Interface Design (3p)</td>
                    <td></td>
                    <td>Market Research (3p)</td>
                    <td>Handling criticism (2p)</td>
                  </tr>
                  <tr className="trTable">
                    <td>Relevance and simplicity (8p)</td>
                    <td></td>
                    <td>Profitability (3p)</td>
                    <td>Clarity (3p)</td>
                  </tr>
                  <tr>
                    <td>Scalability (3p)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="awardSection">
          <h3 className="awardsText">Awards</h3>
          <div className="awardHolderImages">
            <Image className="awdImageSecond" src="second.png"></Image>
            <Image className="awdImageFirst" src="first.png"></Image>
            <Image className="awdImageThird" src="third.png"></Image>
          </div>
          <p className="muchMoreText">And much more!</p>
          <p className="additionalMuchMoreText">Take part in the games we have prepared!</p>
          <p className="additionalMuchMoreText">
            All participants will receive giftbags with swag from The Hub and HackAUBG 4.0 partners!
          </p>
        </div>

        <div className="sponsorsSection" id="Partners">
          <h3 className="partnersText">Sponsors</h3>
          <div className="partnersHolders">
            <Image className="partnersImages" src="/comp_logos/amplify.png"></Image>
            <Image className="dro" src="/comp_logos/droxic.png"></Image>
            <Image className="partnersImages" src="/comp_logos/paysafe.png"></Image>
            <Image className="partnersImages" src="/comp_logos/vmware.png"></Image>
            <Image className="partnersImages" src="/comp_logos/creative_assembly.png"></Image>
            <Image className="partnersImages" src="/comp_logos/progress.png"></Image>
            <Image className="partnersImages" src="/comp_logos/chaos.png"></Image>
            <Image className="partnersImages" src="/comp_logos/uber_gold.png"></Image>
            {/** bronze */}
            <Image className="partnersImages" src="/comp_logos/postbank.png"></Image>
            <Image className="partnersImages" src="/comp_logos/roiti.png"></Image>
            <Image className="partnersImages" src="/comp_logos/mentormate.png"></Image>
            <Image className="partnersImages" src="/comp_logos/axway.png"></Image>
            <Image className="partnersImages" src="/comp_logos/out2bound.png"></Image>
            <Image className="partnersImages" src="/comp_logos/weband.png"></Image>
            <Image className="partnersImages" src="/comp_logos/weichain.png"></Image>
            <Image className="partnersImages" src="/comp_logos/musalasoft.png"></Image>
            <Image className="partnersImages" src="/comp_logos/bianor.png"></Image>
            <Image className="partnersImages" src="/comp_logos/superhosting.png"></Image>
          </div>
          {/* <div className="sponsorsHolders">
            <h3 className="sponsorsText">Partners</h3>
            <Image className="partnersImages" src={'/uber.png'}></Image>
            <Image className="partnersImages" src={'/uber.png'}></Image>
            <Image className="partnersImages" src={'/uber.png'}></Image>
            <Image className="partnersImages" src={'/uber.png'}></Image>
          </div> */}
        </div>
        <div className="FAQ" id="FAQ">
          <h3 className="faqTextHeader">FAQ</h3>
          <div className="faqGroup">
            <div className="qs">
              <h3>What is the deadline for registering?</h3>
              <p>Registration is open until Friday, March 25th.</p>
            </div>
            <div className="qs">
              <h3>Can I register without a team?</h3>
              <p>
                Yes! If your alone or if you have only 1 teammate you can register and a facilitator
                from the Hub organizing team will help you in finding more teammates. The wisest
                team-combo would be a developer or two, a designer, and one or two business
                planners.
              </p>
            </div>
            <div className="qs">
              <h3>Can I start developing something in advance?</h3>
              <p>
                We would advise you not to begin developing anything, since the theme is what
                matters most when you decide on the project. However, you can definitely research
                winning projects from other hackathons and practice brainstorming and developing
                with your team.
              </p>
            </div>
            <div className="qs">
              <h3>Is there a theme for this hackathon?</h3>
              <p>
                Yes! However, the HackAUBG format requires that the theme is kept a secret until the
                Opening Ceremony on Friday.
              </p>
            </div>
            <div className="qs">
              <h3>
                Will there be a communication board where I can ask questions during the event?
              </h3>
              <p>
                Yes, indeed! It will be in the form of a private Facebook group for all the
                registered participants. We'll send you a link with your registration confirmation
                email.
              </p>
            </div>
            <div className="qs">
              <h3>Is there a specific technology I need to use for my project?</h3>
              <p>
                None at all. Although, the judges do reward the projects with more modern
                tech-stacks a bit higher usually. But, most importantly, remember to focus on the
                execution!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hubFooter">
        <div className="ContactUs" id="ContactUs">
          <div className="iconsContacts">
            <div className="icons">
              <p>
                <AiOutlinePhone /> Phone:{' '}
              </p>
              <p>
                <AiOutlineMail /> Mail:{' '}
              </p>
              <p>
                <GoLocation /> Address:{' '}
              </p>
            </div>
            <div className="iconsMin">
              <a href="tel:+359892963652">
                <AiOutlinePhone className="minIcons" />
              </a>
              <a href="mailto:thehubaubg@gmail.com">
                <AiOutlineMail className="minIcons" />
              </a>
              <a href="https://www.google.com/maps/place/ul.+%22Svoboda+Bachvarova%22+12,+2700+Southern+Industrial+Zone,+Blagoevgrad/@42.0119036,23.0925089,17z/data=!3m1!4b1!4m5!3m4!1s0x14aaf5ff8c1a6fed:0x2c05f64204be56a2!8m2!3d42.0119036!4d23.0946976">
                <GoLocation className="minIcons" />
              </a>
            </div>
            <div className="data">
              <p>
                <a href="tel:+359892963652" className="linkStyle">
                  +359 89 2963652
                </a>
              </p>
              <p>
                <a href="mailto:thehubaubg@gmail.com" className="linkStyle">
                  thehubaubg@gmail.com
                </a>
              </p>
              <p>Svoboda Bachvarova 12, Blagoevgrad</p>
            </div>
          </div>
          <div className="Socials">
            <p>
              <a href="https://www.facebook.com/TheHubAUBG">
                <AiOutlineFacebook className="socialLogos" />
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/thehubaubg/?hl=en./">
                <AiOutlineInstagram className="socialLogos" />
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/company/the-hub-aubg/">
                <AiOutlineLinkedin className="socialLogos"></AiOutlineLinkedin>
              </a>
            </p>
          </div>
        </div>

        <div className="trademark">
          <p className="removeMargin">© The Hub AUBG 2021</p>
        </div>
      </div>
    </div>
  );
};

export default HackAUBG;
