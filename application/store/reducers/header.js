import { SET_CLIENTE, HANDLE_CLOSE } from "../consts";

const INITIAL_STATE = {
    cliente: false,
    close: true
}

export default function header(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch (action.type) {
        case SET_CLIENTE:
            return {
                ...state,
                cliente: payload
            }
        case HANDLE_CLOSE:
            return {
                ...state,
                close: !state.close
            }
        default:
            return state;
    }
}