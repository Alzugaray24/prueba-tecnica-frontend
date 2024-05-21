import axios from "axios";

const BASE_URL = "http://localhost:8080/api/extend/users";
const userService = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        withCredentials: true,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error obteniendo usuarios", error);
      throw error;
    }
  },

  getUser: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile`, {
        withCredentials: true,
      });
      console.log(response);
      return response.data.usuario;
    } catch (error) {
      console.error("Error obteniendo usuarios", error);
      throw error;
    }
  },
};

export default userService;
