// @flow

import React from 'react';

import './Block.css';

type PropsType = {
  color: string
}

const Block: React$ComponentType<PropsType> = ({ color }): React$Element<'div'> => <div className='Block' style={{ backgroundColor: color }} />;

export default Block;
