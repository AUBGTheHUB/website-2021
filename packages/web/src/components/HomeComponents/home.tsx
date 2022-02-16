import React from 'react';
import { Image, Button } from 'react-bootstrap';
import Navigation from './navbar';
import './home.css';
import TextBody from './homeTextBody';
import Hubzie from './hubzie-the-hub.png';
import Particles from 'react-tsparticles';
import { useMediaQuery } from 'react-responsive';
import { GoLocation } from 'react-icons/go';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const particlesSize = isMobile ? 20 : 55;

  return (
    <div className="all">
      <div className="background_image">
        <Particles
          params={{
            fpsLimit: 60,
            particles: {
              color: {
                value: '#000'
              },
              number: {
                value: particlesSize
              },
              links: {
                enable: true,
                color: '#000',
                distance: 150
              },
              move: {
                enable: true
              }
            }
          }}
        />
        <Navigation></Navigation>
        <TextBody></TextBody>
        <Image src={Hubzie} className="hubzie"></Image>
      </div>
      <div id="about" className="aboutPage">
        <div className="aboutUsPage">
          <h3>About Us</h3>
          <p>
            We are a community of young and ambitious students with an interest in software
            development, engineering, design and technology. Our belief is that getting together
            with like-minded individuals to exchange experience and ideas is the key ingredient
            needed to ignite innovation and entrepreneurship into the minds and hearts of fellow
            enthusiasts. This is what truly motivates us to get together, organize events and bring
            change.
          </p>
          <p>
            Read more below about our departments! Or meet us in person at our headquarters @ASPIRE
            located on the first floor of the ABF Building on the AUBG Campus in Blagoevgrad!
          </p>
        </div>
        <div className="aboutEventsPage">
          <h3>Events</h3>
          <p>
            So what do we do when we are not on team-buildings? Our most famous event is the annual
            programming hackathon HackAUBG, which started way back in 2016 as HackBlagoevgrad and
            has become a staple of AUBG! We are even continuing it during the pandemic in online
            format!
          </p>
          <p>
            We also organize multiple workshops, lectures and presentations during the school year.
            Check out posters from our past events below! Aside from series of talks on hot IT and
            business topics we also try to fit in a fieldtrip or two to the Sofia offices of our
            partner companies.
          </p>
          <p>Send us your tech event wish-list and we will make it happen!</p>
          <Button variant="primary" size="sm">
            Check out our upcoming events!
          </Button>
        </div>
        <div className="hubFooter">
          <div className="ContactUs">
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
              <div className="data">
                <p>
                  <a href="tel:+359 878 766 981" className="linkStyle">
                    +359 878 766 981
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
                <a href="./">
                  <AiOutlineFacebook className="socialLogos" />
                </a>
              </p>
              <p>
                <a href="./">
                  <AiOutlineInstagram className="socialLogos" />
                </a>
              </p>
              <p>
                <a href="./">
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
    </div>
  );
};

export default Home;
