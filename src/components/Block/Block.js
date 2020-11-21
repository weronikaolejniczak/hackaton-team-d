import React from 'react';

import './Block.css';

function Block({ color }) {
  return <div className='Block' style={{color: color}} />;
}

export default Block;
