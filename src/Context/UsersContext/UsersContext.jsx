import React from "react"
import UserReducer from "./UsersReducer";
import {createContext,useEffect,useReducer} from "react";
const INITIAL_STATE={
		User:JSON.parse(localStorage.getItem("user"))||null,
				isFetching:true,
				error:false,
};
export const UserContext=createContext(INITIAL_STATE);

export const UserContextProvider=({children})=>{
	const[state,dispatch]=useReducer(UserReducer,INITIAL_STATE);
	useEffect(() => {
  localStorage.setItem("user",JSON.stringify(state.User));

  
}, [state.User])


return(

	<UserContext.Provider value={
	{
			User:state.User,
				isFetching:state.isFetching,
				error:state.error,
		dispatch,
	}
	}>
		{children}
	</UserContext.Provider>
		);
};
