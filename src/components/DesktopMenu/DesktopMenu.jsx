import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import './DesktopMenu.scss';

const DesktopMenu = ({ lang, ruClick, engClick }) => {
  return (
    <div className="desktop-menu">
      {lang && (
        <>
          <div className="desktop-menu__line">
            <Link to="/" className="desktop-menu__item">
              {lang === 'RU' ? 'Главная' : 'Home'}
            </Link>

            <Link to="/about" className="desktop-menu__item">
              {lang === 'RU' ? 'О нас' : 'About us'}
            </Link>

            <button
              className={cx('desktop-menu__item', {
                'desktop-menu__item_active': lang !== 'RU',
              })}
              type="button"
              onClick={engClick}
            >
              ENG
            </button>

            <button
              className={cx('desktop-menu__item', {
                'desktop-menu__item_active': lang === 'RU',
              })}
              type="button"
              onClick={ruClick}
            >
              RU
            </button>
          </div>

          <div className="desktop-menu__line">
            <Link to="/projects" className="desktop-menu__item">
              {lang === 'RU' ? 'Проекты' : 'Projects'}
            </Link>

            <Link to="/contacts" className="desktop-menu__item">
              {lang === 'RU' ? 'Контакты' : 'Contacts'}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

DesktopMenu.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default DesktopMenu;
