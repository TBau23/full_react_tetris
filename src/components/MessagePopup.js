import React from 'react';
import { useSelector } from 'react-redux'; 

const MessagePopup = (props) => {

    const game = useSelector((state) => state.game)
    const { isRunning, gameOver } = game;
    
    let message = '';
    if(gameOver) {
        message = 'Game Over'
    } else if(!isRunning) {
        message = 'Paused'
    }


    return (
        <div className={`message-popup ${isRunning === true && gameOver === false ? 'hidden' : ''}`} >
            <h1>{message}</h1>
            
        </div>
    )
}

export default MessagePopup