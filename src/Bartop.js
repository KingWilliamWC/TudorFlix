import React, { Component } from 'react';

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
    }
// 2x = 10
    HandleButtonClick(senderIndex){
        if(senderIndex !== this.state.currentButtonIndex){
            var tempButtonState = this.state.buttonStates;
            tempButtonState[senderIndex] = 'activeOption';
            tempButtonState[this.state.currentButtonIndex] = 'nonActiveOption';
            this.setState({buttonStates: tempButtonState, currentButtonIndex: senderIndex})
        }

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
                    <img id='userImg' alt='' src={UserPicture}></img>
                </div>
            </div>
        )
    }
}

export default Bartop;