import React, { Component } from 'react';

import './TrailerVideo.css';

class TrailerVideo extends Component {
    componentDidMount () {
        console.log(this.props.data);
    }
    render(){
        return(
            <div id='videoContainer'>
                <div onClick={() => this.props.clickHandler()} className='escape_container_video'>
                    <p>X</p>
                </div>
                <div id='videoContentContainer'>
                    <iframe width='100%' height='100%' title='trailer' allowFullScreen="allowfullscreen" frameBorder="0" src={`https://www.youtube.com/embed/${this.props.data}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        )
    }
}

export default TrailerVideo;