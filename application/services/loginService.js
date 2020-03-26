import axios from 'axios';

import { storeUser, getUserInfo } from '../utils';
import api from './api';

const CancelToken = axios.CancelToken;

export const login = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/usuario/login', user).then(async res => {
                if (res.data.LIBERADO == 1) {
                    api.defaults.headers.common['x-access-token'] = res.data.TOKEN;
                    await storeUser(JSON.stringify(res.data));
                    resolve(true);
                } else {
                    reject(false);
                }
            }).catch(err => {
                console.log(err)
                reject(false);
            })
        } catch (error) {
            console.log(error)
            reject(error);
        }
    });
}

export const forgotPassword = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/mo/usuario/resetarSenha', user).then(async res => {
                resolve(true);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const filtrarClientes = async (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/filtro/clientes', { parameter: name, remetrans: true }).then(async res => {
                resolve(res.data);
            })
        } catch (error) {
            reject(error);
        }
    });
}