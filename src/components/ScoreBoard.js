import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pause, restart, resume } from '../actions/actions';

const ScoreBoard = (props) => {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { score, isRunning, gameOver } = game;

    return(
        <div className='score-board'>
            <div>Score : {score}</div>
            <div>Level: 1</div>
            <button onClick={e => {
                if(gameOver) return
                if(isRunning) dispatch(pause())
                else dispatch(resume())
            }} className='score-board-button'>
                {isRunning ? 'Pause' : 'Play'}
            </button>
            <button onClick={e => { dispatch(restart())}} className='score-board-button'>
                Restart
            </button>
        </div>
    )
};

export default ScoreBoard;