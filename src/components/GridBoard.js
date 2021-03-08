import React from 'react';
import GridSquare from './GridSquare';
import { useSelector } from 'react-redux';
import { shapes } from '../utils/index';

const GridBoard = (props) => {

    const game = useSelector((state) => state.game);
    const { grid, shape, rotation, x, y, isRunning, speed } = game;

    const block = shapes[shape][rotation]; // current shape - a 2D array
    const blockColor = shape;

    const gridSquares = grid.map((row, rowIdx) => {

        return row.map((square, colIdx) => {
            // now mapping over all the zeros
            
            const blockX = colIdx - x;
            const blockY = rowIdx - y;
            let color = square;

            if(blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                // 
                color = block[blockY][blockX] === 0 ? color : blockColor;
            }

            const k = rowIdx * grid[0].length + colIdx;

            return <GridSquare key={k} color={color} />
        })
    })

    // const grid = [];
    // for(let row = 0; row < 18; row++) {
    //     grid.push([])
    //     let currRow = grid[row];
    //     for(let col = 0; col < 10; col++) {
    //         currRow.push(<GridSquare key={`${col}${row}`} color='1'/>)
    //     }
    // }

    console.log(grid)
    return (
        <div className='grid-board'>
            {gridSquares}
        </div>
    )
}

export default GridBoard;