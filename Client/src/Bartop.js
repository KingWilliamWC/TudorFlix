import React, { Component, useEffect, useState, useRef } from 'react';

import './Bartop.css';

import SearchSVG from './SVG/Search-Solid.svg';
import BellSVG from './SVG/Bell-Solid.svg';

import UserPicture from './img/User-Profile.png';

class Bartop extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonStates: [],
            currentButtonIndex: 0,
            userDropDownClasses: ['dropdown-content-hide', 'dropdown-content-hide dropdown-content'],
            userDropDownState: 0,
            
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
        document.addEventListener("mousedown", (event) => {
            if (!concernedElement.contains(event.target)) {
                if(this.state.userDropDownState === 1){
                    this.setState({userDropDownState: 0});
                    console.log('hide');
                }
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
    render(){
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
                    <img id='searchIcon' alt='' src={SearchSVG}></img>
                    <input placeholder='type to start a search...' id='searchBox'></input>
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
            </div>
        )
    }
}

export default Bartop;