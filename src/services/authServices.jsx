import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/extend/users'; // Reemplaza esto con la URL de tu backend

const authService = {
  // Registro de usuario
  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registrando usuario:', error);
      throw error;
    }
  },

  // Inicio de sesión
  loginUser: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Error iniciando sesión:', error);
      throw error;
    }
  },

  // Cierre de sesión
  logoutUser: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      console.error('Error cerrando sesión:', error);
      throw error;
    }
  },

  // Obtener perfil de usuario
  getUserProfile: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile`);
      return response.data;
    } catch (error) {
      console.error('Error obteniendo perfil de usuario:', error);
      throw error;
    }
  },

  // Actualizar perfil de usuario
  updateUserProfile: async (userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/profile`, userData);
      return response.data;
    } catch (error) {
      console.error('Error actualizando perfil de usuario:', error);
      throw error;
    }
  },

  // Eliminar cuenta de usuario
  deleteUserAccount: async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/profile`);
      return response.data;
    } catch (error) {
      console.error('Error eliminando cuenta de usuario:', error);
      throw error;
    }
  }
};

  

export default authService;
