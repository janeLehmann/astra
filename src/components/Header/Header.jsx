import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import IconLogo from '../../static/assets/logo.svg';
import IconWand from '../../static/assets/magic-wand.svg';

import './Header.scss';

const Header = ({ setMagic, magic, setIsMenuOpen, isMagic, lang, dispatch }) => {
  const ruClick = () => {
    dispatch({ type: `SET_RU_LANG` });
  };

  const engClick = () => {
    dispatch({ type: `SET_ENG_LANG` });
  };

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
  dispatch: PropTypes.func.isRequired,
  setMagic: PropTypes.func,
  setIsMenuOpen: PropTypes.func.isRequired,
  magic: PropTypes.bool,
  isMagic: PropTypes.bool,
  lang: PropTypes.string,
};

Header.defaultProps = {
  magic: true,
  setMagic: () => {},
  isMagic: false,
  lang: 'RU',
};

const mapStateToProps = state => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(Header);
