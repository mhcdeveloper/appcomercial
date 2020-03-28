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

export const getListHistoricoVendasProdutos = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/historicoVendas/listHistoricoVendasByProduto', data).then(async historico => {
                resolve(historico);
            }).catch(err => {
                reject(false);
            })
        } catch (error) {
            console.log(error)
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
            response = await api.post('/api/pesquisar/clientes', { name }).then(async res => {
                resolve(res.data);
            })
        } catch (error) {
            reject(error);
        }
    });
}

export const filtrarProdutos = async (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(name)
            const source = CancelToken.source();
            let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 14000);
            response = await api.post('/api/pesquisar/produtos', { name }).then(async res => {
                console.log(res)
                resolve(res.data);
            })
        } catch (error) {
            console.log(error)
            reject(error);
        }
    });
}