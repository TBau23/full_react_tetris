import { ActionTypes } from '../actions/actions.types';
import { gridDefault, randomShape } from '../utils/index';

const INITIAL_STATE = {
    grid: gridDefault(),
    shape: randomShape(),
    rotation: 0,
    // x and y set the block to be middle of grid, above top
    x: 5,
    y: 4,
    nextShape: randomShape(),
    isRunning: true,
    score: 0,
    speed: 1000,
    gameOver: false
}

const gameReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case ActionTypes.ROTATE:
            return {...state, x: state.x - 1} 
        
        case ActionTypes.MOVE_RIGHT:
            return state
        
        case ActionTypes.MOVE_LEFT:
            return state
    
        case ActionTypes.MOVE_DOWN:
            return state
    
        case ActionTypes.RESUME:
            return state
    
        case ActionTypes.PAUSE:
            return state
    
        case ActionTypes.GAME_OVER:
            return state
    
        case ActionTypes.RESTART:
            return state

        default:
            return state
    }
}

export default gameReducer