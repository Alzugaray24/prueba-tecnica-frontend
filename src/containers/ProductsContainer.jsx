import { useState, useEffect } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import productService from "../services/productService.jsx";
import ProductList from "../components/ProductList.jsx";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("titleAscending"); // Estado para el tipo de ordenamiento

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;
        switch (
          sortBy // Según el tipo de ordenamiento seleccionado, se llama al servicio correspondiente
        ) {
          case "priceDescending":
            data = await productService.getAllProductsSortedByPriceDescending();
            break;
          case "priceAscending":
            data = await productService.getAllProductsSortedByPriceAscending();
            break;
          case "titleAscending":
            data = await productService.getAllProductsSortedByTitleDescending();
            break;
          case "titleDescending":
            data = await productService.getAllProductsSortedByTitleAscending();
            break;
          default:
            break;
        }
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortBy]);

  const handleSortChange = (sortType) => {
    setSortBy(sortType); // Actualiza el estado de ordenamiento al tipo seleccionado
  };

  return (
    <Flex direction="column" justify="center" align="center">
      {" "}
      {/* Centrar y alinear verticalmente */}
      <Box p="4">
        <Flex mb="4" justify="center">
          {" "}
          {/* Flexbox para alinear horizontalmente */}
          {/* Botones para seleccionar el tipo de ordenamiento */}
          <Button onClick={() => handleSortChange("titleAscending")} mr="2">
            A-Z
          </Button>
          <Button onClick={() => handleSortChange("titleDescending")} mr="2">
            Z-A
          </Button>
          <Button onClick={() => handleSortChange("priceDescending")} mr="2">
            Price high to low
          </Button>
          <Button onClick={() => handleSortChange("priceAscending")}>
            Price low to high
          </Button>
        </Flex>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : (
          <ProductList products={products} />
        )}
      </Box>
    </Flex>
  );
};

export default ProductsContainer;
