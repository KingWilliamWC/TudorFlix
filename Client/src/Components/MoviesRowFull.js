import React, { Component } from 'react';

import './MoviesRowFull.css';

import SliderItemFull from '../SliderItemFull.js';

class MoviesRowFull extends Component {
    constructor(props){
        super(props);

        this.state = {
            MovieItems: [],
        }
    }
    render(){
        console.log(this.props.favourites);
        this.state.MovieItems = []
        for(var i = 0; i < this.props.favourites.length; i++){
            this.state.MovieItems.push(
                <SliderItemFull clickHandler={this.props.clickHandler} info={this.props.favourites[i]}/>
            )
        }
        return(
            <div className='moviesRowFullContainer'>
                {this.state.MovieItems ? this.state.MovieItems : ``}
            </div>
        )
    }
}

export default MoviesRowFull;