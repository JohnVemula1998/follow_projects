import React from 'react';
import Footer from '../Elements/Footer'
import Form from '../Elements/Form';
import HeroImg2 from '../Elements/HeroImg2';
import Navbar from '../Elements/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 head = "CONTACT." text = "Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;