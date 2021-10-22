import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovie } from '../common/apis/MovieApi';

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const resp = await getMovie.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${term}&type=movie`
    );
    return resp.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const resp = await getMovie.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${term}&type=series`
    );
    return resp.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const resp = await getMovie.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&Plot=full`
    );
    return resp.data;
  }
);
const initialState = {
  movies: {},
  shows:{},
  movieorShowDetail:{}
}

export const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeMovieorShowDetail:(state)=>{
            state.movieorShowDetail={}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetched succesfully");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Fetched succesfully");
            return {...state,shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Fetched succesfully");
            return {...state,movieorShowDetail:payload}
        },
    }
})

export const {removeMovieorShowDetail}=movieSlice.actions;
export default movieSlice.reducer