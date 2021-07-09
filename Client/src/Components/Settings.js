import React, {Component} from 'react';
import axios from 'axios';

import './Settings.css';

import UserImage from '../img/User-Profile.png';
import EditSVG from '../SVG/Edit-Solid.svg';
import ArrowSVG from '../SVG/Arrow-Solid.svg';
import DramaSVG from '../SVG/Drama-Solid.svg';
import AdventureSVG from '../SVG/Adventure-Solid.svg';
import ComedySVG from '../SVG/Comedy-Solid.svg';
import HorrorSVG from '../SVG/Horror-Solid.svg';
import SciFiSVG from '../SVG/SciFi-Solid.svg';
import ActionSVG from '../SVG/Action-Solid.svg';

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
            surveyGenreIndex: [
                {'id': 18}, {'id': 28}, {'id': 12}, {'id': 35}, {'id': 27}, {'id': 878}
            ],
            currentUser: this.props.user,
            gennresMapped: [],
            readOnlyStates: [true, true, true],
            genreClasses: [],
            currentSelectedGenres: [],
            genreSelectClass: ['surveyContainerSettingsHide', 'surveyContainerSettingsHide surveyContainerSettingsShow'],
            genreSelectState: 0,
            mainSettingsClass: ['mainSettingsContainer', 'mainSettingsContainer mainSettingsContainerHide'],
            buttonSaveClass: ['saveBtn', 'saveBtn saveBtnHide'],
            mainSettingsState: 0,
        }
    }
    
    componentDidMount(){
        var genresToMap = [];
        console.log(this.state.surveyGenreIndex[0]);
        var genreStyleClassesToAdd = []
        var currentGenreArray = this.state.currentSelectedGenres;
        for (var x = 0; x < 6; x++){
            genreStyleClassesToAdd.push('genreContainer');
        }
        for(var i = 0; i < this.props.user.genres.length; i++){
            for(var x = 0; x < this.state.genreMap.genres.length; x++){
                if(this.state.genreMap.genres[x].id === this.props.user.genres[i]){
                    genresToMap.push(this.state.genreMap.genres[x].name);
                }
            }
            for(var j = 0; j < this.state.surveyGenreIndex.length; j++){
                if(this.props.user.genres[i] === this.state.surveyGenreIndex[j].id){
                    genreStyleClassesToAdd[j] = 'genreContainer genreSelected';
                    currentGenreArray.push(this.state.surveyGenreIndex[j].id);
                }
            }
        }
        console.log(currentGenreArray);
        document.getElementById('userSettingsProfileName').value = this.props.user.username;
        document.getElementById('userIncludeAdultBox').checked = this.props.user.includeadult;
        document.getElementsByClassName('settingsValueInput')[0].value = this.props.user.email;
        this.setState({gennresMapped: genresToMap, genreClasses: genreStyleClassesToAdd, currentSelectedGenres: currentGenreArray});
    }

    handleGenreClick(index, genreNum){
        if(this.state.currentSelectedGenres.length < 3 && !this.state.currentSelectedGenres.includes(genreNum)){
            var currentStyleArray = this.state.genreClasses;
            var currentGenreArray = this.state.currentSelectedGenres;
            currentGenreArray.push(genreNum);
            currentStyleArray[index] = 'genreContainer genreSelected';
            this.setState({genreClasses: currentStyleArray, currentSelectedGenres: currentGenreArray});
        }else if(this.state.currentSelectedGenres.includes(genreNum)){ //user selected the genre already
            currentStyleArray = this.state.genreClasses;
            currentStyleArray[index] = 'genreContainer';
            currentGenreArray = this.state.currentSelectedGenres;
            currentGenreArray = currentGenreArray.filter(item => item !== genreNum);
            this.setState({genreClasses: currentStyleArray, currentSelectedGenres: currentGenreArray});
        }
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
    userSubmitSurvey = () =>{
        if(this.state.currentSelectedGenres.length >= 1){
            var genresToMap = [];
            console.log(this.state.currentSelectedGenres);
            for(var i = 0; i < this.state.currentSelectedGenres.length; i++){
                for(var x = 0; x < this.state.genreMap.genres.length; x++){
                    if(this.state.genreMap.genres[x].id === this.state.currentSelectedGenres[i]){
                        genresToMap.push(this.state.genreMap.genres[x].name);
                    }
                }
            }
            console.log(genresToMap);
            this.setState({genreSelectState: 0, mainSettingsState: 0, gennresMapped: genresToMap});
        }

    }

    userEditGenres = () =>{
        this.setState({genreSelectState: 1, mainSettingsState: 1});
    }

    async sendUserSavedata(saveData){
        await axios.post(this.props.routes.update, {saveData})
            .then(res => {
                localStorage.removeItem('username');
                localStorage.setItem('username', JSON.stringify(res.data));
            })
    }

    userSave = () =>{
        var currentUser = this.state.currentUser;
        currentUser.username = document.getElementById('userSettingsProfileName').value;
        currentUser.includeadult = document.getElementById('userIncludeAdultBox').checked;
        currentUser.email = document.getElementsByClassName('settingsValueInput')[0].value;
        currentUser.genres = this.state.currentSelectedGenres;
        this.setState({currentUser: currentUser});
        this.sendUserSavedata(currentUser)
    }
    
    render(){
        return(
            <div id='SettingsTab'>
                <div id='titleContainer'>
                    <p id='accountSettingsTitle'>Account Settings</p>
                </div>
                <div className={this.state.mainSettingsClass[this.state.mainSettingsState]}>
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
                            <img onClick={() => this.userEditGenres()} className='userEditButton mainEdit' alt='' src={EditSVG}></img>
                        </div>
                        <div className='settingsItem'>
                            <p className='settingsTitle'>Include Adult:</p>
                            <input value={true} id='userIncludeAdultBox' type='checkbox'/>
                    </div>
                </div>
            </div>
            <div onClick={() => this.userSave()} className={this.state.buttonSaveClass[this.state.mainSettingsState]}>
                <p>Save</p>
            </div>
            <div className={this.state.genreSelectClass[this.state.genreSelectState]}>
                <p id='surveyTitle'>What Are Your Favourite Genres? (Select Up To 3)</p>
                <div className='surveyFavouritesContainer'>
                    <div onClick={() => this.handleGenreClick(0, 18)} className={this.state.genreClasses[0]}>
                        <img className='genreImage' src={DramaSVG} alt=''></img>
                        <p className='genreName'>Drama</p>
                    </div>
                    <div onClick={() => this.handleGenreClick(1, 28)} className={this.state.genreClasses[1]}>
                        <img className='genreImage' src={ActionSVG} alt=''></img>
                        <p className='genreName'>Action</p>
                    </div>
                    <div onClick={() => this.handleGenreClick(2, 12)} className={this.state.genreClasses[2]}>
                        <img className='genreImage' src={AdventureSVG} alt=''></img>
                        <p className='genreName'>Adventure</p>
                    </div>
                    <div onClick={() => this.handleGenreClick(3, 35)} className={this.state.genreClasses[3]}>
                        <img className='genreImage' src={ComedySVG} alt=''></img>
                        <p className='genreName'>Comedy</p>
                    </div>
                    <div onClick={() => this.handleGenreClick(4, 27)} className={this.state.genreClasses[4]}>
                        <img className='genreImage' src={HorrorSVG} alt=''></img>
                        <p className='genreName'>Horror</p>
                    </div>
                    <div onClick={() => this.handleGenreClick(5, 878)} className={this.state.genreClasses[5]}>
                        <img className='genreImage' src={SciFiSVG} alt=''></img>
                        <p className='genreName'>Science Fiction</p>
                    </div>
                </div>
                <div onClick={this.userSubmitSurvey} id='surveyButtonContainer'>
                    <img className='loginButton' src={ArrowSVG} alt=''></img>
                </div>
            </div>
        </div>
        )
    }
}

export default Settings;