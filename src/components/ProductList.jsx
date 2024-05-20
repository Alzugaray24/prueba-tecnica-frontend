/* eslint-disable react/prop-types */
import { Grid, GridItem } from "@chakra-ui/react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products, onProductDeleted, onProductUpdated }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4} autoFlow="row">
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
