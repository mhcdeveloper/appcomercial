import axios from 'axios';

import api from './api';

const CancelToken = axios.CancelToken;

export const getModulos = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.get('/api/filtro/modulosList').then(async modulos => {
                resolve(modulos.data);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const getChecklist = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/mobile/checklist/listarChecklist', data).then(checklist => {
                resolve(checklist.data);
            }).catch(err => {
                console.log(err)
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}
