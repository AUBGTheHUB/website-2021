import React from 'react';
import { Image } from 'react-bootstrap';
import Navigation from './navbar';
import './home.css';
import TextBody from './homeTextBody';
import Hubzie from './hubzie-the-hub.png';

const Home = () => {
  return (
    <div className="background_image">
      <Navigation></Navigation>
      <TextBody></TextBody>
      <Image src={Hubzie} className="hubzie"></Image>
    </div>
  );
};

export default Home;
