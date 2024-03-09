import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center" >
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spouse" className="spoon__img" />
        <p className="p__opensans">Embark on a culinary journey with us at ssange. We are more than just a dining experience; we are a celebration of flavors, passion, and creativity. Our chefs bring together the finest ingredients to create dishes that tell a story on your plate. From the warmth of our hospitality to the artistry in our presentation, we invite you to be a part of our gastronomic adventure. Discover the essence of ssange, where every meal is a symphony of taste and every moment is a celebration of culinary artistry.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

     
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spouse" className="spoon__img" />
        <p className="p__opensans">At ssange, our history is as rich and diverse as the flavors we serve. It all began with a vision to redefine dining, to create an oasis where food is not just sustenance but an experience. Over the years, we have evolved, innovated, and embraced the changing culinary landscape. From humble beginnings to becoming a beacon of gastronomic excellence, our journey is a testament to our commitment to quality and creativity. Join us as we continue to script the chapters of our culinary legacy, inviting you to be a part of the story that is ssange.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
