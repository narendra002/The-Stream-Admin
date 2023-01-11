const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "http://127.0.0.1:4000";
import axios from "axios"
// import {getMoviesSuccess,getMoviesStart,getMoviesFailure
// ,	deleteMoviesFailure,deleteMoviesSuccess,deleteMoviesStart, createMovieStart, createMovieSuccess, createMovieFailure} from "./MovieActions";
import {deleteTvShowFailure,deleteTvShowSuccess,deleteTvShowStart, createTvShowFailure,createTvShowSuccess,createTvShowStart, getTvShowFailure, getTvShowStart, getTvShowSuccess } from "./TvShowActions";



export const getTvShows=async(dispatch)=>{
	dispatch(getTvShowStart());
	try {
		const res= await axios.get(`${url}/tvShow`);
		
		dispatch(getTvShowSuccess(res.data));
	} catch (error) {
		dispatch(getTvShowFailure(error));
	}
};






export const createTvShow=async(tvshow,dispatch)=>{
	dispatch(createTvShowStart());
	try {
	const res=	await axios.post(`${url}/tvshow/`, tvshow);
		
		dispatch(createTvShowSuccess(res.data));
	
	} catch (error) {
		dispatch(createTvShowFailure(error));
	}
};


export const deleteTvShow=async(id,dispatch)=>{
	dispatch(deleteTvShowStart());
	try {
		 await axios.delete(`${url}/tvshow/`+id);
		
		dispatch(deleteTvShowSuccess(id));
	} catch (error) {
		dispatch(deleteTvShowFailure(error));
	}
};
