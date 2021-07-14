import React, {Component} from 'react';
import axios from 'axios';

import './Discover.css';

import MoviesRowFull from './MoviesRowFull';
import MovieSlideUp from '../MovieFullTab';

class Discover extends Component{
    constructor(props){
        super(props);

        this.state = {
            DiscoverMovies: [],
            pageIndex: 2,
            slideUpClass: ['movieFullTabContainer', 'movieFullTabContainerClosed'],
            isOpen: 0,
        }
    }

    componentDidMount(){
        this.requestData();
    }

    async requestData(){
        await axios.post(this.props.routes.discover, {pageIndex: 1, genres: JSON.parse((localStorage.getItem('username'))).genres})
            .then(res => {
                this.setState({DiscoverMovies: res.data.data[0].results});
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

    userLoadMore = () => {
        axios.post(this.props.routes.discover, {pageIndex: this.state.pageIndex, genres: JSON.parse((localStorage.getItem('username'))).genres})
        .then(res => {
            var currentMovies = this.state.DiscoverMovies;
            for(var j = 0; j < res.data.data.length; j++){
                for(var i = 0; i < res.data.data[j].results.length; i++){
                    currentMovies.push(res.data.data[j].results[i])
                }
            }
            
            this.setState({DiscoverMovies: currentMovies, pageIndex: this.state.pageIndex + 3});
            console.log(this.state.DiscoverMovies);
        })
    }

    handleMovieClick = (movieID) => {
        if(movieID !== 'none'){
            this.getMovieInfo(movieID)
        }else{
            if(this.state.isOpen === 0){
                this.setState({isOpen: 1}); // if by some magic the user has done this
            }else{
                this.setState({isOpen: 0});
                this.forceUpdate();
            }
        }
    }
    
    render(){
        return(
            <div id='DiscoverTab'>
                <p className='popularTitle'>Discover For You</p>
                {this.state.DiscoverMovies.length === 0 ? <p id='nullMoviesTitle'>Loading...</p> : <MoviesRowFull clickHandler={this.handleMovieClick} favourites={this.state.DiscoverMovies}/>}
                <p onClick={() => this.userLoadMore()} id='viewMoreButton'>View More</p>
                {this.state.isOpen ? <MovieSlideUp routes={this.props.routes} data={this.state.currentMovieData.data[0]} clickHandler={this.handleMovieClick} slideupClass={this.state.slideUpClass[this.state.isOpen]}/> : ''}
            </div>
        )
    }
}

export default Discover;