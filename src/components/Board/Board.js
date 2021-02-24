// @flow

import React, { useState, useEffect, createRef } from 'react';

import { Tetromino } from 'components';
import './Board.css';

type PropsType = {
    num: number
}

const Board: React$ComponentType<PropsType> = ({ num }): React$Element<'div'> => {
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
            // $todo: has to be changed to dimensions dependant on each shape
            setCurrentShapeX(prevState => Math.max(prevState - 25, 0));
        } else if (event.key === 'ArrowRight') {
            // $todo: has to be changed to dimensions dependant on each shape
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
