import React, { forwardRef } from 'react';

import {
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeS,
  ShapeT,
  ShapeZ,
} from './Shape';
import './Tetromino.css';

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
  const { x, y } = props;

  let randomNumber = Math.floor(Math.random() * shapeArray.length);

  const position = {
    top: y,
    left: x
  }

  return (
    <div className='block__wrapper' ref={ref} style={position}>
      {shapeArray[randomNumber]}
    </div>
  );
}

export default forwardRef(Tetromino);
