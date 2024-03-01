import React from 'react';
import { Box } from '@chakra-ui/react';
import ProductListItem from './ProductListItem.jsx';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductListItem key={product.code} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
