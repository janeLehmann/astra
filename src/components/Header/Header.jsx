import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import IconLogo from '../../static/assets/logo.svg';
import IconWand from '../../static/assets/magic-wand.svg';

import './Header.scss';

const Header = ({ setMagic, magic, setIsMenuOpen, isMagic }) => {
  return (
    <div
      className={cx('header', {
        header_light: magic,
        header_border: !isMagic,
      })}
    >
      <div className="header__container">
        <div className="header__left">
          {isMagic ? (
            <button className="header__magic" onClick={setMagic}>
              <IconWand className="header__magic-icon" />
            </button>
          ): (
            <a href="/" className="header__logo">
              <IconLogo className="header__logo-img" />
            </a>
          )}

        </div>

        <button className="header__burger" type="button" onClick={setIsMenuOpen}>
          <span className="header__burger-span" />
          <span className="header__burger-span" />
          <span className="header__burger-span" />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  setMagic: PropTypes.func,
  setIsMenuOpen: PropTypes.func.isRequired,
  magic: PropTypes.bool,
  isMagic: PropTypes.bool,
};

Header.defaultProps = {
  magic: true,
  setMagic: () => {},
  isMagic: false,
};

export default Header;
