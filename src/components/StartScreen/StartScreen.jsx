import React, { useEffect, useState } from 'react';
import { animated, useSprings, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import Color from 'color';
import IconLogo from '../../static/assets/logo.svg';

import './StartScreen.scss';

const AnimatedLogo = animated(IconLogo);

const StartScreen = ({ magic, lang }) => {
  const [firstString, setFirstString] = useState('Архитектурное агентство');

  const items = [1, 2, 3, 4, 5];
  const trail = useSprings(
    items.length,
    items.map((item, index) => ({
      config: { mass: 1, tension: 2000, friction: 200, duration: 1000 },
      opacity: 0.3 * (index + 1),
      from: { opacity: 0 },
      delay: 100 * index,
    })),
  );

  const logoProps = useSpring({
    config: { mass: 1, tension: 2000, friction: 200, duration: 1000 },
    transform: 'translateY(0)',
    opacity: 1,
    from: { transform: 'translateY(30px)', opacity: 0 },
    delay: 1000,
  });

  const firstStringProps = useSpring({
    config: { mass: 1, tension: 2000, friction: 200, duration: 1000 },
    transform: 'translateY(0)',
    opacity: 1,
    from: { transform: 'translateY(50px)', opacity: 0 },
    delay: 1200,
  });

  useEffect(() => {
    if (lang === 'RU') {
      setFirstString('Архитектурное агентство');
    } else {
      setFirstString('Architectural agency');
    }
  }, [lang]);

  return (
    <div
      className={cx('start-screen', {
        // "start-screen_light": magic,
      })}
    >
      <div className="start-screen__container">
        <AnimatedLogo className="start-screen__logo" style={{ ...logoProps }} />

        <animated.div className="start-screen__text" style={{ ...firstStringProps }}>
          {firstString}
        </animated.div>
      </div>

      <div className="start-screen__column-list">
        {trail.map((props, index) => (
          <animated.div
            key={items[index]}
            className="start-screen__column"
            style={{ ...props, background: magic }}
          />
        ))}
      </div>
    </div>
  );
};

StartScreen.propTypes = {
  magic: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default StartScreen;
