import React from 'react';

import Block from 'components/Block';

function ShapeO() {
  const color = "purple";

  return (
    <>
      <Block color={color} />
      <Block color={color} />
      <Block color={color} />
      <Block color={color} />
    </>
  );
}

export default ShapeO;
