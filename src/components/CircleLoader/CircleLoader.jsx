import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './CircleLoader.scss';

const CircleLoader = ({ mainColor, spinnerColor, width, height, borderWidth, className }) => {

  return (
    <div
      className={cx('circle-loader', {
        [className]: className,
      })}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="circle-loader__main"
        style={{ borderColor: `${mainColor}`, borderWidth: `${borderWidth}px` }}
      />
      <div
        className="circle-loader__spinning"
        style={{
          borderColor: `${spinnerColor} transparent transparent`,
          borderWidth: `${borderWidth}px`,
        }}
      />
    </div>
  );
};

CircleLoader.propTypes = {
  className: PropTypes.string,
  mainColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  borderWidth: PropTypes.number,
};

CircleLoader.defaultProps = {
  className: null,
  mainColor: 'rgba(40, 65, 149, 0.1)',
  spinnerColor: '#b0b5c4',
  width: 30,
  height: 30,
  borderWidth: 2,
};

export default CircleLoader;
