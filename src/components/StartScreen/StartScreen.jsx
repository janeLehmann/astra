import React, { useState } from 'react';
import Typist from 'react-typist';
import ReactCursorPosition from 'react-cursor-position';
import { animated, useSpring } from 'react-spring';
import cx from 'classnames';
import PropTypes from 'prop-types';

// import Cursor from '../Cursor/Cursor';
// import IconLogo from '../../static/assets/logo.svg';

import './StartScreen.scss';

const StartScreen = ({ magic }) => {
  const animationProps1 = useSpring({
    from: { transform: 'translate3d(0, 50px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    config: { duration: 600, mass: 0.6, tension: 200, friction: 60 },
  });

  const animationProps2 = useSpring({
    from: { transform: 'translate3d(0, 50px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    config: { duration: 600, mass: 0.6, tension: 200, friction: 60 },
    delay: 500,
  });

  const animationProps3 = useSpring({
    from: { transform: 'translate3d(0, 50px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    config: { duration: 600, mass: 0.6, tension: 200, friction: 60 },
    delay: 1000,
  });

  return (
    <ReactCursorPosition
      className={cx('start-screen', {
        'start-screen_light': magic,
      })}
    >
      <div className="start-screen__container">
        {/*<Typist cursor={{ show: false }}>*/}
        <animated.div className="start-screen__subtitle" style={animationProps1}>
          We are magicians of architecture
        </animated.div>
        {/*</Typist>*/}

        <animated.svg
          width="409"
          height="108"
          viewBox="0 0 409 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="start-screen__logo"
          style={animationProps2}
        >
          <path
            d="M43.7002 27.9002L16.5002 105.4H0.700195L42.7002 0.700195H46.4002L85.4002 105.4H69.7002L43.7002 27.9002Z"
            fill="white"
          />
          <path
            d="M367.1 27.9002L339.8 105.4H324L366 0.700195H369.8L408.7 105.4H393L367 27.9002H367.1Z"
            fill="white"
          />
          <path
            d="M91.6004 100.7L96.8004 87.7002C99.4004 89.6002 102.7 91.2002 106.6 92.5002C110.5 93.8002 114 94.4002 117.2 94.4002C122.7 94.4002 127.1 92.9002 130.5 89.9002C133.8 86.9002 135.5 83.1002 135.5 78.4002C135.5 74.9002 134.6 71.7002 132.7 68.7002C130.8 65.7002 126.2 62.5002 118.7 58.9002L110.4 55.0002C103.3 51.7002 98.4004 47.8002 95.6004 43.3002C92.8004 38.8002 91.4004 33.4002 91.4004 27.0002C91.4004 19.3002 94.1004 12.9002 99.6004 7.8002C105.1 2.7002 112.1 0.200195 120.6 0.200195C132 0.200195 140 2.1002 144.5 5.8002L140.3 18.1002C138.4 16.7002 135.5 15.4002 131.7 14.1002C127.8 12.8002 124.3 12.2002 121 12.2002C116.2 12.2002 112.4 13.6002 109.7 16.3002C106.9 19.0002 105.6 22.5002 105.6 26.8002C105.6 29.4002 106.1 31.8002 107.1 34.0002C108.1 36.2002 109.5 38.0002 111.2 39.4002C113 40.9002 116.6 42.9002 122 45.5002L130.5 49.5002C137.6 52.8002 142.5 56.8002 145.4 61.5002C148.2 66.1002 149.7 72.0002 149.7 79.2002C149.7 87.0002 146.6 93.5002 140.3 99.0002C134.1 104.4 125.7 107.1 115.3 107.1C105.9 107.2 98.1004 105 91.6004 100.7Z"
            fill="white"
          />
          <path
            d="M203.4 14.8001V105.5H189.3V14.8001H156.4V2.1001H237.8V14.8001H203.4Z"
            fill="white"
          />
          <path
            d="M293.2 57.9001C298.7 56.6001 303.5 53.4001 307.5 48.2001C311.5 43.0001 313.5 37.2001 313.5 30.7001C313.5 10.9001 301.1 1.1001 276.2 1.1001C273.1 1.1001 268.1 1.3001 261.3 1.6001C254.5 2.0001 250.8 2.1001 250.3 2.1001V105.5H264.4V14.8001C268.5 14.3001 271.3 14.1001 272.7 14.1001C281.6 14.1001 288.2 15.4001 292.3 17.9001C296.4 20.4001 298.5 24.6001 298.5 30.4001C298.5 37.4001 296.6 42.3001 292.7 45.0001C288.9 47.7001 281.3 49.1001 273 49.1001C273 49.2001 273 49.3001 272.9 49.4001L306.9 105.5H323.1L293.2 57.9001Z"
            fill="white"
          />
        </animated.svg>

        <div className="start-screen__content">
          {/*<Typist cursor={{ show: false }} avgTypingDelay={120} delay={4000}>*/}
          {/*<p className="start-screen__text">Create this</p>*/}
          {/*<Typist.Backspace count={11} delay={1000} />*/}
          {/*<p className="start-screen__text">Do that</p>*/}
          {/*<Typist.Backspace count={7} delay={1000} />*/}
          <animated.p className="start-screen__text" style={animationProps3}>
            Just let us do our magic
          </animated.p>
          {/*</Typist>*/}
        </div>
      </div>

      {/*<Cursor />*/}
    </ReactCursorPosition>
  );
};

StartScreen.propTypes = {
  magic: PropTypes.bool.isRequired,
};

export default StartScreen;
