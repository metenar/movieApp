import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/MovieSlice';
import MovieList from "../movieList/MovieList"



const Home = () => {
    const movieText="Harry"
    const showText="Friends"
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    },[dispatch])

    return (
        <div className="home">
            <MovieList />
        </div>
    )
}

export default Home
