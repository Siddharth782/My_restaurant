import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div id='contact' className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper_content">
        <p className="p__opensans"> Mile 6, One Style, 8, Kalka Das Marg, Seth Sarai, Mehrauli, New Delhi, Delhi 110030</p>
        <p className="p__cormorant" style={{color: "#DCCA87", margin: "2rem 0rem"}}>Opening Hours</p>
        <p className="p__opensans"> Monday-Friday: 10:00am - 2:00am</p>
        <p className="p__opensans" style={{ margin: "0.5rem 0rem"}}>Saturday-Sunday: 12:30pm - 1:00am </p>
      </div>
<button className="custom__button" style={{marginTop: "1rem"}}>Visit Us</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs Drinks" />
    </div>
  </div>
);

export default FindUs;
