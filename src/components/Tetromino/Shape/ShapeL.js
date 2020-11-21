import React from 'react';

import Block from 'components/Block';

function ShapeL() {
    const color = "blue";

    return (
      <>
        <Block color={color} />
        <Block color={color} />
        <Block color={color} />
        <Block color={color} />
      </>
    );
}

export default ShapeL;
