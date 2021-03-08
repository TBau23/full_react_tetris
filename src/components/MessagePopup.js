import React from 'react';
import { useSelector } from 'react-redux'; 

const MessagePopup = (props) => {

    const state = useSelector((state) => state.game)
    const { isRunning, gameOver } = state;
    
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