// @flow

import React from 'react';
import type { Element } from 'react';

import { Board } from 'components';
import './App.css';

const App = (): Element<'div'> => {
  const tetrominoNum = Math.floor(Math.random() * 7);

  return (
    <div className='App'>
      <Board num={tetrominoNum} />
    </div>
  );
}

export default App;
