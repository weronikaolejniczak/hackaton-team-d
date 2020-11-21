import React from 'react';

import './Board.css';

function Board({ children }) {
    return (
        <div className="Board">{children}</div>
    );
}

export default Board;
