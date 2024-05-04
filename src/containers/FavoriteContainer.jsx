import { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import productService from "../services/productService";
import ProductList from "../components/ProductList";
import ErrorContainer from "./ErrorContainer";

const FavoriteContainer = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const data = await productService.getFavProds(); // Asegúrate de tener este servicio
        setFavoriteProducts(data.data.favoriteProducts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, []);

  return (
    <Flex direction="column" justify="center" align="center">
      <Box className="pepito" p="4">
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <ErrorContainer error={"No se encontraron productos favoritos"} />
        ) : (
          <ProductList products={favoriteProducts} />
        )}
      </Box>
    </Flex>
  );
};

export default FavoriteContainer;
