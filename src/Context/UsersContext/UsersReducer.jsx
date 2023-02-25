const UserReducer=(state,action)=>{
	switch(action.type){
			case "GET_User_START":
			return{
				User:[],
				isFetching:true,
				error:false,
			};

			case "GET_User_SUCCESS":
			return{
				User:action.payload,
				isFetching:false,
				error:false,
			};

			case "GET_User_FAILURE":
			return{
				User:[],
				isFetching:false,
				error:true,
			};

			case "CREATE_User_START":
				return{
					...state,
					isFetching:true,
					error:false,
				};
	
				case "CREATE_User_SUCCESS":
				return{
					User:[...state.User,action.payload],
					isFetching:false,
					error:false,
				};
	
				case "CREATE_User_FAILURE":
				return{
					...state,
					isFetching:false,
					error:true,
				};




				case "Login_User_START":
					return{
						...state,
						isFetching:true,
						error:false,
					};
		
					case "Login_User_SUCCESS":
					return{
						User:action.payload,
						isFetching:false,
						error:false,
					};
		
					case "Login_User_FAILURE":
					return{
						User:null,
						isFetching:false,
						error:true,
					};


			case "DELETE_User_START":
				return{
				...state,
					isFetching:true,
					error:false,
				};
	
				case "DELETE_User_SUCCESS":
				return{
					User:state.User.filter((User)=>User._id!==action.payload),
					isFetching:false,
					error:false,
				};
	
				case "DELETE_User_FAILURE":
				return{
					...state,
					isFetching:false,
					error:true,
				};

					// case "LOGOUT_User_START":
					// 	return{
					// 		User:null,
					// 		isFetching:true,
					// 		error: false, 
					// 	}
						
					// 	case "LOGOUT_USER_SUCCESS":
					// 		return {
					// 		User: null,
					// 		isFetching: false,
					// 		error: false,
					// 		};
						
					// case "LOGOUT_User_FAILURE":
					// 	return {
					// 		...state,
					// 		isFetching: false,
					// 		error: true 
					// 	}





		default:
			return{...state};
	}

};
export default UserReducer;