import axios from "axios";

const BASE_URL = "http://localhost:8080/api/extend/users";
const userService = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error obteniendo usuarios", error);
      throw error;
    }
  },
};

export default userService;
