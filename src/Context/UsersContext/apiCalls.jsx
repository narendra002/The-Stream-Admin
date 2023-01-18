const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "http://127.0.0.1:4000";
import axios from "axios"
import {getUserSuccess,getUserStart,getUserFailure
,	deleteUserFailure,deleteUserSuccess,deleteUserStart, createUserStart, createUserSuccess, createUserFailure} from "./UserActions";
export const getUser=async(dispatch)=>{
	dispatch(getUserStart());
	try {
		const res= await axios.get(`${url}/auth`);
		
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


export const deleteUser=async(id,dispatch)=>{
	dispatch(deleteUserStart());
	try {
		 await axios.delete(`${url}/auth/`+id);
		
		dispatch(deleteUserSuccess(id));
	} catch (error) {
		dispatch(deleteUserFailure(error));
	}
};