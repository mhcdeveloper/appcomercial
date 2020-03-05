import { SET_CLIENTE, HANDLE_CLOSE } from "../consts";

export const setCliente = (payload) => ({
    type: SET_CLIENTE,
    payload: payload ? payload : false
});

export const handleClose = () => ({
    type: HANDLE_CLOSE
});
