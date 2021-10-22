import React from 'react'
import { Link } from 'react-router-dom'
import "./movieCard.css"

const MovieCard = ({movie}) => {
    return (
      <Link to={`/movies/${movie.imdbID}`}>
        <div className="movieCard">
          <div className="cardTop">
            <img src={movie.Poster} alt={movie.Title} className="moviePoster" />
          </div>
          <div className="cardBottom">
            <div className="movieTitle">{movie.Title}</div>
            <p className="publishYear">{movie.Year}</p>
          </div>
        </div>
      </Link>
    );
}
export default MovieCard;
