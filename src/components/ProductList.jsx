/* eslint-disable react/prop-types */
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products, onProductDeleted, onProductUpdated }) => {
  const columnCount = useBreakpointValue({ base: 2, sm: 4 });

  return (
    <Grid
      templateColumns={`repeat(${columnCount}, 1fr)`}
      gap={4}
      autoFlow="row"
    >
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
  );
};

export default ProductList;
