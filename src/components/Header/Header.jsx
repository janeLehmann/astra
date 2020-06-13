import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import IconLogo from '../../static/assets/logo.svg';
import IconWand from '../../static/assets/magic-wand.svg';

import './Header.scss';

const Header = ({ setMagic, isInnerPage, setIsMenuOpen, lang, ruClick, engClick }) => {
  return (
    <div
      className={cx('header', {
        header_light: isInnerPage,
        header_border: isInnerPage,
      })}
    >
      <div className="header__container">
        <div className="header__left">
          {!isInnerPage ? (
            <button className="header__magic" onClick={setMagic}>
              <IconWand className="header__magic-icon" />
            </button>
          ) : (
            <a href="/" className="header__logo">
              <IconLogo className="header__logo-img" />
            </a>
          )}
        </div>

        <div className="header__right-part">
          <div className="header__lang">
            <button
              className={cx('header__lang-item', {
                'header__lang-item_active': lang !== 'RU',
              })}
              onClick={engClick}
            >
              ENG
            </button>
            /
            <button
              className={cx('header__lang-item', {
                'header__lang-item_active': lang === 'RU',
              })}
              onClick={ruClick}
            >
              RU
            </button>
          </div>

          <button className="header__burger" type="button" onClick={setIsMenuOpen}>
            <span className="header__burger-span" />
            <span className="header__burger-span" />
            <span className="header__burger-span" />
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setMagic: PropTypes.func,
  setIsMenuOpen: PropTypes.func.isRequired,
  isInnerPage: PropTypes.bool,
  lang: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isInnerPage: false,
  setMagic: () => {},
};

export default Header;
