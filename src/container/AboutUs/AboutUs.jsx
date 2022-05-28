import React from 'react';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about flex__center">
        <h1 className="headtext__cormorant" id='aboutheader'>About Us</h1>
        <img src={images.spoon} id='aboutheader' alt="about__spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro error eveniet fugiat incidunt qui corporis modi natus quia odit repudiandae?</p>
        <button className="custom__button" id='aboutheader' type='button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife Image" />
      </div>

      <div className="app__aboutus-content_history flex__center">
        <h1 className="headtext__cormorant" id='historyheader'>Our History</h1>
        <img src={images.spoon} id='historyheader' alt="about__spoon" className='spoon__img_2' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro error eveniet fugiat incidunt qui corporis modi natus quia odit repudiandae?</p>
        <button className="custom__button" id='historyheader' type='button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
