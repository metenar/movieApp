import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/MovieSlice';
import { Link } from 'react-router-dom'
import user from "../../images/user.png"
import "./header.css"

const Header = () => {

  const dispatch = useDispatch()
  const[searchTerm,setSearchTerm]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (searchTerm === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(searchTerm))
    dispatch(fetchAsyncShows(searchTerm))
    setSearchTerm("")
  }
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">Movie App</div>
        </Link>
        <div className="searchBar">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search movies or shows"
              value={searchTerm}
              className="searchInput"
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button type="submit" className="searchButton"><i className="fas fa-search"></i></button>
          </form>
        </div>
        <div className="avatar">
          <img src={user} alt="" className="avatar" />
        </div>
      </div>
    );
}

export default Header
