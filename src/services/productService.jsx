import axios from "axios";

const BASE_URL = "http://localhost:8080/api/extend/products";

const productService = {
  getAllProducts: async (page = 1, limit = 10) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: { page, limit },
        withCredentials: true,
      });
      return response.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  addProduct: async (newProductData) => {
    try {
      const response = await axios.post(BASE_URL, newProductData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  updateProduct: async (productId, updatedProductData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/${productId}`,
        updatedProductData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${productId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export default productService;
