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

  const options = {
    preset: 'triangles'
  };

  return (
    <div className="all">
      <div className="background_image">
        <Particles
          params={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 45,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#000',
                animation: {
                  enable: true,
                  speed: 10,
                  sync: true
                }
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: 'https://cdn.matteobruni.it/images/particles/github.svg',
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 5,
                  size_min: 1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: 'random',
                opacity: 0.4,
                width: 1,
                triangles: {
                  enable: true,
                  color: '#000',
                  opacity: 0.1
                }
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8
                },
                repulse: {
                  distance: 200
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
          options={options}
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
    </div>
  );
};

export default Home;
