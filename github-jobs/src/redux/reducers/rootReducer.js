import { combineReducers } from 'redux';
import { jobsReducer } from './jobsReducer';
import { pageReducer } from './pageReducer';

export const rootReducer = combineReducers({

    githubJobs: jobsReducer,
    pageNow: pageReducer

});