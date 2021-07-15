import React, { Component } from 'react';

class SearchResultItem extends Component{
    constructor(props){
        super(props);
        this.state = {
        id: this.props.data.id,
        }
    }

    render(){
        return(
            <div onClick={() => this.props.handleMovieClick(this.props.data.id)} key={this.props.data.id} className='searchResultItem'>
                <div className='searchResultItemContent'>
                    {this.props.data.poster_path ? <img className='searchResultItemImage' alt='' src={`https://image.tmdb.org/t/p/w1280/${this.props.data.poster_path}`}></img> : <p>No Image</p>}
                    <p>{this.props.data.title}</p>
                </div>
            </div>
        )
    }
}

export default SearchResultItem;