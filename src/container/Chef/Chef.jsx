import React from 'react';
import { SubHeading } from '../../components'
import { images } from "../../constants";
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef's image" />
    </div>

    <div className="app__wrapper_info">
     
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant' >What We Belive In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
        <p className="p__opensans">Odio velit facilis quidem cumque suscipit deserunt incidunt id aliquam natus quo beatae explicabo, ducimus error perspiciatis rem, officia, obcaecati iure aspernatur!</p>

      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>

    </div>

  </div>
);

export default Chef;
