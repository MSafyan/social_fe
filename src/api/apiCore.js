import axios from 'axios';
const JWT_STORAGE_NAME = 'token';

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://dootbe.herokuapp.com/';
export const getJwt = () => localStorage.getItem(JWT_STORAGE_NAME);
export const setJwt = (token) => localStorage.setItem(JWT_STORAGE_NAME, token);

export const setAuthHeader = (token) => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	setJwt(token);
};
if (getJwt()) {
	setAuthHeader(getJwt());
	console.log(getJwt());
}

export default axios;
