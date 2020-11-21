import { useState, useEffect, createRef } from 'react';

import { Board, Tetromino } from 'components';
import './App.css';

function App() {
  const [currentShapeX, setCurrentShapeX] = useState(275);
  const [currentShapeY, setCurrentShapeY] = useState(0);
  const currentShape = createRef();

  const handleGravity = () => {
    currentShapeY < 500 && setCurrentShapeY(currentShapeY + 25);
  };

  setTimeout(() => handleGravity(), 1000);

  const handleMovement = (event) => {
    if (event.key === 'ArrowDown') {
      console.log('Clicked ArrowDown! Should fall to the bottom.');
    } else if (event.key === 'ArrowLeft' && currentShapeX >= 25) {
      setCurrentShapeX(prevState => prevState - 25);
    } else if (event.key === 'ArrowRight' && currentShapeX <= 575) {
      setCurrentShapeX(prevState => prevState + 25);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleMovement);
  }, []);

  return (
    <div className='App'>
      <Board>
        <Tetromino ref={currentShape} x={currentShapeX} y={currentShapeY} />
      </Board>
    </div>
  );
}

export default App;
