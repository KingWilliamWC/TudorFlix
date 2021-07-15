import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Register from './Register';

class AppRouter extends Component {
    
    render(){
        var urlBase = 'https://tudorflix.wolseley-charles.co.uk';
        var routes = {
            'signin': `${urlBase}/api/signin`,
            'signup': `${urlBase}/api/signup`,
            'signPage': `https://tudorflix.wolseley-charles.co.uk/`,
            'isUser': `${urlBase}/api/isUser`,
            'update': `${urlBase}/api/updateaccount`,
            'home': `https://tudorflix.wolseley-charles.co.uk/app`,
            'moviehome': `${urlBase}/api/home`,
            'movie': `${urlBase}/api/movie/?`,
            'popular': `${urlBase}/api/popular`,
            'discover': `${urlBase}/api/discover`,
            'search': `${urlBase}/api/search`,
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