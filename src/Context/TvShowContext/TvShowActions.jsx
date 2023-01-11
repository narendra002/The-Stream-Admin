export const getTvShowStart=()=>({
	type:"GET_TVSHOW_START",
});

export const getTvShowSuccess=(tvShows)=>({
	type:"GET_TVSHOW_SUCCESS",
	payload:tvShows,
});

export const getTvShowFailure=()=>({
	type:"GET_TVSHOW_FAILURE",
});


export const deleteTvShowStart=()=>({
	type:"DELETE_TVSHOW_START",
});

export const deleteTvShowSuccess=(id)=>({
	type:"DELETE_TVSHOW_SUCCESS",
	payload:id,
});

export const deleteTvShowFailure=()=>({
	type:"DELETE_TVSHOW_FAILURE",
});

export const createTvShowStart=()=>({
	type:"CREATE_TVSHOW_START",
});

export const createTvShowSuccess=(tvShows)=>({
	type:"CREATE_TVSHOW_SUCCESS",
	payload:tvShows,
});

export const createTvShowFailure=()=>({
	type:"CREATE_TVSHOW_FAILURE",
});