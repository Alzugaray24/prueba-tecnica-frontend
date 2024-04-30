/* eslint-disable react/prop-types */
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
