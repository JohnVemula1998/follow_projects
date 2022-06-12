import React from 'react';
import AboutContent from '../Elements/AboutContent';
import Footer from '../Elements/Footer'
import HeroImg2 from '../Elements/HeroImg2';
import Navbar from '../Elements/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 head = "ABOUT." text = "I'm a creative Front-End developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About