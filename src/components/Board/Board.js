import React, { useState, useEffect, createRef } from 'react';

import { Tetromino } from 'components';
import './Board.css';

function Board({ num }) {
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
        } else if (event.key === 'ArrowLeft') {
            // has to be changed to dimensions dependant on each shape
            setCurrentShapeX(prevState => Math.max(prevState - 25, 0));
        } else if (event.key === 'ArrowRight') {
            // has to be changed to dimensions dependant on each shape
            setCurrentShapeX(prevState => Math.min(prevState + 25, 575));
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleMovement);
    }, []);

    return (
        <div className="Board">
            <Tetromino num={num} ref={currentShape} x={currentShapeX} y={currentShapeY} />
        </div>
    );
}

export default Board;
