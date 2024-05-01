import { useState, useEffect } from 'react';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'; // Importar Flex desde Chakra UI
import CartList from '../components/CartList';
import cartService from '../services/cartServices';

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await cartService.getCart();
        setCartItems(data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <Flex justify="center" align="center" height="100vh"> {/* Centrar y alinear verticalmente */}
      <Box p="4">
        {loading ? (
          <Spinner size="xl" color="blue.500" /> // Reemplazar el texto por el Spinner
        ) : (
          error ? (
            <Text>Error: {error}</Text>
          ) : (
            <CartList cartItems={cartItems} />
          )
        )}
      </Box>
    </Flex>
  );
};

export default CartContainer;
