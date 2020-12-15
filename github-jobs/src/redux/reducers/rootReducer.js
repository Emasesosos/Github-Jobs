import { combineReducers } from 'redux';
import { jobsReducer } from './jobsReducer';
import { pageReducer } from './pageReducer';
import { jobDetailReducer } from './jobDetailReducer';

export const rootReducer = combineReducers({

    githubJobs: jobsReducer,
    pageNow: pageReducer,
    jobDetails: jobDetailReducer

});