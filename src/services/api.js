import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3001/',
});

api.interceptors.request.use((config) => {
	const userData = localStorage.getItem('devburger:userDate');

	const token = userData && JSON.parse(userData).token; // faz a verificação se existe no localStorage

	config.headers.authorization = `Bearer ${token}`;

	return config;
});
