import React from 'react';

import Block from 'components/Block';

function ShapeI() {
  const color = "red";

  return (
    <>
      <Block color={color} />
      <Block color={color} />
      <Block color={color} />
      <Block color={color} />
    </>
  );
}

export default ShapeI;
