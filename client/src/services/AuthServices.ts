//service login in function use axios
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3000/api/auth/";

export const LoginHandler = async (userInfo: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = userInfo;
    const response = await axios.post(`${API_URL}login`, {
      email,
      password,
    });
    if (response.data.accessToken) {
      const accessToken = response.data.accessToken;
      const payLoadDecoded = jwtDecode(accessToken);
      localStorage.setItem("accessToken", accessToken);
      return payLoadDecoded;
    }
  } catch (error) {
    console.log(error);
  }
};

export const SignUpHandler = async (userInfo: {
  email: string;
  password: string;
  username: string;
}) => {
  try {
    const { email, password, username } = userInfo;
    const response = await axios.post(`${API_URL}sign-up`, {
      email,
      password,
      username,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
