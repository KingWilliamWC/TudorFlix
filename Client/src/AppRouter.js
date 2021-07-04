import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Register from './Register';

class AppRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/app' component={App} />
                    <Route exact path='/' component={Register} />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;