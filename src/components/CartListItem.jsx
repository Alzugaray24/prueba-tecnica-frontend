import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import cartService from "../services/cartServices";

const CartListItem = ({ item, onRemoveFromCart }) => {
  const handleRemoveFromCart = async (cartId) => {
    try {
      await cartService.removeFromCart(cartId);
      console.log("Product removed from cart successfully!");
      onRemoveFromCart(cartId); // Llama a la función proporcionada por el contenedor para actualizar la lista en tiempo real
    } catch (error) {
      console.error("Error removing from cart:", error);
      // Manejo de errores
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
      p="4"
      mb="4"
      className="cart-item"
    >
      {/* Mostrar el productID y la quantity para cada producto */}
      {item.products.map((productItem, index) => (
        <div key={index}>
          <Text fontSize="lg" fontWeight="semibold" mb="2">
            Product ID: {productItem.product}
          </Text>
          <Text fontSize="lg" fontWeight="semibold" mb="2">
            Quantity: {productItem.quantity}
          </Text>
        </div>
      ))}
      <Button
        colorScheme="red"
        mt="4"
        className="btn-remove-from-cart"
        onClick={() => handleRemoveFromCart(item._id)}
      >
        Remove from Cart
      </Button>
    </Box>
  );
};

export default CartListItem;
