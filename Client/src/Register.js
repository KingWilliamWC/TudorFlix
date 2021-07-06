import React, { Component } from 'react';
import axios from 'axios';

//body structure css
import './App.css';

import './Register.css';

import ArrowSVG from './SVG/Arrow-Solid.svg';
import DramaSVG from './SVG/Drama-Solid.svg';
import AdventureSVG from './SVG/Adventure-Solid.svg';
import ComedySVG from './SVG/Comedy-Solid.svg';
import HorrorSVG from './SVG/Horror-Solid.svg';
import SciFiSVG from './SVG/SciFi-Solid.svg';
import ActionSVG from './SVG/Action-Solid.svg';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorID: ['errorSubmissionContainer', 'errorSubmissionContainer show'],
            errorState: 0,
            errorMessage: '',
            isSigningUp: false,
            pageContent: [
                        {'title': 'Log In', 'subtitle': 'Login To Your TudorFlix Account', 'topright': <p>Don't have an account? <span onClick={() => (this.UserChangeSignType('signup'))} id='createAccountLink'>Create Account</span></p>},
                {'title': 'Sign Up', 'subtitle': 'Create a TudorFlix Account', 'topright': <p>Already Have An Account? <span onClick={() => (this.UserChangeSignType('login'))} id='createAccountLink'>Log In</span></p>}
            ],
            pageContentState: 0,
            loginClass: ['loginContainer', 'loginContainer loginContainerHide'],
            loginClassState: 0,
            favouritesClass: ['surveyFavouritesContainer', 'surveyFavouritesContainerShow surveyFavouritesContainer'],
            favouritesClassState: 0,
            genreClasses: [],
            currentSelectedGenres: [],
        }

        this.handleGenreClick =  this.handleGenreClick.bind(this)
    }

    handleFormInput= (event) => {
        if(event.key === 'Enter'){
            this.userSubmitInfo();
        }
    }

    UserChangeSignType = (type) =>{
        document.getElementsByClassName('userInputBox')[0].value = '';
        document.getElementsByClassName('userInputBox')[1].value = '';
        if(type === 'signup'){
            this.setState({isSigningUp: true, pageContentState: 1, errorState: 0});
        }else if(type === 'login'){
            this.setState({isSigningUp: false, pageContentState: 0, errorState: 0});
        }
    }

    initializeSignUpSurvey = () => {
        this.setState({loginClassState: 1, favouritesClassState: 1});
    }

    componentDidMount() {
        var genreStyleClassesToAdd = []
        for (var x = 0; x < 6; x++){
            genreStyleClassesToAdd.push('genreContainer');
        }
        this.setState({genreClasses: genreStyleClassesToAdd});
    }

    userSubmitInfo = async () =>{ //LOG IN
        var username = document.getElementsByClassName('userInputBox')[0].value;
        var password = document.getElementsByClassName('userInputBox')[1].value;
        if(this.state.isSigningUp === false){
            await axios.post(this.props.routes.signin, {'username': username, 'password': password})
            .then(res => {
                if(res.data.status === 'failure'){
                    this.setState({ errorState: 1, errorMessage: 'Username or Password is Incorrect'})
                }else if(res.data.message === 'user_successful'){
                    localStorage.setItem('username', JSON.stringify(res.data.user));
                    // console.log(JSON.parse((localStorage.getItem('username'))).genres);
                    window.location.replace(this.props.routes.home)
                }
            })
        }else{ //SIGN UP
            await axios.post(this.props.routes.isUser, {'username': username, 'password': password})
            .then(res => {
                if(res.data.message === 'user_already_exists'){
                    this.setState({ errorState: 1, errorMessage: 'Username already exists'});
                }else if(res.data.message === 'user_new'){
                    this.setState({username: username, password: password});
                    this.initializeSignUpSurvey();
                }
            })
        }
    }

    userSubmitSurvey = async () =>{// SUBMIT USER INFORMATION FOR SIGNINGUP
        await axios.post(this.props.routes.signup, {'username': this.state.username, 'password': this.state.password, 'genres': this.state.currentSelectedGenres})
        .then(res =>{
            if(res.data.status === 'success'){
                localStorage.setItem('username', JSON.stringify(res.data.user));
                window.location.replace(this.props.routes.home)
            }
        })
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
    
    render(){
        return(
            <div id='registerApp'>
                <div id='topContainer'>
                    <div id='logoContainer'>
                        <p><span id='firstPartLogo'>Tudor</span><span>Flix</span></p>
                    </div>
                    <div id='signUpLinkContainer'>
                        {/* <p>Don't have an account? <span onClick={this.UsergotoSignUp} id='createAccountLink'>Create Account</span></p> */}
                        {this.state.pageContent[this.state.pageContentState].topright}
                    </div>
                </div>
                <div className={this.state.loginClass[this.state.loginClassState]}>
                    <p id='loginTitle'>{this.state.pageContent[this.state.pageContentState].title}</p>
                    <p id='sublogintitle'>{this.state.pageContent[this.state.pageContentState].subtitle}</p>
                    <div className={this.state.errorID[this.state.errorState]}>
                        <p id='errorTitle'>Error</p>
                        <p>{this.state.errorMessage}</p>
                    </div>
                    <div id='formContainer'>
                        <p className='InputTitleText'>Username:</p>
                        <input onKeyPress={this.handleFormInput} type='username' className='userInputBox'></input>
                        <div id='passwordForgotContainer'>
                            <p className='InputTitleText'>Password:</p>
                            <p id='forgotPasswordText'>Forgot Your Password?</p>
                        </div>
                        <input onKeyPress={this.handleFormInput} type='password' className='userInputBox'></input>
                    </div>
                    <div onClick={this.userSubmitInfo} id='loginButtonContainer'>
                        <img className='loginButton' src={ArrowSVG} alt=''></img>
                    </div>
                    
                </div>
                <div id='surveyContainer'>
                    <p id='surveyTitle'>What Are Your Favourite Genres? (Select Up To 3)</p>
                    <div className={this.state.favouritesClass[this.state.favouritesClassState]}>
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
                
                <p id='allrightsText'>TudorFlix&#174; 2021 </p>
            </div>
        )
    }
}

export default Register;
