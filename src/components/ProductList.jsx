/* eslint-disable react/prop-types */
import { Grid, GridItem } from "@chakra-ui/react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)" // Define 4 columnas de igual tamaño
      gap={4} // Espacio entre los elementos
    >
      {products.map((product) => (
        <GridItem key={product.code}>
          <ProductListItem product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductList;
