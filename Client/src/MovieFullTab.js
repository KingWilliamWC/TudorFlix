import React, { Component} from 'react';

import './MovieFullTab.css';

import TrailerVideo from './TrailerVideo';

import CircleSVG from './SVG/Circle-Solid.svg';
import StarSVG from './SVG/Star-Solid.svg';
import HeartSVG from './SVG/Heart-Solid.svg';
import PlaySVG from './SVG/Play-Solid.svg';

class MovieFullTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            genreMap: {"genres": [
                {
                  "id": 28,
                  "name": "Action"
                },
                {
                  "id": 12,
                  "name": "Adventure"
                },
                {
                  "id": 16,
                  "name": "Animation"
                },
                {
                  "id": 35,
                  "name": "Comedy"
                },
                {
                  "id": 80,
                  "name": "Crime"
                },
                {
                  "id": 99,
                  "name": "Documentary"
                },
                {
                  "id": 18,
                  "name": "Drama"
                },
                {
                  "id": 10751,
                  "name": "Family"
                },
                {
                  "id": 14,
                  "name": "Fantasy"
                },
                {
                  "id": 36,
                  "name": "History"
                },
                {
                  "id": 27,
                  "name": "Horror"
                },
                {
                  "id": 10402,
                  "name": "Music"
                },
                {
                  "id": 9648,
                  "name": "Mystery"
                },
                {
                  "id": 10749,
                  "name": "Romance"
                },
                {
                  "id": 878,
                  "name": "Science Fiction"
                },
                {
                  "id": 10770,
                  "name": "TV Movie"
                },
                {
                  "id": 53,
                  "name": "Thriller"
                },
                {
                  "id": 10752,
                  "name": "War"
                },
                {
                  "id": 37,
                  "name": "Western"
                }
              ]
            },
            genres: [],
            video: false,
            key: '',
        }
    }

    componentDidMount(){
        var genresToMap = [];
        for(var i = 0; i < 2; i++){
            for(var x = 0; x < this.state.genreMap.genres.length; x++){
                if(this.state.genreMap.genres[x].id === this.props.data.genres[i].id){
                    genresToMap.push(this.state.genreMap.genres[x].name);
                }
            }
        }
        this.setState({genres: genresToMap});
    }
    
    userPlay = () => {
        var trailers = []
        console.log(this.props.data.videos.results);
        for(var i = 0; i < this.props.data.videos.results.length; i++){
            if(this.props.data.videos.results[i].type === 'Trailer'){
                trailers.push(this.props.data.videos.results[i].key)
            }
        }
        // console.log(trailers[0]);
        this.setState({video: true, key: trailers[0]});
    }

    userExitPlay = () => {
        this.setState({video: false});
    }
    render(){
        return(
            <div id={this.props.slideupClass}>
                {this.state.video ? <TrailerVideo data={this.state.key} clickHandler={this.userExitPlay}/> : ''}
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
                                            <p>{this.state.genres[0]}</p>
                                            <img alt='' className='seperator-side' src={CircleSVG}></img>
                                            <p id='secondGenre'>{this.state.genres[1]}</p>
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
                                        <div onClick={() => this.userPlay()} id='movieFullInfoPlayButton'>
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