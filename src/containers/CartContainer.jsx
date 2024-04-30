import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import CartList from '../components/CartList';
import cartService from '../services/cartServices'

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
    <Box p="4">
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        error ? (
          <Text>Error: {error}</Text>
        ) : (
          <CartList cartItems={cartItems} />
        )
      )}
    </Box>
  );
};

export default CartContainer;
