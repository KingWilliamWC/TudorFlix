import React, { Component } from 'react';

import './Sidebar.css';

import HouseSVG from './SVG/House-Solid.svg';
import StarSVG from './SVG/Star-Solid.svg';
import GridSVG from './SVG/Grid-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import RewindSVG from './SVG/Rewind-Solid.svg';
import OptionSVG from './SVG/Option-Solid.svg';

class Sidebar extends Component {
   
    HandleButtonClick(senderIndex){
        this.props.HandleTabClick(senderIndex);
    }

    render(){
        return(
            <div id='sidebar'>
                <div id='sidebarSide'>
                        <div id='logoContainerApp'>
                            <p id='desktopLogo'><span id='firstPartLogo'>Tudor</span><span>Flix</span></p>
                            <p id='mobileLogo'><span id='firstPartLogo'>T</span><span>F</span></p>
                        </div>
                    <div id='sidebuttonsContainer'>
                        <div className='sideButtonsSection'>
                            <div onClick={() => this.HandleButtonClick(0)} className={this.props.buttonStates[0]}>
                                <img className='sideButtonIcon' alt='' src={HouseSVG}></img>
                                <p className='sideButtonText'>Home</p>
                            </div>
                            <div onClick={() => this.HandleButtonClick(1)} className={this.props.buttonStates[1]}>
                                <img className='sideButtonIcon' alt='' src={StarSVG}></img>
                                <p className='sideButtonText'>Popular</p>
                            </div>
                            <div onClick={() => this.HandleButtonClick(2)} className={this.props.buttonStates[2]}>
                                <img className='sideButtonIcon' alt='' src={GridSVG}></img>
                                <p className='sideButtonText'>Discover</p>
                            </div>
                        </div>
                        <div className='sideButtonsSection'>
                            <div onClick={() => this.HandleButtonClick(3)} className={this.props.buttonStates[3]}>
                                <img className='sideButtonIcon' alt='' src={HeartSVG}></img>
                                <p className='sideButtonText'>Favourites</p>
                            </div>
                            <div onClick={() => this.HandleButtonClick(4)} className={this.props.buttonStates[4]}>
                                <img className='sideButtonIcon' alt='' src={RewindSVG}></img>
                                <p className='sideButtonText'>Watch Later</p>
                            </div>
                        </div>
                        <div id='optionButtonContainer'>
                            <div onClick={() => this.HandleButtonClick(5)} className={this.props.buttonStates[5]}>
                                    <img className='sideButtonIcon' alt='' src={OptionSVG}></img>
                                    <p className='sideButtonText'>Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='sidebarBottom'>
                    <div id='sidebuttonsContainer'>
                            <div onClick={() => this.HandleButtonClick(0)} className={this.props.buttonStates[0]}>
                                <img className='sideButtonIcon' alt='' src={HouseSVG}></img>
                            </div>
                            <div onClick={() => this.HandleButtonClick(1)} className={this.props.buttonStates[1]}>
                                <img className='sideButtonIcon' alt='' src={StarSVG}></img>
                            </div>
                            <div onClick={() => this.HandleButtonClick(2)} className={this.props.buttonStates[2]}>
                                <img className='sideButtonIcon' alt='' src={GridSVG}></img>
                            </div>
                            <div onClick={() => this.HandleButtonClick(3)} className={this.props.buttonStates[3]}>
                                <img className='sideButtonIcon' alt='' src={HeartSVG}></img>
                            </div>
                            <div onClick={() => this.HandleButtonClick(4)} className={this.props.buttonStates[4]}>
                                <img className='sideButtonIcon' alt='' src={RewindSVG}></img>
                            </div>
                            <div onClick={() => this.HandleButtonClick(5)} className={this.props.buttonStates[5]}>
                                <img className='sideButtonIcon' alt='' src={OptionSVG}></img>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;