import { ActionTypes } from "./actions.types";

export const pause = () => ({
    type: ActionTypes.PAUSE
})

export const resume = () => ({
    type: ActionTypes.RESUME
})

export const game_over = () => ({
    type: ActionTypes.GAME_OVER
})

export const restart = () => ({
    type: ActionTypes.RESTART
})

export const move_down = () => ({
    type: ActionTypes.MOVE_DOWN
})

export const move_left = () => ({
    type: ActionTypes.MOVE_LEFT
})

export const move_right = () => ({
    type: ActionTypes.MOVE_RIGHT
})

export const rotate = () => ({
    type: ActionTypes.ROTATE
})