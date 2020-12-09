import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from '../components/Home';
import { JobDetail } from '../components/Jobs/JobDetail';

export const AppRoutes = () => {

    return (
        
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } /> 
                    <Route exact path="/job/:jobId" component={ JobDetail } />
                </Switch>
            </div>
        </Router>

    );

};
