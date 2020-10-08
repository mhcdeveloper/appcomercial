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
    RESET_RESPONSE,
    SET_FILTERS,
    SET_FILTER_RESPONSE,
    RESET_FILTER_RESPONSE,
    SET_CARGA
} from "../consts";

const INITIAL_STATE = {
    modulo: '',
    carga: '',
    agendamento: '',
    DSTEXTO: '',
    images: [],   
    response: [],   
    anexos: [],   
    list: [],   
    filters: [],   
    filterResponse: [],   
}

export default function questions(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch (action.type) {
        case SET_MODULO:
            return {
                ...state,
                modulo: payload
            }
        case SET_CARGA:
            return {
                ...state,
                carga: payload.IDG046,
                agendamento: payload.IDH006,
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
                response: [...state.response.filter(f => f.IDG114 != payload.IDG114), payload],
                anexos: [...state.anexos, ...state.images]
            }
        case RESET_RESPONSE:
            return {
                ...state,
                response: [],
                filters: [],
                filterResponse: [],
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
        case SET_FILTERS:
            return {
                ...state,
                filters: [],
                filters: [...payload]
            }
        case SET_FILTER_RESPONSE:
            return {
                ...state,
                filterResponse: [...payload]
            }
        case RESET_FILTER_RESPONSE:
            return {
                ...state,
                filterResponse: []
            }
        default:
            return state;
    }
}