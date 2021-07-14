import React, { Component } from 'react';

//App components
import Sidebar from './Sidebar';

//home section components
import Bartop from './Bartop';

import MoviesHome from './Components/MoviesHome';
import Popular from './Components/Popular';
import Discover from './Components/Discover';
import Favourites from './Components/Favourites';
import WatchLater from './Components/WatchLater';
import Settings from './Components/Settings';

//body structure css
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            app: [<MoviesHome HandleTabClick={this.HandleTabClick} routes={this.props.routes}/>, <Popular routes={this.props.routes}/>, <Discover routes={this.props.routes}/>, <Favourites routes={this.props.routes}/>, <WatchLater/>, <Settings routes={this.props.routes} signoutHandler={this.SignUserOut} user={JSON.parse((localStorage.getItem('username')))}/>],
            appState: 0,
            user: JSON.parse((localStorage.getItem('username'))),
            genreMap: {"genres": [
                {
                  "id": 28,
                  "name": "Action"
                },
                {
                  "id": 12,
                  "name": "Adventure"
                },
                {
                  "id": 16,
                  "name": "Animation"
                },
                {
                  "id": 35,
                  "name": "Comedy"
                },
                {
                  "id": 80,
                  "name": "Crime"
                },
                {
                  "id": 99,
                  "name": "Documentary"
                },
                {
                  "id": 18,
                  "name": "Drama"
                },
                {
                  "id": 10751,
                  "name": "Family"
                },
                {
                  "id": 14,
                  "name": "Fantasy"
                },
                {
                  "id": 36,
                  "name": "History"
                },
                {
                  "id": 27,
                  "name": "Horror"
                },
                {
                  "id": 10402,
                  "name": "Music"
                },
                {
                  "id": 9648,
                  "name": "Mystery"
                },
                {
                  "id": 10749,
                  "name": "Romance"
                },
                {
                  "id": 878,
                  "name": "Science Fiction"
                },
                {
                  "id": 10770,
                  "name": "TV Movie"
                },
                {
                  "id": 53,
                  "name": "Thriller"
                },
                {
                  "id": 10752,
                  "name": "War"
                },
                {
                  "id": 37,
                  "name": "Western"
                }
              ]
            },
            buttonStates: [],
            currentButtonIndex: 0,
        }
    }

    componentDidMount(){
      var buttonsStatesToAdd = []
      for(var i = 0; i < 6; i++){
          buttonsStatesToAdd.push('sideButton');
      }
      buttonsStatesToAdd[0] = 'sideButton sideButtonActive';
      this.setState({
          buttonStates: buttonsStatesToAdd
      })
    }
    
    HandleTabClick = (index) =>{
      if(index !== this.state.currentButtonIndex){
        var tempButtonState = this.state.buttonStates;
        tempButtonState[index] = 'sideButton sideButtonActive';
        tempButtonState[this.state.currentButtonIndex] = 'sideButton';
        this.setState({buttonStates: tempButtonState, currentButtonIndex: index});
      }
      this.setState({appState: index});
      }

    SignUserOut = () => {
        localStorage.removeItem('username');
        window.location.replace(this.props.routes.signPage);
    }
    
    render(){
        return(
            <div id='app'>
                <Sidebar buttonStates={this.state.buttonStates} currentButtonIndex={this.state.currentButtonIndex} HandleTabClick={this.HandleTabClick}/>
                <div id='mainContent'>
                    {this.state.appState === 5? '' : <Bartop signoutHandler={this.SignUserOut} HandleTabClick={this.HandleTabClick} />}
                    {this.state.app[this.state.appState]}
                </div>
            </div>
        )
    }
}

export default App;