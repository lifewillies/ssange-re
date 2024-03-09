import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    

    <div className="app__wrapper_img">
     <img src={images.welcome} alt="header img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>Indulge in a culinary journey where every bite tells a story of passion and innovation. Our chefs meticulously craft each dish, weaving together flavors that dance on your palate. From the sizzling spices to the delicate notes, we redefine fine dining, making every meal an experience. Join us in embracing the extraordinary, where every dish is a masterpiece, and every moment is an adventure into the world of exquisite taste.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

  </div>
);

export default Header;
