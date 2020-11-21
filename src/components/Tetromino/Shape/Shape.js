import React from 'react';

import {
    ShapeI,
    ShapeJ,
    ShapeL,
    ShapeO,
    ShapeS,
    ShapeT,
    ShapeZ,
  } from './';

  const shapeArray = [
    <ShapeI />,
    <ShapeJ />,
    <ShapeL />,
    <ShapeO />,
    <ShapeS />,
    <ShapeT />,
    <ShapeZ />,
  ];

function Shape() {
    let randomNumber = Math.floor(Math.random() * shapeArray.length);

    return (
        <>{shapeArray[randomNumber]}</>
    );
}

export default Shape;
