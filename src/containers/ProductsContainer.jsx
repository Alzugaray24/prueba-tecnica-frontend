import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import productService from '../services/productService.jsx';
import ProductList from '../components/ProductList.jsx'; 
import "../styles/productContainer.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box p="4">
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <ProductList products={products} />
      )}
    </Box>
  );
};

export default ProductsContainer;
