import React, { Component} from 'react';

import './MovieFullTab.css';

import CircleSVG from './SVG/Circle-Solid.svg';
import StarSVG from './SVG/Star-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import PlaySVG from './SVG/Play-Solid.svg';

class MovieFullTab extends Component {
    openTab = () =>{
        console.log('openTab');
    }
    render(){
        return(
            <div id={this.props.slideupClass}>
                <div id='fullscreenTabContainer'>
                    <div id='fullscreenSurroundingContainer'>
                        <div id='fullscreenContent'>
                            <div id='movieInfoContainer'>
                                <div id='movieImageContainer'>
                                    <img src='https://image.tmdb.org/t/p/w1280/jTswp6KyDYKtvC52GbHagrZbGvD.jpg'></img>
                                </div>
                                <div id='movieFullInfoContainer'>
                                    <p id='movieFullInfoTitle'>Luca</p>
                                    <p className='movieFullInfoText'>15</p>
                                    <p className='movieFullInfoText'>2021</p>
                                    <div id='fullGenreContainer'>
                                        <p>Adventure</p>
                                        <img alt='' className='seperator-side' src={CircleSVG}></img>
                                        <p id='secondGenre'>Comedy</p>
                                    </div>
                                    <div id='movieFullRatingsContainer'>
                                        <img id='featuredStarIcon' alt='' src={StarSVG}></img>
                                        <p>8.6</p>
                                    </div>
                                    <div id='fullMovieInfoOverviewContainer'>
                                        <p>Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera.
                                        But all the fun is threatened by a deeply-held secret: they are sea monsters from another
                                        world just below the water’s surface</p>
                                    </div>
                                    <div id='movieFullInfoButtonsContainer'>
                                        <div id='movieFullInfoLikeButton'>
                                            <img alt='' src={HeartSVG}></img>
                                        </div>
                                        <div id='movieFullInfoPlayButton'>
                                            <p>Watch</p>
                                            <img alt='' src={PlaySVG}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieFullTab;