import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
    return (
        //<div className="app__footer">
        //    <h1>
        //        Hello World!
        //    </h1>
        //</div>
        <div className="app__footer" section__padding >
            <FooterOverlay />
            <Newsletter />

            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans">Tropicana Mall Uyo, Nigeria</p>
                    <p className="p__opensans">+234-8021-2181-38</p>
                </div>
                <div className="app__footer-links_logo">
                    <img src={images.gericht} alt="footer_logo" />
                    <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
                    <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />
                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>
                <div className="app__footer-links_works">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Monday - Friday:</p>
                    <p className="p__opensans">08:00 am -12:00 am</p>
                    <p className="p__opensans">Saturday - Sunday:</p>
                    <p className="p__opensans">07:00 am -11:00 am</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2024 Ssange. All Rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;