import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  move_down, move_left, move_right, rotate } from '../actions/actions';

const Controls = (props) => {

    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { isRunning, gameOver} = game;

    return(
        <div className="controls">
            <button 
            disabled={!isRunning || gameOver}
            className='control-button' onClick={() => { 
                if(!isRunning || gameOver) return
                dispatch(move_left())}
                 }>Left</button>
            <button 
            disabled={!isRunning || gameOver}
            className='control-button' onClick={() => { 
                if(!isRunning || gameOver) return
                dispatch(move_right())}}>Right</button>
            <button 
            disabled={!isRunning || gameOver}
            className='control-button' onClick={() => { 
                if(!isRunning || gameOver) return
                dispatch(rotate())}}>Rotate</button>
            <button 
            disabled={!isRunning || gameOver}
            className='control-button' onClick={() => { 
                if(!isRunning || gameOver) return
                dispatch(move_down())}}>Down</button>
        </div>
    )
}

export default Controls;