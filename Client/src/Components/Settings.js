import React, {Component} from 'react';
import axios from 'axios';

import './Settings.css';

import UserImage from '../img/User-Profile.png';
import EditSVG from '../SVG/Edit-Solid.svg';

class Settings extends Component{
    constructor(props){
        super(props);
        this.state = {
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
            currentUser: this.props.user,
            gennresMapped: [],
            readOnlyStates: [true, true, true]
        }
    }
    
    componentDidMount(){
        var genresToMap = [];
        for(var i = 0; i < 3; i++){
            for(var x = 0; x < this.state.genreMap.genres.length; x++){
                if(this.state.genreMap.genres[x].id === this.props.user.genres[i]){
                    genresToMap.push(this.state.genreMap.genres[x].name);
                }
            }
        }
        document.getElementById('userSettingsProfileName').value = this.props.user.username;
        document.getElementById('userIncludeAdultBox').checked = this.props.user.includeadult;
        document.getElementsByClassName('settingsValueInput')[0].value = "william@gmail.com";
        this.setState({gennresMapped: genresToMap});
    }

    userBlurField = (index) => {
        var currentStates = this.state.readOnlyStates;
        currentStates[index] = true;
        this.setState({readOnlyStates: currentStates});
    }

    userClickEdit = (index) =>{
        var currentStates = this.state.readOnlyStates;
        if(currentStates[index] === true){
            currentStates[index] = false;
        }else{
            currentStates[index] = true; //user finished with editing
        }
        this.setState({readOnlyStates: currentStates});
    }

    async sendUserSavedata(saveData){
        await axios.post(this.props.routes.update, {saveData})
        .then(res => {
            console.log(res.data);
        })
    }

    userSave = () =>{
        var currentUser = this.state.currentUser;
        currentUser.username = document.getElementById('userSettingsProfileName').value;
        currentUser.includeadult = document.getElementById('userIncludeAdultBox').checked;
        this.setState({currentUser: currentUser});
        this.sendUserSavedata(currentUser)
    }
    
    render(){
        return(
            <div id='SettingsTab'>
                <div id='titleContainer'>
                    <p id='accountSettingsTitle'>Account Settings</p>
                </div>
                <div id='mainSettingsContainer'>
                    <div id='userProfileContainer'>
                        <img alt='' id='userSettingsProfileImage' src={UserImage}></img>
                        <input readOnly={this.state.readOnlyStates[0]} type='text' onBlur={() => this.userBlurField(0)} id='userSettingsProfileName'></input>
                        <img onClick={() => this.userClickEdit(0)} className='userEditButton' alt='' src={EditSVG}></img>
                    </div>
                    <div id='userInfoSettingsContainer'>
                        <div className='settingsItem'>
                            <p className='settingsTitle'>Email:</p>
                            <input onBlur={() => this.userBlurField(1)} readOnly={this.state.readOnlyStates[1]} className='settingsValue settingsValueInput'></input>
                            <img onClick={() => this.userClickEdit(1)} className='userEditButton mainEdit' alt='' src={EditSVG}></img>
                        </div>
                        <div className='settingsItem'>
                            <p className='settingsTitle'>Password:</p>
                            <p className='settingsValue'>.............</p>
                        </div>
                        <div className='settingsItem'>
                            <p className='settingsTitle'>Interests:</p>
                            <p className='settingsValue'>{this.state.gennresMapped.join(', ')}</p>
                            <img className='userEditButton mainEdit' alt='' src={EditSVG}></img>
                        </div>
                        <div className='settingsItem'>
                            <p className='settingsTitle'>Include Adult:</p>
                            <input value={true} id='userIncludeAdultBox' type='checkbox'/>
                    </div>
                </div>
            </div>
            <div onClick={() => this.userSave()} id='saveBtn'>
                <p>Save</p>
            </div>
        </div>
        )
    }
}

export default Settings;