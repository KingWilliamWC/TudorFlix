import React, { Component } from 'react';
import axios from 'axios';

import './Bartop.css';

import SearchSVG from './SVG/Search-Solid.svg';
import BellSVG from './SVG/Bell-Solid.svg';

import UserPicture from './img/User-Profile.png';

import MovieSlideUp from './MovieFullTab';
import SearchResultItem from './SearchResultItem';

class Bartop extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonStates: [],
            currentButtonIndex: 0,
            userDropDownClasses: ['dropdown-content-hide', 'dropdown-content-hide dropdown-content'],
            userDropDownState: 0,
            SearchMovies: [],
            SearchMovieItems: [],
            SearchResultsClasses: ['searchResultsContainerHide', 'searchResultsContainerHide searchResultsContainer'],
            SearchResultsState: 0,
            slideUpClass: ['movieFullTabContainer', 'movieFullTabContainerClosed'],
            isOpen: 0,
            currentMovieData: {},
        }
    }

    componentDidMount(){
        var buttonsStatesToAdd = []
        for(var i = 0; i < 2; i++){
            buttonsStatesToAdd.push('nonActiveOption');
        }
        buttonsStatesToAdd[0] = 'activeOption';
        this.setState({
            buttonStates: buttonsStatesToAdd
        })

        const concernedElement = document.getElementsByClassName('dropdown-content-hide')[0]
        const searchContainer = document.getElementById('searchContainer')
        document.addEventListener("mousedown", (event) => {
            if (!concernedElement.contains(event.target)) {
                if(this.state.userDropDownState === 1){
                    this.setState({userDropDownState: 0}); // hide profile dropdown
                }
            }if(!searchContainer.contains(event.target)){
                this.setState({SearchResultsState : 0}) // search results box
            }
        });
    }

    HandleButtonClick(senderIndex){
        if(senderIndex !== this.state.currentButtonIndex){
            var tempButtonState = this.state.buttonStates;
            tempButtonState[senderIndex] = 'activeOption';
            tempButtonState[this.state.currentButtonIndex] = 'nonActiveOption';
            this.setState({buttonStates: tempButtonState, currentButtonIndex: senderIndex})
        }

    }

    handleClickOutside = () => {
        console.log('click outside');
        if(!this.state.userDropDownState === 0){
            this.setState({userDropDownState: 0});
        }
    }

    async getMovieInfo(movieID){
        await axios.get(`${this.props.routes.movie}id=${movieID}`)
            .then(res => {
                var statetoset = 0;
                if(this.state.isOpen === 0){
                    statetoset = 1;
                }
                this.setState({currentMovieData: res.data, isOpen: statetoset});
                return res;
            })
    }

    handleMovieClick = (movieID) => {
        console.log(movieID);
        if(movieID !== 'none'){
            this.getMovieInfo(movieID)
        }else{
            if(this.state.isOpen === 0){
                this.setState({isOpen: 1}); // if by some magic the user has done this
            }else{
                this.setState({isOpen: 0});
                this.forceUpdate();
            }
        }
    }

    OnUserClickProfile = () => {
        if(this.state.userDropDownState === 0){
            this.setState({userDropDownState: 1});
        }else{
            this.setState({userDropDownState: 0});
        }
    }

    handleDropDownClick = (index) => {
        index === 0 ? this.props.HandleTabClick(5) : this.props.signoutHandler();
    }

    handleUserSearchEnter = (event) => {
        if(event.key === 'Enter'){
            var searchQuery = document.getElementById('searchBox').value;
            axios.post(this.props.routes.search, {searchQuery: searchQuery})
            .then(res => {
                // console.log(res.data.data[0].results);
                if(res.data.data.length > 0){
                    this.setState({SearchMovies: res.data.data[0].results})
                }
                else{
                    this.setState({SearchMovies: []})
                }
            })
        }
    }

    handleSearchInputFocus = (type) =>{
        if(type === 'focus'){
            this.setState({SearchResultsState : 1})
        }
    }
    render(){
        this.state.SearchMovieItems = []
        if(this.state.SearchMovies.length > 0){
            for(var i = 0; i < this.state.SearchMovies.length; i++){
                this.state.SearchMovieItems.push(
                    // <div onClick={() => this.handleMovieClick(this.state.SearchMovies[i].id)} key={this.state.SearchMovies[i].id} className='searchResultItem'>
                    //     <div className='searchResultItemContent'>
                    //         <img className='searchResultItemImage' alt='' src={`https://image.tmdb.org/t/p/w1280/${this.state.SearchMovies[i].poster_path}`}></img>
                    //         <p>{this.state.SearchMovies[i].title}</p>
                    //     </div>
                    // </div>
                    <SearchResultItem handleMovieClick={this.handleMovieClick} data={this.state.SearchMovies[i]} />
                )
            }
        }else{
            this.state.SearchMovieItems[0] = <p id='NullResultsText'>No Results...</p>
        }

        return(
            <div id='bartop'>
                <div id='contentSelector'>
                    <div onClick={() => this.HandleButtonClick(0)} className='contentOption'>
                        <p className={this.state.buttonStates[0]}>Movies</p>
                    </div>
                    <div id='seperator'></div>
                    <div onClick={() => this.HandleButtonClick(1)} className='contentOption'>
                        <p className={this.state.buttonStates[1]}>TV Series</p>
                    </div>
                </div>
                <div id='searchContainer'>
                    <div id='searchContainerContent'>
                        <div id='searchContainer'>
                            <img id='searchIcon' alt='' src={SearchSVG}></img>
                            <input autoComplete="off" onBlur={() => this.handleSearchInputFocus('blur')} onFocus={() => this.handleSearchInputFocus('focus')} onKeyPress={this.handleUserSearchEnter} placeholder='type to start a search...' id='searchBox'></input>
                        </div>
                        <div className={this.state.SearchResultsClasses[this.state.SearchResultsState]}>
                            <div className='searchResultsContent'>
                                {/* <div className='searchResultItem'>
                                    <div className='searchResultItemContent'>
                                        <img className='searchResultItemImage' alt='' src='https://image.tmdb.org/t/p/w1280//qAZ0pzat24kLdO3o8ejmbLxyOac.jpg'></img>
                                        <p>Black Widow</p>
                                    </div>
                                </div>
                                <div className='searchResultItem'>
                                    <div className='searchResultItemContent'>
                                        <img className='searchResultItemImage' alt='' src='https://image.tmdb.org/t/p/w1280//qAZ0pzat24kLdO3o8ejmbLxyOac.jpg'></img>
                                        <p>Black Widow</p>
                                    </div>
                                </div> */}
                                {this.state.SearchMovieItems}
                            </div>
                        </div>
                    </div>

                </div>
                <div id='userContainer'>
                    <img alt='' id='userBell' src={BellSVG}></img>
                    <img  onClick={() => this.OnUserClickProfile()} id='userImg' alt='' src={UserPicture}></img>
                    <div  class={this.state.userDropDownClasses[this.state.userDropDownState]}>
                        <div className='userNameContainer'>
                            <p className='userDropDownName'>{JSON.parse((localStorage.getItem('username'))).username}</p>
                        </div>
                        <div onClick={() => this.handleDropDownClick(0)} className='dropdownOption'>
                            <p>Settings</p>
                        </div>
                        <div onClick={() => this.handleDropDownClick(1)} className='dropdownOption'>
                            <p>Sign Out</p>
                        </div>
                    </div>
                </div>
                {this.state.isOpen ? <MovieSlideUp routes={this.props.routes} data={this.state.currentMovieData.data[0]} clickHandler={this.handleMovieClick} slideupClass={this.state.slideUpClass[this.state.isOpen]}/> : ''}
            </div>
        )
    }
}

export default Bartop;