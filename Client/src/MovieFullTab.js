import React, { Component} from 'react';

import './MovieFullTab.css';

import CircleSVG from './SVG/Circle-Solid.svg';
import StarSVG from './SVG/Star-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import PlaySVG from './SVG/Play-Solid.svg';

class MovieFullTab extends Component {
    render(){
        return(
            <div id={this.props.slideupClass}>
                <div onClick={() => this.props.clickHandler('none')} id='fullscreenTabContainer'>
                </div>
                <div id='fullscreenSurroundingContainer'>
                        <div id='fullscreenContent'>
                            <div onClick={() => this.props.clickHandler('none')} className='escape_container'>
                                    <p>X</p>
                            </div>
                            <div id='movieInfoContainer'>

                                <div id='movieImageContainer'>
                                    <img alt='' src={`https://image.tmdb.org/t/p/w1280${this.props.data.poster_path}`}></img>
                                </div>
                                <div id='movieFullInfoContainer'>
                                    <p id='movieFullInfoTitle'>{this.props.data.title}</p>
                                    <div className='movieFullMetricsContainer'>
                                        <p className='movieFullInfoText'>15</p>
                                        <p className='movieFullInfoText movieFullInfoRelease'>{this.props.data.release_date.substring(0,4)}</p>
                                        <div id='fullGenreContainer'>
                                            <p>Adventure</p>
                                            <img alt='' className='seperator-side' src={CircleSVG}></img>
                                            <p id='secondGenre'>Comedy</p>
                                        </div>
                                        <div id='movieFullRatingsContainer'>
                                            <img id='featuredStarIcon' alt='' src={StarSVG}></img>
                                            <p>{this.props.data.vote_average}</p>
                                        </div>
                                    </div>
                                    <div id='fullMovieInfoOverviewContainer'>
                                        <p>{this.props.data.overview}</p>
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
        )
    }
}

export default MovieFullTab;