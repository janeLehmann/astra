import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import IconArrow from '../../static/assets/icon-arrow.svg';

import './SliderArrow.scss';

const SliderArrow = ({isRight, className}) => {
  return (
    <button className={cx('slider-arrow', {
      [className] : className,
      'slider-arrow_right': isRight,
    })} type="button">
      <IconArrow className="slider-arrow__icon" />
    </button>
  )
};

SliderArrow.propTypes = {
  isRight: PropTypes.bool,
  className: PropTypes.string,
};

SliderArrow.defaultProps = {
  isRight: false,
  className: null,
}

export default SliderArrow;
