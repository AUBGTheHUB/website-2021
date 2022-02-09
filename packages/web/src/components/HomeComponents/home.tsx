import React from 'react';
import { Image } from 'react-bootstrap';
import Navigation from './navbar';
import './home.css';
import TextBody from './homeTextBody';
import Hubzie from './hubzie-the-hub.png';
import Particles from 'react-tsparticles';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const particlesSize = isMobile ? 20 : 55;
  return (
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
  );
};

export default Home;
