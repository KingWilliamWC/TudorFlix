import React, { Component } from 'react';

//App components
import Sidebar from './Sidebar';

//home section components
import Bartop from './Bartop';
import MoviesHome from './MoviesHome';

//body structure css
import './App.css';

class App extends Component {
    render(){
        return(
            <div id='app'>
                <Sidebar/>
                
                <div id='mainContent'>
                    <Bartop />
                    <MoviesHome />
                </div>
            </div>
        )
    }
}

export default App;