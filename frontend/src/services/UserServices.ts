// service login in function use axios
// eslint-disable-next-line quotes
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';
export interface User {
	_id: string;
	username: string;
	email: string;
	password: string;
}

export const gerListUser = async (): Promise<User[]> => {
	try {
		const response = await axios.get(`${API_URL}`);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getUser = async (userId: string): Promise<User> => {
	try {
		const response = await axios.get(`${API_URL}${userId}`);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
