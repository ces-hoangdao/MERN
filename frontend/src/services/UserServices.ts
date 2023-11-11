//service login in function use axios
import axios from "axios";

const API_URL = "http://localhost:3000/api/users/";

export const gerListUser = () => {
  return axios.get(`${API_URL}list-user`);
};
