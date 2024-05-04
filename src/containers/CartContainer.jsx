import { useState, useEffect } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import CartList from "../components/CartList";
import cartService from "../services/cartServices";
import ErrorContainer from "./ErrorContainer";
import authService from "../services/authServices";

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await cartService.getCart();
        setCartItems(cartData.products);
        setLoading(false); // Aquí marcamos como cargado el carrito una vez que se obtiene la información
      } catch (error) {
        setError(true);
        setLoading(false);
      }

      try {
        await authService.ProfileUser(); // Aquí solo intentamos obtener la información del usuario, sin manejo de errores específico
      } catch (error) {
        console.error("Error obteniendo información del usuario:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box p="4">
        {loading ? (
          <Spinner size="xl" color="blue.500" />
        ) : error ? (
          <ErrorContainer error={"No se encontro ningun carrito"} />
        ) : (
          <CartList cartItems={cartItems} />
        )}
      </Box>
    </Flex>
  );
};

export default CartContainer;
