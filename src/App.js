import { useState, useEffect, createRef } from 'react';

import { Board } from 'components';
import {
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeS,
  ShapeT,
  ShapeZ,
} from 'components/Tetromino';
import './App.css';

function App() {
  const [currentShapeX, setCurrentShapeX] = useState(275);
  const [currentShapeY, setCurrentShapeY] = useState(0);
  const currentShape = createRef();

  const handleGravity = () => {
    (currentShapeY < 500) && setCurrentShapeY(currentShapeY + 25)
  };

  setTimeout(() => handleGravity(), 1000);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        console.log('Clicked ArrowDown! Should fall to the bottom.');
      } else if (e.key === 'ArrowLeft') {
        console.log('Clicked ArrowLeft! Should move to the left by 25.');
      } else if (e.key === 'ArrowRight') {
        console.log('Clicked ArrowRight! Should move to the right by 25.');
      }
    });
  }, []);

  return (
    <div className='App'>
      <Board>
        <ShapeL ref={currentShape} x={currentShapeX} y={currentShapeY} />
      </Board>
    </div>
  );
}

export default App;
