import { SET_MODULO, SET_ANSWER, SET_IMAGE, REMOVE_IMAGE, RESET_IMAGE } from '../consts';

export const setModulo = (payload) => ({
    type: SET_MODULO,
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
