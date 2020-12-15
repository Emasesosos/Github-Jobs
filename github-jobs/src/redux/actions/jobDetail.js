import { types } from './../types/types';

export const guardarJob = (jobDetails) => {

    return {
        type: types.GET_JOB_DETAIL,
        payload: {
            jobDetails: jobDetails
        }
    };

};

