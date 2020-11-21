import React, { forwardRef } from 'react';

import {
  Shape,
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeS,
  ShapeT,
  ShapeZ,
} from './Shape';
import './Tetromino.css';
export { Shape } from './Shape';

const shapeArray = [
  <ShapeI />,
  <ShapeJ />,
  <ShapeL />,
  <ShapeO />,
  <ShapeS />,
  <ShapeT />,
  <ShapeZ />,
];

function Tetromino(props, ref) {
  const { x, y, num } = props;

  const position = {
    top: y,
    left: x,
  };

  return (
    <div className='Tetromino' ref={ref} style={position}>
      <Shape num={num} />
    </div>
  );
}

export default forwardRef(Tetromino);
