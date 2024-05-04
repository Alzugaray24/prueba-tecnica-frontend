import { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import productService from "../services/productService.jsx";
import ProductList from "../components/ProductList.jsx";
import ErrorContainer from "./ErrorContainer.jsx";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data =
          await productService.getAllProductsSortedByTitleDescending();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Flex direction="column" justify="center" align="center">
      <Box p="4">
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <ErrorContainer error={"No se encontraron productos"} />
        ) : (
          <ProductList products={products} />
        )}
      </Box>
    </Flex>
  );
};

export default ProductsContainer;
