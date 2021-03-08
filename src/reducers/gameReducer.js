import { ActionTypes } from '../actions/actions.types';
import { gridDefault, randomShape, nextRotation, canMoveTo } from '../utils/index';

const INITIAL_STATE = {
    grid: gridDefault(),
    shape: randomShape(),
    rotation: 0,
    // x and y set the block to be middle of grid, above top
    x: 4,
    y: -4,
    nextShape: randomShape(),
    isRunning: true,
    score: 0,
    speed: 1000,
    gameOver: false
}

const gameReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case ActionTypes.ROTATE:
            const newRotation = nextRotation(state.shape, state.rotation)
            if (canMoveTo(state.shape, state.grid, state.x, state.y, newRotation)) {
                return {...state, rotation: newRotation}
            }
            return state
        
        case ActionTypes.MOVE_RIGHT:
            if (canMoveTo(state.shape, state.grid, state.x + 1, state.y, state.rotation)) {
                return {...state, x: state.x + 1}
            }
            return state
        
        case ActionTypes.MOVE_LEFT:
            if (canMoveTo(state.shape, state.grid, state.x - 1, state.y, state.rotation)) {
                return {...state, x: state.x - 1}
            }
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