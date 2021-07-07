import React, { Component } from 'react';
import axios from 'axios';

import './MoviesHome.css';

import StarSVG from '../SVG/Star-Solid.svg';
import HeartSVG from '../SVG/Heart-Solid.svg';
import PlaySVG from '../SVG/Play-Solid.svg';
import CircleSVG from '../SVG/Circle-Solid.svg';

import MoviesRow from '../MoviesRow.js';
import MovieSlideUp from '../MovieFullTab';

class MoviesHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            FeaturedMovie: '',
            SideMovies: ['', ''],
            Trending: null,
            slideUpClass: ['movieFullTabContainer', 'movieFullTabContainerClosed'],
            isOpen: 0,
            allowRender: true,
            currentMovieData: null,
        };

        this.functions = {
            requestTrending: this.callbackAfterRequest(),
        }
    }
    componentWillMount() {
        this.requestData();
    }
    
    componentDidMount() {
        this.setState({allowRender: false});
    }

    callbackAfterRequest = () => {
        
        return(this.state.Trending ? this.state.Trending : '')
    }

    async requestData(){
        await axios.post(this.props.routes.moviehome, {genres: JSON.parse((localStorage.getItem('username'))).genres})
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({
                    FeaturedMovie: data.data[0].results[0],
                    SideMovies: [data.data[0].results[1], data.data[0].results[2]],
                    ForYou: data.data[2].results,
                    Trending: data.data[1].results
                })
            })
    }

    async getMovieInfo(movieID){
        await axios.get(`${this.props.routes.movie}id=${movieID}`)
            .then(res => {
                var statetoset = 0;
                if(this.state.isOpen === 0){
                    statetoset = 1;
                }
                this.setState({currentMovieData: res.data, isOpen: statetoset});
                return res;
            })
    }

    handleMovieClick = (movieID) => {
        if(movieID !== 'none'){
            this.getMovieInfo(movieID)
        }else{
            if(this.state.isOpen === 0){
                this.setState({isOpen: 1});
            }else{
                this.setState({isOpen: 0});
            }
        }

    }

    // shouldComponentUpdate() {if(this.state.allowRender === true){return true;}else{return false;} }
    render(){
        return(
            <div id='moviesContainer'>
                <div id='featuredContainer'>
                    <p id='featuredTitle'>Featured</p>
                    <div id='featuredMoviesContainer'>
                        <div id='featuredMovie'>
                            <div id='featuredMovieImageContainer'>
                                {this.state.FeaturedMovie ? <img id='featuredMovieImage' alt='' src={`https://image.tmdb.org/t/p/w1280/${this.state.FeaturedMovie.backdrop_path}`}></img> : ''}
                            </div>
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
                                        <p>15</p>
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
                                        <p>15</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rowsContainer'>
                    <div className='rowContent'>
                        {this.state.Trending != null ? <MoviesRow clickHandler={this.handleMovieClick} name={'For You'} index={0} movies={this.state.ForYou}/> : ''}
                        {this.state.Trending != null ? <MoviesRow clickHandler={this.handleMovieClick} name={'Trending'} index={1} movies={this.state.Trending}/> : ''}
                    </div>
                </div>
                {this.state.isOpen ? <MovieSlideUp data={this.state.currentMovieData.data[0]} clickHandler={this.handleMovieClick} slideupClass={this.state.slideUpClass[this.state.isOpen]}/> : ''}
                
            </div>
        )
    }
}

export default MoviesHome;