import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import CartListItem from './CartListItem.jsx'; // Asegúrate de tener este componente importado

const CartList = ({ cartItems, onRemoveFromCart }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
      {cartItems.map((item) => (
        <CartListItem key={item._id} item={item} onRemoveFromCart={onRemoveFromCart} />
      ))}
    </SimpleGrid>
  );
};

export default CartList;
