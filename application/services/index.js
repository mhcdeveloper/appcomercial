import axios from 'axios';

import api from './apiMobile';

const CancelToken = axios.CancelToken;

export const getNps = async (cliente) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/nps/listNps', cliente).then(async nps => {
                resolve(nps);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const getListPerformanceEntrega = async (cliente) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/performanceEntrega/listPerformanceEntrega', cliente).then(async performance => {
                resolve(performance);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const getListNotasTransito = async (cliente) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/notasTransito/listNotasTransito', cliente).then(async performance => {
                resolve(performance);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const getListIndicadores = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/nps/listIndicadores', data).then(async nps => {
                resolve(nps);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            console.log(error)
            reject(error);
        }
    });
}
