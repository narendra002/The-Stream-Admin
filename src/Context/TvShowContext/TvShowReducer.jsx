const TvShowReducer=(state,action)=>{
	switch(action.type){
			case "GET_TVSHOW_START":
			return{
				tvShows:[],
				isFetching:true,
				error:false,
			};

			case "GET_TVSHOW_SUCCESS":
			return{
				tvShows:action.payload,
				isFetching:false,
				error:false,
			};

			case "GET_TVSHOW_FAILURE":
			return{
				tvShows:[],
				isFetching:false,
				error:true,
			};

			case "CREATE_TVSHOW_START":
				return{
					...state,
					isFetching:true,
					error:false,
				};
	
				case "CREATE_TVSHOW_SUCCESS":
				return{
					tvShows:[...state.tvShows,action.payload],
					isFetching:false,
					error:false,
				};
	
				case "CREATE_TVSHOW_FAILURE":
				return{
					...state,
					isFetching:false,
					error:true,
				};







			case "DELETE_TVSHOW_START":
				return{
				...state,
					isFetching:true,
					error:false,
				};
	
				case "DELETE_TVSHOW_SUCCESS":
				return{
					tvShows:state.tvShows.filter((tvShow)=>tvShow._id!==TVSHOWn.payload),
					isFetching:false,
					error:false,
				};
	
				case "DELETE_TVSHOW_FAILURE":
				return{
					...state,
					isFetching:false,
					error:true,
				};







		default:
			return{...state};
	}

};
export default TvShowReducer