import React from 'react';

import IconInsta from '../../static/assets/icon-insta.svg';
import IconFb from '../../static/assets/icon-fb.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__copyright">Copyright bla bla bla</p>

        <div className="footer__socials">
          <a href="/" className="footer__socials-item">
            <IconInsta className="footer__socials-item-icon" />
          </a>
          <a href="/" className="footer__socials-item">
            <IconFb className="footer__socials-item-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
