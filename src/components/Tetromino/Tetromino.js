import React, { forwardRef } from 'react';
import {
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeS,
  ShapeT,
  ShapeZ,
} from 'components/Tetromino';

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
  let randomNumber = Math.floor(Math.random() * shapeArray.length);

  return (
    <div className='block__wrapper' ref={ref}>
      {shapeArray[randomNumber]}
    </div>
  );
}

export default forwardRef(Tetromino);
