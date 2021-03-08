import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  move_down, move_left, move_right, rotate } from '../actions/actions';

const Controls = (props) => {

    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.game.isRunning);

    return(
        <div className="controls">
            <button className='control-button' onClick={() => { dispatch(move_left())} }>Left</button>
            <button className='control-button' onClick={() => { dispatch(move_right())}}>Right</button>
            <button className='control-button' onClick={() => { dispatch(rotate())}}>Rotate</button>
            <button className='control-button' onClick={() => { dispatch(move_down())}}>Down</button>
        </div>
    )
}

export default Controls;