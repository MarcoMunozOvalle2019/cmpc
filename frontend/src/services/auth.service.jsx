import axios from "axios";
import { NombreContexto} from '../componentes/Contexto'

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = async() => {
  return localStorage.getItem("token");
};


const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
