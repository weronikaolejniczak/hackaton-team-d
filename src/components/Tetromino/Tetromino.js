import React, { forwardRef } from 'react';

import Shape from './Shape/Shape';
import './Tetromino.css';

function Tetromino(props, ref) {
  const { x, y, num } = props;

  const position = {
    top: y,
    left: x
  }

  return (
    <div className='Tetromino' ref={ref} style={position}>
      <Shape num={num} />
    </div>
  );
}

export default forwardRef(Tetromino);
