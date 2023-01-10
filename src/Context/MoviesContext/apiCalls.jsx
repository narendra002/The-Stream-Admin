const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "http://127.0.0.1:4000";
import axios from "axios"
import {getMoviesSuccess,getMoviesStart,getMoviesFailure
,	deleteMoviesFailure,deleteMoviesSuccess,deleteMoviesStart, createMovieStart, createMovieSuccess, createMovieFailure} from "./MovieActions";
export const getMovies=async(dispatch)=>{
	dispatch(getMoviesStart());
	try {
		const res= await axios.get(`${url}/movie`);
		
		dispatch(getMoviesSuccess(res.data));
	} catch (error) {
		dispatch(getMoviesFailure(error));
	}
};
export const createMovie=async(movie,dispatch)=>{
	dispatch(createMovieStart());
	try {
	const res=	await axios.post(`${url}/movie/`, movie);
		
		dispatch(createMovieSuccess(res.data));
	
	} catch (error) {
		dispatch(createMovieFailure(error));
	}
};


export const deleteMovies=async(id,dispatch)=>{
	dispatch(deleteMoviesStart());
	try {
		 await axios.delete(`${url}/movie/`+id);
		
		dispatch(deleteMoviesSuccess(id));
	} catch (error) {
		dispatch(deleteMoviesFailure(error));
	}
};
