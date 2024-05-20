import axios from "axios";

const BASE_URL = "http://localhost:8080/api/extend/auth"; // Reemplaza esto con la URL de tu backend

const authService = {
  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error registrando usuario:", error);
      throw error;
    }
  },

  loginUser: async (userData) => {
    try {
      const { email, password } = userData;
      const response = await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password,
      });
      return response;
    } catch (error) {
      console.error("Error iniciando sesión:", error);
      throw error;
    }
  },
};

export default authService;
