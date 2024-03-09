import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className="app__bg app__findus app__wrapper section__padding" id="contact">

<div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>FInd Us</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">Locating us is the first step towards an extraordinary dining experience at [Your Restaurant Name]. Nestled in the heart of [City], our culinary haven awaits your discovery. Follow the enticing aroma of expertly crafted dishes and find us at [Your Street Address]. Whether you're a local looking for a new favorite spot or a traveler seeking a memorable dining experience, our doors are open. Explore the culinary delights that await you, as you navigate to [Your Restaurant Name]—your destination for exquisite flavors and warm hospitality.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button className="custom__button" style={{ marginTop: '2rem'}}>Visit Us</button>
    </div>

   
  </div>
);

export default FindUs;
