import axios from 'axios';

import api from './api';

const CancelToken = axios.CancelToken;

export const getFilters = async (sql, name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/mobile/checklist/filters', { sql, name }).then(async data => {
                resolve(data.data);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}

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

export const salvarResposta = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/mobile/checklist/salvarRespostas', data).then(success => {
                console.log(success)
                resolve(success.data);
            }).catch(err => {
                console.log(err)
                reject(false);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const salvarAnexosResposta = async (images, IDG115) => {
    return new Promise(async (resolve, reject) => {
        for (const [index, img] of images.entries()) {
            const anexo = new FormData();
            anexo.append('IDG114', img.IDG114);
            anexo.append('IDG115', IDG115);
            anexo.append('DSMIMETP', img.DSMIMETP);
            anexo.append('ANFOTO', img.base64);
            try {
                const source = CancelToken.source();
                let response = null;
                setTimeout(() => {
                    if (response === null) {
                        source.cancel();
                    }
                }, 20000);
                response = await api.post('/api/mobile/checklist/salvarAnexosResposta', anexo).then(success => {
                    if (index + 1 == images.length) {
                        resolve(true);
                    }
                }).catch(err => {
                    reject(false);
                })
            } catch (error) {
                reject(error);
            }
        }
    });
}

