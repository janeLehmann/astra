import React from 'react';

import './Cursor.scss';

const Cursor = ({position: {
  x = 0,
  y = 0
} = {}}) => {
  return (
    <div className="cursor" style={{left: x, top: y}} />
  )
};

export default Cursor;
