import React, { forwardRef } from 'react';

import Block from 'components/Block';

function ShapeL(props, ref) {
    const { x, y } = props;

    const styles = {
        position: 'relative',
        top: y,
        left: x
    }

    return (
        <div ref={ref} style={styles}>
            <Block />
            <Block />
            <Block />
            <Block />
        </div>
    );
}

export default forwardRef(ShapeL);
