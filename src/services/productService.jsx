import axios from "axios";

const BASE_URL = "http://localhost:8080/api/extend/products";

const productService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  addProduct: async (newProductData) => {
    try {
      console.log(newProductData);
      const response = await axios.post(`${BASE_URL}`, newProductData);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  updateProduct: async (productId, updatedProductData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/${productId}`,
        updatedProductData
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
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
