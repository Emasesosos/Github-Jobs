import React from 'react';
import { Provider } from 'react-redux';
import { store }  from './redux/store/store';
import { AppRoutes } from './routes/AppRoutes';

export const GithubJobs = () => {

    return (

        <Provider store={ store }>
            <AppRoutes />
        </Provider>
        
    );

};
