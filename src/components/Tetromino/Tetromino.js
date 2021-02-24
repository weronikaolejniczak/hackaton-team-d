// @flow

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

type PropsType = {
  x: number,
  y: number,
  num: number
}

const Tetromino: Function = ({ x, y, num }: PropsType, ref) => {
  const position = {
    top: y,
    left: x,
  };

  return (
    <div className='Tetromino' ref={ref} style={position}>
      {shapeArray[num]}
    </div>
  );
}

export default (forwardRef(Tetromino): React$AbstractComponent<mixed, mixed>);
