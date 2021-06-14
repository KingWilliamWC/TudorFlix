import React, { Component } from 'react';

import './MoviesHome.css';

import StarSVG from './SVG/Star-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import PlaySVG from './SVG/Play-Solid.svg';

class MoviesHome extends Component {
    render(){
        return(
            <div id='moviesContainer'>
                <div id='featuredContainer'>
                    <p id='featuredTitle'>Featured</p>
                    <div id='featuredMoviesContainer'>
                        <div id='featuredMovie'>
                            <img id='featuredMovieImage' alt='' src='https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'></img>
                            <div id='featuredMovieDescriptionContainer'>
                                <div id='FeaturedContent'>
                                    <p id='featuredMovieTitle'>Interstellar</p>
                                    <div id='feauturedMovieMetricsContainer'>
                                        <p>Adventure</p>
                                        <div id='featuredSeperator'></div>
                                        <p>2014</p>
                                        <div id='featuredSeperator'></div>
                                        <p>2h 21m</p>
                                        <div id='featuredSeperator'></div>
                                        <img id='featuredStarIcon' alt='' src={StarSVG}></img>
                                        <p>8.3</p>
                                    </div>
                                </div>
                                <div id='bottomDescription'>
                                    <div id='FeaturedMovieDescriptionContainer'>
                                        <p id='FeaturedMovieDescription'>The adventures of a group of explorers who make use of a newly discovered wormhole
                                        to surpass the limitations on human space travel and conquer the vast distances
                                        involved in an interstellar voyage
                                        </p>
                                    </div>
                                    <div id='featuredButtonsContainer'>
                                        <div id='featuredLikeButton'>
                                            <img alt='' src={HeartSVG}></img>
                                        </div>
                                        <div id='featuredWatchButton'>
                                            <p>Watch</p>
                                            <img alt='' src={PlaySVG}></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id='sideFeaturedMovies'>
                            <div className='sideFeaturedMovie'>
                                <img className='sideFeaturedMovieImg' alt='' src='https://image.tmdb.org/t/p/original//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg'></img>
                                <div className='SideFeatureMovieOverlayContainer'>
                                    <p className='SideFeaturedMovieTitle'>Godzilla Vs. Kong</p>
                                    <p>Adventure</p>
                                </div>
                            </div>
                            <div className='sideFeaturedMovie'>
                                <img className='sideFeaturedMovieImg' alt='' src='https://image.tmdb.org/t/p/original//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg'></img>
                                <div className='SideFeatureMovieOverlayContainer'>
                                    <p className='SideFeaturedMovieTitle'>Godzilla Vs. Kong</p>
                                    <p>Adventure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesHome;