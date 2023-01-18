export const getUserStart=()=>({
	type:"GET_User_START",
});

export const getUserSuccess=(User)=>({
	type:"GET_User_SUCCESS",
	payload:User,
});

export const getUserFailure=()=>({
	type:"GET_User_FAILURE",
});


export const deleteUserStart=()=>({
	type:"DELETE_User_START",
});

export const deleteUserSuccess=(id)=>({
	type:"DELETE_User_SUCCESS",
	payload:id,
});

export const deleteUserFailure=()=>({
	type:"DELETE_User_FAILURE",
});

export const createUsertart=()=>({
	type:"CREATE_User_START",
});

export const createUseruccess=(User)=>({
	type:"CREATE_User_SUCCESS",
	payload:movie,
});

export const createUserFailure=()=>({
	type:"CREATE_User_FAILURE",
});