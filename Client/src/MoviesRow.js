import React, {Component} from 'react';

import './MoviesRow.css';

class MoviesRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentScrollPos: 0,
        }
    }
    componentDidMount() {
        console.log(this.state.movies)
    }

    HandleSlide(sender){
        // console.log(sender);
        var f = document.getElementsByClassName('moviesRowSliderContainer')
        if(sender === 'right'){
            f[0].scrollLeft += 300;
        }else if(sender === 'left'){
            f[0].scrollLeft -= 300;
        }
    }
    
    render(){
        return(
            <div className='movieRowContainer'>
                <div className='rowTopContainer'>
                    <div className='movieRowTitleContainer'>
                        <p className='movieRowTitle'>For You</p>
                    </div>
                    <div className='buttonSlideContainer'>
                        <div onClick={() => this.HandleSlide('left')} className='ButtonSlide'></div>
                        <div onClick={() => this.HandleSlide('right')} className='ButtonSlide'></div>
                    </div>
                </div>
                
                <div className='moviesRowSliderContainer'>
                    <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg`} alt=''></img>
                    </div>
                    <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg`} alt=''></img>
                    </div>
                    <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg`} alt=''></img>
                    </div>
                    <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg`} alt=''></img>
                    </div>
                    <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg`} alt=''></img>
                    </div>
                    <div className='sliderItem'>
                        <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg`} alt=''></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesRow;