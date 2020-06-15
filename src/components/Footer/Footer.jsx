import React from 'react';
import cx from 'classnames';

import IconInsta from '../../static/assets/icon-insta.svg';
import IconFb from '../../static/assets/icon-fb.svg';

import './Footer.scss';

const Footer = ({isInnerPage}) => {
  return (
    <div className={cx('footer', {
      footer_light: isInnerPage,
    })}>
      <div className="footer__container">
        <p className="footer__copyright" />

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
