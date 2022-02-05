import React from 'react';
import { Container, Image } from 'react-bootstrap';
import HomeBackground from './/admin-ajax.php.png';
import Navigation from './navbar';
import './home.css';

const Home = () => {
  return (
    <div className="background_image">
      <Navigation></Navigation>
    </div>
  );
};

export default Home;
