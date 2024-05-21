import { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import ErrorContainer from "./ErrorContainer";
import productService from "../services/productService";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await productService.getAllProducts();
        setProducts(productsData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductDeleted = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleProductUpdated = (productId, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? updatedProduct : product
      )
    );
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      maxW="1200"
      w="auto"
      mt="20px"
      mb="20px"
    >
      <Box p="4">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <ErrorContainer
            error={
              "Usuario no autenticado, inicia sesion para ver los productos"
            }
          />
        ) : products.length > 0 ? (
          <ProductList
            products={products}
            onProductDeleted={handleProductDeleted}
            onProductUpdated={handleProductUpdated}
          />
        ) : (
          <Text>No se encontraron productos</Text>
        )}
      </Box>
    </Flex>
  );
};

export default ProductsContainer;
