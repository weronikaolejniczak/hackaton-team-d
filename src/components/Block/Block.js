import React from 'react';

import './Block.css';

function Block({ color }) {
  return <div className='Block' style={{ backgroundColor: color }} />;
}

export default Block;
