/* eslint-disable react/prop-types */
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import ProductListItem from "./ProductListItem";
import { Flex, Button } from "@chakra-ui/react";

const ProductList = ({
  setProducts,
  products,
  onProductDeleted,
  onProductUpdated,
}) => {
  const columnCount = useBreakpointValue({ base: 2, sm: 4 });

  const handleSortChange = (sortType) => {
    switch (sortType) {
      case "priceDescending":
        setProducts([...products].sort((a, b) => b.price - a.price));
        break;
      case "priceAscending":
        setProducts([...products].sort((a, b) => a.price - b.price));
        break;
      case "titleAscending":
        setProducts(
          [...products].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "titleDescending":
        setProducts(
          [...products].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Flex justify="center" mb="4" mt="4">
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
      </Flex>
      <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={4}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductListItem
              product={product}
              onProductDeleted={onProductDeleted}
              onProductUpdated={onProductUpdated}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
