import { ActionTypes } from '../actions/actions.types';

const gameReducer = (state = {}, action) => {

    switch(action.type) {
        case ActionTypes.ROTATE:
            return state 
        
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