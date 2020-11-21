import { useState, createRef } from 'react';

import { Board } from 'components';
import {
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeS,
  ShapeT,
  ShapeZ,
  Tetromino,
} from 'components/Tetromino';
import './App.css';

function App() {
  const [currentShapeX, setCurrentShapeX] = useState(275);
  const [currentShapeY, setCurrentShapeY] = useState(0);
  const currentShape = createRef();

  const handleGravity = () => {
    currentShapeY < 500 && setCurrentShapeY(currentShapeY + 25);
  };

  setTimeout(() => handleGravity(), 1000);

  return (
    <div className='App'>
      <Board>
        <Tetromino ref={currentShape} x={currentShapeX} y={currentShapeY} />
        <ShapeL ref={currentShape} x={currentShapeX} y={currentShapeY} />
      </Board>
    </div>
  );
}

export default App;
