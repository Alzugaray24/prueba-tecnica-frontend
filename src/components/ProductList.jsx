/* eslint-disable react/prop-types */
import { Grid, GridItem, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (sortType) => {
    switch (sortType) {
      case "priceDescending":
        setSortedProducts(
          [...sortedProducts].sort((a, b) => b.price - a.price)
        );
        break;
      case "priceAscending":
        setSortedProducts(
          [...sortedProducts].sort((a, b) => a.price - b.price)
        );
        break;
      case "titleAscending":
        setSortedProducts(
          [...sortedProducts].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "titleDescending":
        setSortedProducts(
          [...sortedProducts].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Flex justify="center" mb="4" marginTop={"40px"}>
        {" "}
        {/* Centra los botones */}
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
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        autoFlow="row" // Mostrar elementos en filas
      >
        {sortedProducts.map((product) => (
          <GridItem key={product.code}>
            <ProductListItem product={product} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
