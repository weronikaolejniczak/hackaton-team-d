import React from 'react';
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

let randomNumber = Math.floor(Math.random() * shapeArray.length);

function Tetromino({ tetrominoClass }) {
  return <div>{shapeArray[randomNumber]}</div>;
}

export default Tetromino;
