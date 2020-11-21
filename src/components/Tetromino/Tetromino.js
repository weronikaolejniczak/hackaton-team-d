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

function Tetromino(props, ref) {
  const { x, y } = props;

  const styles = {
    position: 'relative',
    top: y,
    left: x,
  };

  const shapeArray = [
    <ShapeI />,
    <ShapeJ />,
    <ShapeL />,
    <ShapeO />,
    <ShapeS />,
    <ShapeT />,
    <ShapeZ />,
  ];

  let randomNumber = Math.floor(Math.random() * shapeArray.length);
  return (
    <div className='block__wrapper' ref={ref} style={styles}>
      {shapeArray[randomNumber]}
    </div>
  );
}

export default forwardRef(Tetromino);
