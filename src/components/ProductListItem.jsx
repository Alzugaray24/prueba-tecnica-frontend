/* eslint-disable react/prop-types */
import { Box, Image, Text, Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import cartService from '../services/cartServices.jsx';

const ProductListItem = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      await cartService.addToCart(product._id, 1);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product added to cart successfully!',
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add product to cart',
      });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      maxW="320px"
      mx="auto"
      className="product-card"
    >
      <Box h="200px" position="relative" paddingTop="4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          objectFit="cover"
          w="100%"
          h="100%"
          p="5"
          top="0"
          left="0"
        />
      </Box>

      <Box p="4">
        <Text fontSize="xl" fontWeight="semibold" mb="2" className="product-title">
          {product.title}
        </Text>
        <Text fontSize="md" color="gray.600" mb="2" className="product-description">
          {product.description}
        </Text>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt="2">
          <Text fontSize="lg" fontWeight="bold" className="product-price">
            ${product.price.toFixed(2)}
          </Text>
          <Text fontSize="sm" color="gray.600" className="product-stock">
            Stock: {product.stock}
          </Text>
        </Box>
        <Button colorScheme="blue" mt="4" className="btn-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductListItem;
