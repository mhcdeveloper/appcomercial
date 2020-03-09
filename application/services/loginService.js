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
                    await storeUser(JSON.stringify(res.data));
                    resolve(true);
                } else {
                    reject(false);
                }
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
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