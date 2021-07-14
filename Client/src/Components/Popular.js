import axios from 'axios';
import React, {Component} from 'react';

import './Popular.css';

import MoviesRowFull from './MoviesRowFull';
import MovieSlideUp from '../MovieFullTab';

class Popular extends Component{
    constructor(props){
        super(props);

        this.state = {
            PopularMovies: [],
            pageIndex: 2,
            slideUpClass: ['movieFullTabContainer', 'movieFullTabContainerClosed'],
            isOpen: 0,
        }
    }
    
    componentDidMount(){
        this.requestData();
    }

    userLoadMore = () => {
        axios.post(this.props.routes.popular, {pageIndex: this.state.pageIndex})
        .then(res => {
            var currentMovies = this.state.PopularMovies;
            for(var j = 0; j < res.data.data.length; j++){
                for(var i = 0; i < res.data.data[j].results.length; i++){
                    currentMovies.push(res.data.data[j].results[i])
                }
            }
            
            this.setState({PopularMovies: currentMovies, pageIndex: this.state.pageIndex + 3});
            console.log(this.state.PopularMovies);
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
        console.log(movieID);
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

    async requestData(){
        await axios.post(this.props.routes.popular, {pageIndex: 1})
            .then(res => {
                this.setState({PopularMovies: res.data.data[0].results});
            })
    }
    render(){
        return(
            <div id='PopularTab'>
                <p className='popularTitle'>Popular</p>
                {this.state.PopularMovies.length === 0 ? <p id='nullMoviesTitle'>Loading...</p> : <MoviesRowFull clickHandler={this.handleMovieClick} favourites={this.state.PopularMovies}/>}
                <p onClick={() => this.userLoadMore()} id='viewMoreButton'>View More</p>
                {this.state.isOpen ? <MovieSlideUp routes={this.props.routes} data={this.state.currentMovieData.data[0]} clickHandler={this.handleMovieClick} slideupClass={this.state.slideUpClass[this.state.isOpen]}/> : ''}
            </div>
        )
    }
}

export default Popular;