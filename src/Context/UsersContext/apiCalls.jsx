const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://the-stream-backend.vercel.app";
import axios from "axios"
import {getUserSuccess,getUserStart,getUserFailure
,	deleteUserFailure,deleteUserSuccess,deleteUserStart, createUserStart, createUserSuccess, createUserFailure, loginUserSuccess, loginUserStart} from "./UserActions";
export const getUser=async(dispatch)=>{
	dispatch(getUserStart());
	try {
		const res= await axios.get(`${url}/auth`
		,{
			headers:{
				token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		}
		);
		
		dispatch(getUserSuccess(res.data));
	} catch (error) {
		dispatch(getUserFailure(error));
	}
};
export const createUser=async(User,dispatch)=>{
	dispatch(createUserStart());
	try {
	const res=	await axios.post(`${url}/auth/`, User);
		
		dispatch(createUserSuccess(res.data));
	
	} catch (error) {
		dispatch(createUserFailure(error));
	}
};

export const loginUser=async(User,dispatch)=>{
	dispatch(loginUserStart());
	try {
	const res=	await axios.post(`${url}/auth/login/`, User);
		
		dispatch(loginUserSuccess(res.data));
	res.data.isAdmin && dispatch (loginUserStart(res.data));
	} catch (error) {
		dispatch(createUserFailure(error));
	}
};
export const deleteUser=async(id,dispatch)=>{
	dispatch(deleteUserStart());
	try {
		 await axios.delete(`${url}/auth/`+id);
		
		dispatch(deleteUserSuccess(id));
	} catch (error) {
		dispatch(deleteUserFailure(error));
	}
};
// export const logoutUser = async (dispatch) => {
// 	dispatch();
// 	try {
	
// 	}
//   };
  
