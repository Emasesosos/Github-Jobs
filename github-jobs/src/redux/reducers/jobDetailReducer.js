import { types } from './../types/types';

const initialState = {
    jobDetails: {}
};

export function jobDetailReducer(state = initialState, action) {

    switch (action.type) {
        case types.GET_JOB_DETAIL:
            return {
                jobDetails: action.payload.jobDetails
            }
        case types.DELETE_JOB_DETAIL:
            return {
                jobDetails: {}
            }
        default:
            return state;
    }

}