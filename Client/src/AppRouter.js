import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Register from './Register';

class AppRouter extends Component {
    
    render(){
        var routes = {
            'signin': 'https://52.151.90.27/api/signin',
            'signup': 'https://52.151.90.27/api/signup',
            'isUser': 'https://52.151.90.27/api/isUser',
            'update': 'https://52.151.90.27/api/updateaccount',
            'home': 'https://52.151.90.27/app',
            'moviehome': 'https://52.151.90.27/api/home',
            'movie': 'https://52.151.90.27/api/movie/?',
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