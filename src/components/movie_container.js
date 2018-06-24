import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Movie_container extends Component {
    constructor(props){
        super(props);
    //this.componentWillMount();
        this.state= {
            movies:[]
        }

    }

    componentWillMount(){
        const appleURL = `http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json`;
        axios.get(`${appleURL}`).then( resp=> {
            console.log('response!: ', resp);
            console.log('data:', resp.data.feed.entry);
            this.setState({
                movies: resp.data.feed.entry
            })
        } )
    }

    render(){
        console.log('current state: ', this.state);
        console.log('image',this.state.movies[0] === undefined ? '0' : this.state.movies[0].id.label);
        const movieList = this.state.movies.map( (movieInfo,index)=> { return <Movies info={movieInfo} key={index}/> } );

        return(
        <div>
            {movieList}
        </div>
        )
    }

};

export default Movie_container;