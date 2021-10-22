import React from 'react'
import Slider from "react-slick"
import { useSelector } from 'react-redux'
import MovieCard from "../movieCard/MovieCard"
import { Settings } from '../../common/Settings'


import "./movieList.css"

const MovieList = () => {
  
  const movies=useSelector((state)=>state.movies.movies)
  const shows=useSelector((state)=>state.movies.shows)
  let renderMovies,renderShows=""
  
  renderMovies=movies.Search?.map((movie)=>(
    <MovieCard movie={movie} key={movie.imdbID}/>
  ))
  renderShows=shows.Search?.map((show)=>(
    <MovieCard movie={show} key={show.imdbID}/>
  ))
    return (
      <div className="movieWrapper">
        <div className="movieListTitle">Movies</div>
        <div className="movieListContainer">        
            <Slider {...Settings}>{renderMovies}</Slider>                
        </div>
        <div className="movieListTitle">Shows</div>
        <div className="movieListContainer">        
            <Slider {...Settings} >{renderShows}</Slider>                
        </div>
      </div>
    );
}

export default MovieList
