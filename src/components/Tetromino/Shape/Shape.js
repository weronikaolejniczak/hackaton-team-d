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

function Shape({ num }) {
    return (
        <>{shapeArray[num]}</>
    );
}

export default Shape;
