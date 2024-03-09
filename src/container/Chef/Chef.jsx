import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__wrapper section_padding">
    <div className="app__wrapper_img app__wrapper_img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">At ssange, our philosophy is simple yet profound – to elevate the dining experience through a harmonious blend of creativity, precision, and a deep appreciation for the culinary arts.</p>
        </div>
        <p className="p__opensans">Our belief extends beyond the kitchen, it encompasses a dedication to creating moments of delight, forging connections through food, and setting the stage for unforgettable dining memories. Join us in celebrating the essence of what we believe in, as we invite you to savor not just a meal, but an experience at ssange.</p>
      </div>

      <div className="app__chef-sign">
        <p>Mimo Banks</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
