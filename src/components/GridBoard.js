import React from 'react';
import GridSquare from './GridSquare';


const GridBoard = (props) => {

    const grid = [];
    for(let row = 0; row < 18; row++) {
        grid.push([])
        let currRow = grid[row];
        for(let col = 0; col < 10; col++) {
            currRow.push(<GridSquare key={`${col}${row}`} color='1'/>)
        }
    }

    console.log(grid)
    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}

export default GridBoard;