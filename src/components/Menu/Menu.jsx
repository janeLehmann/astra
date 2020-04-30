import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';

import IconTriangle from '../../static/assets/triangle-4.svg';
import IconTriangle2 from '../../static/assets/triangle-3.svg';
import IconSLetter from '../../static/assets/s-letter.svg';

// Helpers
import { useWindowSize } from '../../helpers';

import './Menu.scss';

const position = {
  triangle1: {
    1440: {
      bottom: -5,
      left: -3,
    },
    1100: {
      bottom: -7,
      left: -10,
    },
    600: {
      bottom: -10,
      left: -19,
    }
  },
  triangle2: {
    1440: {
      top: -15,
      left: -9,
    },
    1100: {
      top: -15,
      left: -17,
    },
    600: {
      top: -21,
      left: -21,
    }
  },
  sLetter: {
    1440: {
      bottom: -5,
      right: -10,
    },
    1100: {
      bottom: -5,
      right: -10,
    },
    600: {
      bottom: -15,
      right: -35,
    }
  },
};

const AnimatedTriangle1 = animated(IconTriangle);
const AnimatedTriangle2 = animated(IconTriangle2);
const AnimatedSLetter = animated(IconSLetter);
const Menu = ({ closeMenu }) => {
  const list = [
    {
      id: 0,
      title: 'Главная',
      href: '/',
    },
    // {
    //   id: 1,
    //   title: 'О нас',
    //   href: '/about',
    // },
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

 /* const windowSize = useWindowSize();

  let key = 600;
  if (windowSize.innerWidth > 600) {
    key = 1100;
  }
  if (windowSize.innerWidth > 1100) {
    key = 1440;
  }

  useEffect(() => {
    const onMouseMove = ({ clientX: x, clientY: y }) => {
      setTriangle1({ xy: calc(x, y) });
      setTriangle2({ xy: calc(x, y) });
      setSLetter({ xy: calc(x, y) });
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
    /!* eslint-disable *!/
  }, []);
  /!* eslint-enable *!/

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const trans1 = (x, y) => `translate3d(${x / 15}px, ${y / 15}px, 0)`;
  const trans2 = (x, y) => `translate3d(${x / 16}px, ${y / 16}px, 0)`;
  const trans3 = (x, y) => `translate3d(${x / 18}px, ${y / 18}px, 0)`;
  const percent = x => `${x}%`;

  /!** Triangle 1 *!/
  const [springPropsTriangle1, setTriangle1] = useSpring(() => ({
    from: {
      xy: [1000, -300],
      opacity: 0,
      left: position.triangle1[key].left,
      bottom: position.triangle1[key].bottom,
    },
    to: { xy: [0, 0], opacity: 1 },
    config: { mass: 10, tension: 180, friction: 140 },
  }));

  /!** Triangle 2 *!/
  const [springPropsTriangle2, setTriangle2] = useSpring(() => ({
    from: {
      xy: [-1000, -300],
      opacity: 0,
      left: position.triangle2[key].left,
      top: position.triangle2[key].top,
      deg: 20,
    },
    to: { xy: [0, 0], opacity: 1, deg: 40 },
    config: { mass: 20, tension: 100, friction: 140 },
  }));

  /!** Letter S *!/
  const [springPropsSLetter, setSLetter] = useSpring(() => ({
    from: {
      xy: [1000, 300],
      opacity: 0,
      right: position.sLetter[key].right,
      bottom: position.sLetter[key].bottom,
    },
    to: { xy: [0, 0], opacity: 1 },
    config: { mass: 20, tension: 100, friction: 140 },
  }));*/

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

      {/*<AnimatedTriangle1*/}
      {/*  className="menu__shape-1"*/}
      {/*  style={{*/}
      {/*    transform: springPropsTriangle1.xy.interpolate(trans1),*/}
      {/*    left: springPropsTriangle1.left.interpolate(percent),*/}
      {/*    bottom: springPropsTriangle1.bottom.interpolate(percent),*/}
      {/*    opacity: springPropsTriangle1.opacity,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<AnimatedTriangle2*/}
      {/*  className="menu__shape-2"*/}
      {/*  style={{*/}
      {/*    transform: springPropsTriangle2.xy.interpolate(trans3),*/}
      {/*    left: springPropsTriangle2.left.interpolate(percent),*/}
      {/*    top: springPropsTriangle2.top.interpolate(percent),*/}
      {/*    opacity: springPropsTriangle2.opacity,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<AnimatedSLetter*/}
      {/*  className="menu__shape-3"*/}
      {/*  style={{*/}
      {/*    transform: springPropsSLetter.xy.interpolate(trans2),*/}
      {/*    right: springPropsSLetter.right.interpolate(percent),*/}
      {/*    bottom: springPropsSLetter.bottom.interpolate(percent),*/}
      {/*    opacity: springPropsSLetter.opacity,*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
