import { types } from './../types/types';

const initialState = {
    pagePag: 1,
    postsPerPage: 5
};

export function pageReducer(state = initialState, action) {

    switch (action.type) {
        case types.PAGE_PREV:
            return {
                ...state,
                pagePag: state.pagePag + action.payload.pagePag
            }
        case types.PAGE_NEXT: {
            return {
                ...state,
                pagePag: state.pagePag + action.payload.pagePag
            }
        }
        case types.PAGE_INI: {
            return {
                ...state,
                pagePag: action.payload.pagePag
            }
        }
        default:
            return state;
    }

}