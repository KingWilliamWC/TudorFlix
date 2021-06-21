import React, { Component } from 'react';
import axios from 'axios';

import './MoviesHome.css';

import StarSVG from './SVG/Star-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import PlaySVG from './SVG/Play-Solid.svg';
import CircleSVG from './SVG/Circle-Solid.svg';

import MoviesRow from './MoviesRow.js';

class MoviesHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            FeaturedMovie: '',
            SideMovies: ['', ''],
        };
    }
    componentWillMount() {
        this.requestData();
    }

    async requestData(){
        await axios.get('http://localhost/api/home/')
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({
                    FeaturedMovie: data.data[0][0],
                    SideMovies: [data.data[0][1], data.data[0][2]],
                    Trending: data.data[1]
                })
                console.log(this.state);
            })
    }
    render(){
        return(
            <div id='moviesContainer'>
                <div id='featuredContainer'>
                    <p id='featuredTitle'>Featured</p>
                    <div id='featuredMoviesContainer'>
                        <div id='featuredMovie'>
                            {/* <img id='featuredMovieImage' alt='' src='https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'></img> */}
                            {this.state.FeaturedMovie ? <img id='featuredMovieImage' alt='' src={`https://image.tmdb.org/t/p/w1280/${this.state.FeaturedMovie.backdrop_path}`}></img> : ''}
                            <div id='featuredMovieDescriptionContainer'>
                                <div id='FeaturedContent'>
                                    {this.state.FeaturedMovie ? <p id='featuredMovieTitle'>{this.state.FeaturedMovie.title}</p> : ''}
                                    <div id='feauturedMovieMetricsContainer'>
                                        {this.state.FeaturedMovie ? <p>Science Fiction</p> : ''}
                                        <div id='featuredSeperator'></div>
                                        {this.state.FeaturedMovie ? <p>{this.state.FeaturedMovie.release_date.substring(0,4)}</p> : ''}
                                        <div id='featuredSeperator'></div>
                                        <p>2h 21m</p>
                                        <div id='featuredSeperator'></div>
                                        <img id='featuredStarIcon' alt='' src={StarSVG}></img>
                                        {this.state.FeaturedMovie ? <p>{this.state.FeaturedMovie.vote_average}</p> : ''}
                                    </div>
                                </div>
                                <div id='bottomDescription'>
                                    <div id='FeaturedMovieDescriptionContainer'>
                                        {/* <p id='FeaturedMovieDescription'>The adventures of a group of explorers who make use of a newly discovered wormhole
                                        to surpass the limitations on human space travel and conquer the vast distances
                                        involved in an interstellar voyage
                                        </p> */}
                                        {this.state.FeaturedMovie ? <p id='FeaturedMovieDescription'>{this.state.FeaturedMovie.overview}</p> : ''}
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
                                {this.state.SideMovies[0] ? <img className='sideFeaturedMovieImg' alt='' src={`https://image.tmdb.org/t/p/w1280/${this.state.SideMovies[0].backdrop_path}`}></img> : ''} 
                                <div className='SideFeatureMovieOverlayContainer'>
                                    <div className='SideFeatureMovieOverlayContainerContent'>
                                        {this.state.SideMovies[0] ? <p className='SideFeaturedMovieTitle'>{this.state.SideMovies[0].title}</p> : ''}
                                        <div className='sideGenreContainer'>
                                            <p>Adventure</p>
                                            <img alt='' className='seperator-side' src={CircleSVG}></img>
                                            <p>Crime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sideFeaturedMovie'>
                                {this.state.SideMovies[1] ? <img className='sideFeaturedMovieImg' alt='' src={`https://image.tmdb.org/t/p/w1280/${this.state.SideMovies[1].backdrop_path}`}></img> : ''}
                                <div className='SideFeatureMovieOverlayContainer'>
                                    <div className='SideFeatureMovieOverlayContainerContent'>
                                        {this.state.SideMovies[1] ? <p className='SideFeaturedMovieTitle'>{this.state.SideMovies[1].title}</p> : ''}
                                        <div className='sideGenreContainer'>
                                            <p>Adventure</p>
                                            <img alt='' className='seperator-side' src={CircleSVG}></img>
                                            <p>Crime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rowsContainer'>
                    <MoviesRow movies={this.state.Trending}/>
                </div>
                
            </div>
        )
    }
}

export default MoviesHome;