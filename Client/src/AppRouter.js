import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Register from './Register';

class AppRouter extends Component {
    
    render(){
        var urlBase = 'https://52.151.90.27';
        var routes = {
            'signin': `${urlBase}/api/signin`,
            'signup': `${urlBase}/api/signup`,
            'isUser': `${urlBase}/api/isUser`,
            'update': `${urlBase}/api/updateaccount`,
            'home': `${urlBase}/app`,
            'moviehome': `${urlBase}/api/home`,
            'movie': `${urlBase}/api/movie/?`,
        }
        return(
            <Router>
                <Switch>
                    <Route exact path='/app' render={() => (
                        <App routes={routes}/>
                    )} />
                    <Route exact path='/' render={() => (
                        <Register routes={routes}/>
                    )} />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;