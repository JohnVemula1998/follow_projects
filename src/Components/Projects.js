import React from 'react';
import Footer from '../Elements/Footer'
import HeroImg2 from '../Elements/HeroImg2';
import Navbar from '../Elements/Navbar'
import Work from '../Elements/Work';



const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 head = "PROJECTS" text = "Some of my most recent Projects"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects