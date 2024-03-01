import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/extend/cart'; // Ruta de la API de carrito

const cartService = {
  // Obtener el contenido del carrito
  getCart: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  },

  // Agregar un producto al carrito
  addToCart: async (productId, quantity) => {
    try {
      const response = await axios.post(`${BASE_URL}`, { id: productId, quantity });
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  },

  // Actualizar la cantidad de un producto en el carrito
  updateCartItem: async (itemId, quantity) => {
    try {
      const response = await axios.put(`${BASE_URL}/${itemId}`, { quantity });
      return response.data;
    } catch (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  },

  // Eliminar un producto del carrito
  removeFromCart: async (itemId) => {
    try {
        console.log(itemId);
      const response = await axios.delete(`${BASE_URL}/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  },

  // Vaciar todo el contenido del carrito
  clearCart: async () => {
    try {
      const response = await axios.delete(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  }
};

export default cartService;
