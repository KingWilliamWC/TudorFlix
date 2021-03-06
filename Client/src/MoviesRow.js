import React, {Component} from 'react';

import './MoviesRow.css';

import SliderItem from './SliderItem.js';

import ArrowSVG from './SVG/Arrow-Solid.svg';

class MoviesRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            MovieItems: [],
        }
    }

    HandleSlide(sender){
        var f = document.getElementsByClassName('moviesRowSliderContainer')
        if(sender === 'right'){
            f[this.props.index].scrollLeft += 500;
        }else if(sender === 'left'){
            f[this.props.index].scrollLeft -= 500;
        }
    }
    
    render(){
        for(var i = 0; i < this.props.movies.length; i++){
            this.state.MovieItems.push(
                <SliderItem clickHandler={this.props.clickHandler} info={this.props.movies[i]}/>
            )
        }
        return(
            <div className='movieRowContainer'>
                <div className='rowTopContainer'>
                    <div className='movieRowTitleContainer'>
                        <p className='movieRowTitle'>{this.props.name}</p>
                    </div>
                    <div onClick={() => this.props.SeeMoreHandler(this.props.name)} className='viewAllButtonContainer'>
                        <p>See More</p>
                    </div>
                    <div className='buttonSlideContainer'>
                        <div onClick={() => this.HandleSlide('left')} className='ButtonSlide'><img className='flippedArrow ArrowButtonImage' src={ArrowSVG} alt=''></img></div>
                        <div onClick={() => this.HandleSlide('right')} className='ButtonSlide'><img className='ArrowButtonImage' src={ArrowSVG} alt=''></img></div>
                    </div>
                </div>
                
                <div className='moviesRowSliderContainer'>
                    {this.state.MovieItems ? this.state.MovieItems : ''}
                </div>
            </div>
        )
    }
}

export default MoviesRow;