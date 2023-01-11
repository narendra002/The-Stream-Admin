import React from "react"
import TvShowReducer from "./TvShowReducer";
import {createContext,useEffect,useReducer} from "react";
const INITIAL_STATE={
	              tvShows:[],
				isFetching:true,
				error:false,
};
export const TvShowsContext=createContext(INITIAL_STATE);

export const TvShowContextProvider=({children})=>{
	const[state,dispatch]=useReducer(TvShowReducer,INITIAL_STATE);
return(
	<TvShowsContext.Provider value={
	{
		tvShows:state.tvShows,
				isFetching:state.isFetching,
				error:state.error,
		dispatch,
	}
	}>
		{children}
	</TvShowsContext.Provider>
		);
};
