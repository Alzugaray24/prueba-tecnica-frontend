import axios from "axios";

const BASE_URL = "http://localhost:9090/api/extend/products"; // Reemplaza esto con la URL de tu backend

const productService = {
  getAllProductsSortedByTitleDescending: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/sorted-by-title-descending`
      );
      return response.data.productos.items;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getAllProductsSortedByTitleAscending: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/sorted-by-title-ascending`);
      return response.data.productos.items;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getAllProductsSortedByPriceAscending: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/sorted-by-price-ascending`);
      return response.data.productos.items;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getAllProductsSortedByPriceDescending: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/sorted-by-price-descending`
      );
      return response.data.productos.items;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Agregar un nuevo producto
  addProduct: async (newProductData) => {
    try {
      const response = await axios.post(`${BASE_URL}`, newProductData);
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  // Agregar un nuevo producto a favoritos
  addOrRemoveProductToFavorite: async (productId) => {
    try {
      const response = await axios.post(`${BASE_URL}/favorite/${productId}`);
      console.log(response.data.booleano);
      return response.data.booleano;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  getFavProds: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/favorite`);
      console.log("aca", response.data.favoriteProducts);
      return response;
    } catch (error) {
      console.error("Error searching favorite product:", error);
      throw error;
    }
  },

  // Actualizar un producto existente
  updateProduct: async (productId, updatedProductData) => {
    try {
      console.log(productId);
      console.log(updatedProductData);
      const response = await axios.put(
        `${BASE_URL}/${productId}`,
        updatedProductData
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  // Eliminar un producto existente
  deleteProduct: async (productId) => {
    try {
      console.log(productId);
      const response = await axios.delete(`${BASE_URL}/${productId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export default productService;
