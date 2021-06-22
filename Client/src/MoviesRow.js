import React, {Component} from 'react';

import './MoviesRow.css';

import ArrowSVG from './SVG/Arrow-Solid.svg';

class MoviesRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            MovieItems: [],
        }
    }
    componentDidMount() {
        var f = this.props;
        console.log(f);
    }

    HandleSlide(sender){
        // console.log(sender);
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
                <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/${this.props.movies[i].poster_path}`} alt=''></img>
                </div>
            )
        }
        return(
            <div className='movieRowContainer'>
                <div className='rowTopContainer'>
                    <div className='movieRowTitleContainer'>
                        <p className='movieRowTitle'>{this.props.name}</p>
                    </div>
                    <div className='viewAllButtonContainer'>
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