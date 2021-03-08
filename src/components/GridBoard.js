import React, { useEffect, useRef } from 'react';
import { move_down } from '../actions/actions';
import GridSquare from './GridSquare';
import { useSelector, useDispatch } from 'react-redux';
import { shapes } from '../utils/index';


const GridBoard = (props) => {

    const game = useSelector((state) => state.game);
    const { grid, shape, rotation, x, y, isRunning, speed } = game;

    const dispatch = useDispatch();
    const requestRef = useRef(); // reference to requestAnimationFrame
    const lastUpdateTimeRef = useRef(0); // tracks time of last update
    const progressTimeRef = useRef(0); // tracks total time between updates

    const block = shapes[shape][rotation]; // current shape - a 2D array
    const blockColor = shape;

    const gridSquares = grid.map((row, rowIdx) => {

        return row.map((square, colIdx) => {
            // now mapping over all the zeros
            
            const blockX = colIdx - x; 
            const blockY = rowIdx - y;
            let color = square; // 0 or 1 - binary has or does not have color

            if(blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                // 
                color = block[blockY][blockX] === 0 ? color : blockColor;
            }

            const k = rowIdx * grid[0].length + colIdx;

            return <GridSquare key={k} color={color} />
        })
    })

    const update = (time) => {
        requestRef.current = requestAnimationFrame(update);
        if(!isRunning) {
            return
        }
        if(!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time;
        }
        const deltaTime = time - lastUpdateTimeRef.current;
        progressTimeRef.current += deltaTime;
        if(progressTimeRef.current > speed) {
            dispatch(move_down())
            progressTimeRef.current = 0;
        }
        lastUpdateTimeRef.current = time
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning])

    console.log(grid)
    return (
        <div className='grid-board'>
            {gridSquares}
        </div>
    )
}

export default GridBoard;