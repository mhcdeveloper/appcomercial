import { 
    SET_MODULO, 
    SET_ANSWER, 
    SET_IMAGE, 
    REMOVE_IMAGE, 
    RESET_IMAGE, 
    RESPONSE, 
    QUESTION_LIST, 
    SET_RESPONSE_ITEM, 
    RESET_RESPONSE,
    SET_FILTERS,
    SET_FILTER_RESPONSE, 
    RESET_FILTER_RESPONSE, 
    SET_CARGA 
} from '../consts';

export const setModulo = (payload) => ({
    type: SET_MODULO,
    payload
});

export const setCarga = (payload) => ({
    type: SET_CARGA,
    payload
});

export const setAnswer = (payload) => ({
    type: SET_ANSWER,
    payload
});

export const setImage = (payload) => ({
    type: SET_IMAGE,
    payload
});

export const removeImage = (payload) => ({
    type: REMOVE_IMAGE,
    payload
});

export const resetImage = (payload) => ({
    type: RESET_IMAGE,
    payload
});

export const setResponse = (payload) => ({
    type: RESPONSE,
    payload
});

export const setResetResponse = (payload) => ({
    type: RESET_RESPONSE,
    payload
});

export const setQuestionList = (payload) => ({
    type: QUESTION_LIST,
    payload
});

export const setResponseItem = (payload) => ({
    type: SET_RESPONSE_ITEM,
    payload
});

export const setFilters = (payload) => ({
    type: SET_FILTERS,
    payload
});

export const setFilterResponse = (payload) => ({
    type: SET_FILTER_RESPONSE,
    payload
});

export const resetFilterResponse = () => ({
    type: RESET_FILTER_RESPONSE
});
