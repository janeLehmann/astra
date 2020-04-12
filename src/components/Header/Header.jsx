import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import IconWand from '../../static/assets/magic-wand.svg';

import './Header.scss';

const Header = ({ setMagic, magic }) => {
  return (
    <div
      className={cx('header', {
        header_light: magic,
      })}
    >
      <div className="header__container">
        <div className="header__left">
          <button className="header__magic" onClick={setMagic}>
            <IconWand className="header__magic-icon" />
          </button>
        </div>

        <button className="header__burger">
          <span className="header__burger-span" />
          <span className="header__burger-span" />
          <span className="header__burger-span" />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  setMagic: PropTypes.func.isRequired,
  magic: PropTypes.bool.isRequired,
};

export default Header;
