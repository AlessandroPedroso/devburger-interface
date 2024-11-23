import axios from 'axios';
import { json } from 'react-router-dom';

export const api = axios.create({
	baseURL: 'http://localhost:3001/',
});

api.interceptors.request.use((config) => {
	const userDate = localStorage.getItem('devburger:userDate');

	const token = userDate && JSON.parse(userDate).token; // faz a verificação se existe no localStorage

	config.headers.authorization = `Bearer ${token}`;

	return config;
});
