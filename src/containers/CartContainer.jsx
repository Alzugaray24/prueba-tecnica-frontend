import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";
import cartService from "../services/cartServices.jsx";
import CartList from "../components/CartList.jsx";

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await cartService.getCart();
        setCartItems(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (cartId) => {
    try {
      await cartService.removeFromCart(cartId);
      const updatedCartItems = await cartService.getCart();
      setCartItems(updatedCartItems);
      // Mostrar alerta de éxito al eliminar el producto
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product removed from cart successfully!",
      });
    } catch (error) {
      console.error("Error removing from cart:", error);
      // Mostrar alerta de error si falla la eliminación del producto
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to remove product from cart",
      });
    }
  };

  return (
    <Box p="4">
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <CartList cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      )}
    </Box>
  );
};

export default CartContainer;
