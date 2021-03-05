import React from 'react';


const ScoreBoard = (props) => {

    return(
        <div className='score-board'>
            <div>Score : {props.score}</div>
            <div>Level: 1</div>
            <button onClick={e => {}} className='score-board-button'>
                Play
            </button>
            <button onClick={e => {}} className='score-board-button'>
                Restart
            </button>
        </div>
    )
};

export default ScoreBoard;