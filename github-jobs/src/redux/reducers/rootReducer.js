import { combineReducers } from 'redux';
import { jobsReducer } from './jobsReducer';

export const rootReducer = combineReducers({

    githubJobs: jobsReducer,

});