import React, { Component } from 'react';

class SliderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: ''
        }
    }
    componentDidMount() {
        this.setState({id: this.props.info.id})
    }
    
    render() {
        return(
            <div key={this.state.id} onClick={() => this.props.clickHandler(this.state.id)} className='sliderItem'>
                <div className='sliderItemContent'>
                    <img className='sliderImg' src={`https://image.tmdb.org/t/p/w1280/${this.props.info.poster_path}`} alt=''></img>
                    <div className='movieOverlayContainer'>
                        <div className='movieOverlayContainerContent'>
                            <p className='movieTitle'>{this.props.info.title}</p>
                            <p>{this.props.info.release_date ? this.props.info.release_date.substring(0,4) : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderItem;