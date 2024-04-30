import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import cartService from '../services/cartServices.jsx';

const ProductListItem = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      // Llama a la función addToCart del servicio de carrito
      await cartService.addToCart(product._id, 1); // Aquí asumimos que se agrega una cantidad de 1, puedes ajustarlo según sea necesario
      
      // Muestra una alerta para indicar que se agregó el producto al carrito con éxito
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product added to cart successfully!',
      });
    } catch (error) {
      // Manejo de errores
      console.error('Error adding to cart:', error);
      // Muestra una alerta de error si falla la operación
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
      boxShadow="md"
      maxW="320px"
      mx="auto"
      className="product-card"
    >
      <Box h="200px" position="relative">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          objectFit="cover"
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          left="0"
        />
      </Box>

      <Box p="4">
        <Text fontSize="lg" fontWeight="semibold" mb="2" className="product-title">
          {product.title}
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2" className="product-description">
          {product.description}
        </Text>
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
