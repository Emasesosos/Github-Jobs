import { types } from './../types/types';

export const makeRequest = () => {

    return {
        type: types.MAKE_REQUEST
    };

};

export const getData = (res) => {

    return {
        type: types.GET_DATA,
        payload: {
            jobs: res.data,
            info: res
        }
    };

};

export const errorGetData = (e) => {

    return {
        type: types.ERROR,
        payload: {
            error: e
        }
    };

};