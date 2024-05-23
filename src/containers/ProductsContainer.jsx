// product
import { useState, useEffect } from "react";
import { Box, Text, Flex, Spinner, Button } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import ErrorContainer from "./ErrorContainer";
import productService from "../services/productService";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await productService.getAllProducts(
          currentPage,
          productsPerPage
        );
        setProducts(productsData);
      } catch (err) {
        setError(err.response.data);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      maxW="1200px"
      w="auto"
      mt="20px"
      mb="20px"
    >
      <Box p="4">
        {isLoading ? (
          <Spinner size="xl" color="blue.500" />
        ) : error ? (
          <ErrorContainer error={error} />
        ) : products.length > 0 ? (
          <>
            <ProductList
              products={products}
              onProductDeleted={handleProductDeleted}
              onProductUpdated={handleProductUpdated}
              setProducts={setProducts}
            />
            <Flex justify="space-between" mt="4">
              <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Anterior
              </Button>

              <Button onClick={handleNextPage}>Siguiente</Button>
            </Flex>
          </>
        ) : (
          <Text>No se encontraron productos</Text>
        )}
      </Box>
    </Flex>
  );
};

export default ProductsContainer;
