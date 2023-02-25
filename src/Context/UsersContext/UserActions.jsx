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

export const createUserStart=()=>({
	type:"CREATE_User_START",
});

export const createUserSuccess=(User)=>({
	type:"CREATE_User_SUCCESS",
	payload:User,
});

export const createUserFailure=()=>({
	type:"CREATE_User_FAILURE",
});


export const loginUserStart=()=>({
	type:"Login_User_START",
});

export const loginUserSuccess=(User)=>({
	type:"Login_User_SUCCESS",
	payload:User,
});

// export const logoutUSerFailure=()=>({
// 	type:"Login_User_FAILURE",
// });
// export const logoutUserStart=()=>({
// 	type:"LOGOUT_User_START",
// });

// export const logoutUserSuccess = (User) => {
//     return {
//         type: "LOGOUT_USER_SUCCESS",
//         payload: User
//     } 
// }
