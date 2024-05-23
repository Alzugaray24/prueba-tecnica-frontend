/* eslint-disable react/prop-types */
import {
  Grid,
  GridItem,
  useBreakpointValue,
  Input,
  Flex,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import ProductListItem from "./ProductListItem";
import { useState, useEffect } from "react";
import ErrorContainer from "../containers/ErrorContainer";

const ProductList = ({
  setProducts,
  products,
  onProductDeleted,
  onProductUpdated,
}) => {
  const columnCount = useBreakpointValue({ base: 2, sm: 4 });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  const handleSortChange = (sortType) => {
    switch (sortType) {
      case "priceDescending":
        setProducts([...filteredProducts].sort((a, b) => b.price - a.price));
        break;
      case "priceAscending":
        setProducts([...filteredProducts].sort((a, b) => a.price - b.price));
        break;
      case "titleAscending":
        setProducts(
          [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "titleDescending":
        setProducts(
          [...filteredProducts].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Flex justify="space-between" mt={5} mb={5}>
        <Box>
          <Button onClick={() => handleSortChange("titleAscending")} mr="2">
            A-Z
          </Button>
          <Button onClick={() => handleSortChange("titleDescending")} mr="2">
            Z-A
          </Button>
          <Button onClick={() => handleSortChange("priceDescending")} mr="2">
            Precio más alto
          </Button>
          <Button onClick={() => handleSortChange("priceAscending")}>
            Precio más bajo
          </Button>
        </Box>
        <Box>
          <Input
            placeholder="Buscar producto por titulo"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            mb="4"
            width="300px"
            borderRadius="md"
            boxShadow="sm"
          />
        </Box>
      </Flex>
      {filteredProducts.length === 0 ? (
        <Box mt={5} mb={5}>
          <ErrorContainer error={"Ningun producto coincide con la busqueda"} />
        </Box>
      ) : (
        <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={4}>
          {filteredProducts.map((product) => (
            <GridItem key={product.id}>
              <ProductListItem
                product={product}
                onProductDeleted={onProductDeleted}
                onProductUpdated={onProductUpdated}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductList;
