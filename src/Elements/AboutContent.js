import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutContentStyles.css";
 import react1 from "../Assets/react1.jpg";
import react2 from "../Assets/react2.webp";

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react front end developer. I ceate responsive secure websites.</p>
            <Link to="/contact">
                <button className='btn'>CONTACT</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} alt="Not Available" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={react2} alt="Not Available" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent