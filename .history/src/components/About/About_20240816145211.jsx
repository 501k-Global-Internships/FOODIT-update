import React from 'react';
import Navbar from '../../layouts/navbar/navbar';
import AboutUs from './AboutUs';
import Menu from './Menu';
import Interface from './Interface';
import Footer from '../../layouts/footer/footer';


const About = () => {
  return (
    <div>
      <Navbar />
        <AboutUs />
        <Menu />
        <Interface />
        <Footer isAboutPage={true} />
    </div>
  )
}

export default About;