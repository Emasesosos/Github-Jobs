import { types } from './../types/types';

const initialState = {
    getApp: true
};

export function jobsReducer(state = initialState, action) {

    switch (action.type) {
        case types.MAKE_REQUEST:
            return {
                jobs: [],
                loading: true
            }
        case types.GET_DATA:
            return {
                ...state,
                jobs: action.payload.jobs,
                loading: false
            }
        case types.ERROR:
            return {
                ...state,
                jobs: [],
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }

}