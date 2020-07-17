import { SET_ANSWER, RESET_ANSWER, SET_IMAGE, RESET_IMAGE, REMOVE_IMAGE, SET_MODULO } from "../consts";

const INITIAL_STATE = {
    modulo: '',
    DSTEXTO: '',
    images: [],   
}

export default function questions(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch (action.type) {
        case SET_MODULO:
            return {
                ...state,
                modulo: payload
            }
        case SET_ANSWER:
            return {
                ...state,
                DSTEXTO: payload
            }
        case RESET_ANSWER:
            return {
                ...state,
                DSTEXTO: payload
            }
        case SET_IMAGE:
            return {
                ...state,
                images: [...state.images, payload]
            }
        case REMOVE_IMAGE:
            return {
                ...state,
                images: state.images.filter(item => item != payload)
            }
        case RESET_IMAGE:
            return {
                ...state,
                images: []
            }
        default:
            return state;
    }
}