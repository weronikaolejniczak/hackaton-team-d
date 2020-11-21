import React, { forwardRef } from 'react';

import Shape from './Shape/Shape';
import './Tetromino.css';

function Tetromino(props, ref) {
  const { x, y } = props;

  const position = {
    top: y,
    left: x
  }

  return (
    <div className='Tetromino' ref={ref} style={position}>
      <Shape />
    </div>
  );
}

export default forwardRef(Tetromino);
