// service login in function use axios
import axios from "axios"

const API_URL = "http://localhost:5000/api/users/"

export const gerListUser = () => axios.get(`${API_URL}list-user`)
