import React, { Component } from 'react';

import './Sidebar.css';

import HouseSVG from './SVG/House-Solid.svg';
import StarSVG from './SVG/Star-Solid.svg';
import GridSVG from './SVG/Grid-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import RewindSVG from './SVG/Rewind-Solid.svg';
import OptionSVG from './SVG/Option-Solid.svg';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonStates: [],
            currentButtonIndex: 0,
        }
    }

    componentDidMount(){
        var buttonsStatesToAdd = []
        for(var i = 0; i < 5; i++){
            buttonsStatesToAdd.push('sideButton');
        }
        buttonsStatesToAdd[0] = 'sideButton sideButtonActive';
        this.setState({
            buttonStates: buttonsStatesToAdd
        })
    }
    
    HandleButtonClick(senderIndex){
        if(senderIndex !== this.state.currentButtonIndex){
            var tempButtonState = this.state.buttonStates;
            tempButtonState[senderIndex] = 'sideButton sideButtonActive';
            tempButtonState[this.state.currentButtonIndex] = 'sideButton';
            this.setState({buttonStates: tempButtonState, currentButtonIndex: senderIndex});
        }
    }

    render(){
        return(
            <div id='sidebar'>
                <div id='sidebarSide'>
                    <div id='sidebuttonsContainer'>
                        <div className='sideButtonsSection'>
                            <div onClick={() => this.HandleButtonClick(0)} className={this.state.buttonStates[0]}>
                                <img className='sideButtonIcon' alt='' src={HouseSVG}></img>
                                <p className='sideButtonText'>Home</p>
                            </div>
                            <div onClick={() => this.HandleButtonClick(1)} className={this.state.buttonStates[1]}>
                                <img className='sideButtonIcon' alt='' src={StarSVG}></img>
                                <p className='sideButtonText'>Popular</p>
                            </div>
                            <div onClick={() => this.HandleButtonClick(2)} className={this.state.buttonStates[2]}>
                                <img className='sideButtonIcon' alt='' src={GridSVG}></img>
                                <p className='sideButtonText'>Discover</p>
                            </div>
                        </div>
                        <div className='sideButtonsSection'>
                            <div onClick={() => this.HandleButtonClick(3)} className={this.state.buttonStates[3]}>
                                <img className='sideButtonIcon' alt='' src={HeartSVG}></img>
                                <p className='sideButtonText'>Favourites</p>
                            </div>
                            <div onClick={() => this.HandleButtonClick(4)} className={this.state.buttonStates[4]}>
                                <img className='sideButtonIcon' alt='' src={RewindSVG}></img>
                                <p className='sideButtonText'>Watch Later</p>
                            </div>
                        </div>
                        <div id='optionButtonContainer'>
                            <div className='sideButton'>
                                    <img className='sideButtonIcon' alt='' src={OptionSVG}></img>
                                    <p className='sideButtonText'>Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='sidebarBottom'>
                    <div id='sidebuttonsContainer'>
                            <div className='sideButton sideButtonActive'>
                                <img className='sideButtonIcon' alt='' src={HouseSVG}></img>
                            </div>
                            <div className='sideButton'>
                                <img className='sideButtonIcon' alt='' src={StarSVG}></img>
                            </div>
                            <div className='sideButton'>
                                <img className='sideButtonIcon' alt='' src={GridSVG}></img>
                            </div>
                            <div className='sideButton'>
                                <img className='sideButtonIcon' alt='' src={HeartSVG}></img>
                            </div>
                            <div className='sideButton'>
                                <img className='sideButtonIcon' alt='' src={RewindSVG}></img>
                            </div>
                            <div className='sideButton'>
                                <img className='sideButtonIcon' alt='' src={OptionSVG}></img>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;