import React from 'react';
import PropTypes from 'prop-types';

import './Menu.scss';

const Menu = ({ closeMenu }) => {
  const list = [
    {
      id: 0,
      title: 'Главная',
      href: '/',
    },
    {
      id: 1,
      title: 'О нас',
      href: '/about',
    },
    {
      id: 2,
      title: 'Проекты',
      href: '/projects',
    },
    // {
    //   id: 3,
    //   title: 'Блог',
    //   href: '/blog',
    // },
    {
      id: 4,
      title: 'Контакты',
      href: '/contacts',
    },
  ];

  return (
    <div className="menu">
      <div className="menu__list">
        {list.map(item => (
          <div className="menu__item" key={item.id}>
            <a href={item.href} className="menu__item-link">
              {item.title}
            </a>
          </div>
        ))}
      </div>

      <button className="menu__close" type="button" onClick={closeMenu}>
        <span className="menu__close-line" />
        <span className="menu__close-line" />
      </button>
    </div>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
