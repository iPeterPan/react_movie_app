//import React, { Component } from 'react';
import React from 'react';
import './Movie.css'
import PropTypes from 'prop-types'
import LinesEllipsis from "react-lines-ellipsis"


// class Movie extends Component{

//     static propTypes = {
//         title:PropTypes.string.isRequired,
//         image:PropTypes.string.isRequired
//     }

//     render() {
//         return(
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <MoviePoster title={this.props.title} image={this.props.image} />
//                 {/* MoviePoster(this.props.image, this.props.title); */}
//             </div>
//         );
//     }
// }

function Movie({title, image, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster alt={title} image={image} />
            </div>
            <div className = "Movie__Column">
                <h1> {title} </h1>
                <div className = "Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    {/* {genres.map((genre, index) => <span className="Movie_Genre" key={index}>{genre} </span>)} */}
                </div>
            </div>
            <div className="Movie__Synopsis">
                <LinesEllipsis 
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                />
            </div>

        </div>
    )
}

function MoviePoster({image, alt}){
    return(<img className="Movie__Poster" src={image} title={alt} alt={alt + ' Poster'} />);
}
function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}
Movie.prototype = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    sysnopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    image : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;
//export default MoviePoster;