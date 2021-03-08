import { ActionTypes } from '../actions/actions.types';
import { gridDefault, randomShape, nextRotation, canMoveTo, checkRows, addBlockToGrid } from '../utils/index';

const INITIAL_STATE = {
    grid: gridDefault(),
    shape: randomShape(),
    rotation: 0,
    // x and y set the block to be middle of grid, above top
    x: 5,
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
            // console.log(newRotation)
            if (canMoveTo(state.shape, state.grid, state.x, state.y, newRotation)) {
                console.log('WOOHOO')
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
            const possibleY = state.y + 1;
            if(canMoveTo(state.shape, state.grid, state.x, possibleY, state.rotation)) {
                // if you can move to next spot, do so
                return {...state, y: possibleY}
            }
            // else, place block where it is now
            const newGrid = addBlockToGrid(state.shape, state.grid, state.x, state.y, state.rotation);
            const newState = INITIAL_STATE;
            newState.grid = newGrid;
            newState.shape = state.nextShape;
            newState.nextShape = randomShape(); // generate new random shape
            newState.score = state.score;
            newState.isRunning = state.isRunning;

            if(!canMoveTo(state.nextShape, newGrid, 0, 3, 0)) {
                newState.shape = 0
                return {...state, gameOver: true}
            }

            newState.score = state.score + checkRows(state.grid);

            return newState
    
        case ActionTypes.RESUME:
            return {...state, isRunning: true}
    
        case ActionTypes.PAUSE:
            return {...state, isRunning: false}
    
        case ActionTypes.GAME_OVER:
            return state
    
        case ActionTypes.RESTART:
            
            return state

        default:
            return state
    }
}

export default gameReducer