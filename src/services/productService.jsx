import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/extend/products'; // Reemplaza esto con la URL de tu backend

const productService = {
  // Obtener todos los productos
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Agregar un nuevo producto
  addProduct: async (newProductData) => {
    try {
      const response = await axios.post(`${BASE_URL}`, newProductData);
      return response.data;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  },

  // Actualizar un producto existente
  updateProduct: async (productId, updatedProductData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${productId}`, updatedProductData);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  // Eliminar un producto existente
  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};

export default productService;
