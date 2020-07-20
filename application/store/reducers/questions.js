import { 
    SET_ANSWER, 
    RESET_ANSWER, 
    SET_IMAGE, 
    RESET_IMAGE, 
    REMOVE_IMAGE, 
    SET_MODULO, 
    RESPONSE,
    QUESTION_LIST,
    SET_RESPONSE_ITEM ,
    RESET_RESPONSE
} from "../consts";

const INITIAL_STATE = {
    modulo: '',
    DSTEXTO: '',
    images: [],   
    response: [],   
    anexos: [],   
    list: [],   
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
        case RESPONSE:
            return {
                ...state,
                response: [...state.response, payload],
                anexos: [...state.images]
            }
        case RESET_RESPONSE:
            return {
                ...state,
                response: [],
                anexos: []
            }
        case QUESTION_LIST:
            return {
                ...state,
                list: [...payload]
            }
        case SET_RESPONSE_ITEM:
            return {
                ...state,
                list: state.list.map(i => {
                    if (i.IDG113 == payload.id) {
                        i.SNINVIAB = 0;
                        i.SNRESULT = payload.value;
                    }
                    return i;
                })
            }
        default:
            return state;
    }
}