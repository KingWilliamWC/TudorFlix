import React, {Component} from 'react';
import axios from 'axios';

import './Favourites.css';

import MoviesRowFull from './MoviesRowFull';
import MovieSlideUp from '../MovieFullTab';

class Favourites extends Component{
    constructor(props){
        super(props);
        this.state = {
            favourites: [],
            gotFavourites: false,
            slideUpClass: ['movieFullTabContainer', 'movieFullTabContainerClosed'],
            isOpen: 0,
        }
    }
    componentDidMount(){
        this.setState({favourites: JSON.parse((localStorage.getItem('username'))).favourites});
        console.log('mount');
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

    render(){
        return(
            <div id='FavouritesTab'>
                <p id='favouritesTitle'>Favourites</p>
                {JSON.parse((localStorage.getItem('username'))).favourites.length === 0 ? <p id='nullMoviesTitle'>Hmmmm... Seems There Are No Movies Here Currently</p> : <MoviesRowFull clickHandler={this.handleMovieClick} favourites={JSON.parse((localStorage.getItem('username'))).favourites}/>}
                {this.state.isOpen ? <MovieSlideUp routes={this.props.routes} data={this.state.currentMovieData.data[0]} favouritesHandler={this.handleFavouritesClick} clickHandler={this.handleMovieClick} slideupClass={this.state.slideUpClass[this.state.isOpen]}/> : ''}
            </div>
        )
    }
}

export default Favourites;