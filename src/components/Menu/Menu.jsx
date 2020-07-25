import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './Menu.scss';

const Menu = ({ closeMenu, lang }) => {
  const list = [
    {
      id: 0,
      title: lang && lang === 'RU' ? 'Главная' : 'Home',
      href: '/',
    },
    {
      id: 1,
      title: lang && lang === 'RU' ? 'О нас' : 'About',
      href: '/about',
    },
    {
      id: 2,
      title: lang && lang === 'RU' ? 'Проекты' : 'Projects',
      href: '/projects',
    },
    // {
    //   id: 3,
    //   title: 'Блог',
    //   href: '/blog',
    // },
    {
      id: 4,
      title: lang && lang === 'RU' ? 'Контакты' : 'Contacts',
      href: '/contacts',
    },
  ];

  return (
    <div className="menu">
      {lang && (
        <div className="menu__list">
          {list.map(item => (
            <div className="menu__item" key={item.id}>
              <Link to={item.href} className="menu__item-link">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}

      <button className="menu__close" type="button" onClick={closeMenu}>
        <span className="menu__close-line" />
        <span className="menu__close-line" />
      </button>
    </div>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Menu;
