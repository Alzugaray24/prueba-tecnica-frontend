import axios from "axios";

const BASE_URL = "http://localhost:9090/api/extend/users"; // Reemplaza esto con la URL de tu backend

const authService = {
  registerUser: async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error("Error registrando usuario:", error);
      throw error;
    }
  },

  loginUser: async (data) => {
    try {
      const { email, password } = data
      const response = await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password
      });
      console.log("response:", response);
      return response;
    } catch (error) {
      console.error("Error iniciando sesión:", error);
      throw error;
    }
  },

  ProfileUser: async() => {
    const response = await axios.get(`${BASE_URL}/profile`)
    return response.data.usuario
  },

  logoutUser: async() => {
    console.log("estoy aca");
    const response = await axios.post(`${BASE_URL}/logout`)
    return response
  }
  
};

export default authService;
