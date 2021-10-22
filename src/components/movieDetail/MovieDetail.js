import React, { useEffect,} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchAsyncMovieOrShowDetail, removeMovieorShowDetail } from '../../features/MovieSlice';
import "./movieDetail.css"

const MovieDetail = () => {
  const data=useSelector((state)=>state.movies.movieorShowDetail)
  const dispatch = useDispatch();
    const {id}=useParams();
    useEffect(()=>{
      dispatch(fetchAsyncMovieOrShowDetail(id))
      return ()=>{
        dispatch(removeMovieorShowDetail())
      }
    },[dispatch,id])
    return (
      <div className="movieDetailContainer">
      {Object.keys(data).length===0 ? (
        <div style={{color:"#fff"}}>...Loading</div>
      ):(
      <>
        <div className="movieDetail">
          <div className="movieDetailLeft">
            <img src={data.Poster} alt="" className="movieDetailPoster" />
          </div>
          <div className="movieDetailRight">
            <div className="movieDetailRightTop">
              <div className="movieDetailTitle">{data.Title}</div>
              <div className="movieDetailIconContainer">
                <div className="iconItem">
                  IMDB Rating <i className="fas fa-star" style={{color:"gold"}}></i> :{" "}
                  {data.imdbRating}
                </div>
                <div className="iconItem">
                  IMDB Votes <i className="far fa-thumbs-up" style={{color:"#fafafa"}}></i> :{" "}
                  {data.imdbVotes}
                </div>
                <div className="iconItem">
                  Runtime <i className="fas fa-film" style={{color:"white"}}></i> : {data.Runtime}
                </div>
                <div className="iconItem">
                  Year <i className="far fa-calendar" style={{color:"peachpuff"}}></i> : {data.Year}
                </div>
              </div>
            </div>
            <div className="movieDetailRightBottom">
              <div className="movieDetailDesc">{data.Plot}</div>
              <div className="movieInfo">
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Language</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    );
}

export default MovieDetail
