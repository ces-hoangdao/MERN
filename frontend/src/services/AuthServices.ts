import axios from "axios"
import { jwtDecode } from "jwt-decode"

const API_URL = "http://localhost:5000/api/auth/"

axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken")
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
			config.headers["Content-Type"] = "application/json"
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

axios.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
)

export const LoginHandler = async (userInfo: {
	email: string;
	password: string;
}) => {
	try {
		const { email, password } = userInfo
		let payLoadDecoded
		const response = await axios.post(`${API_URL}login`, {
			email,
			password,
		})
		if (response.data.accessToken) {
			const { accessToken } = response.data
			payLoadDecoded = jwtDecode(accessToken)
			localStorage.setItem("accessToken", accessToken)
		}
		return payLoadDecoded
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const SignUpHandler = async (userInfo: {
	email: string;
	password: string;
	username: string;
}) => {
	try {
		const { email, password, username } = userInfo
		const response = await axios.post(`${API_URL}sign-up`, {
			email,
			password,
			username,
		})
		console.log(response)
	} catch (error) {
		console.log(error)
	}
	throw new Error("SignUpHandler failed to return a value")
}
