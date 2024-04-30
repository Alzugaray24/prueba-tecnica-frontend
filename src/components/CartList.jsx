import React from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import CartListItem from './CartListItem';

const CartList = ({ cartItems }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="gray.100" // Color de fondo
      borderRadius="lg" // Borde redondeado
      boxShadow="md" // Sombra
      p="4" // Relleno
    >
      {/* Mapea cada elemento del carrito y renderiza un componente CartListItem para cada uno */}
      {cartItems.map((item) => (
        <CartListItem key={item.product._id} item={item} />
      ))}
      
      {/* Botones para finalizar compra y seguir comprando */}
      <Box mt="4" display="flex" justifyContent="space-between">
        <Button colorScheme="teal" onClick={() => alert("Función de finalizar compra aún no implementada")}>Finalizar compra</Button>
        <Link as={RouterLink} to="/products">
          <Button colorScheme="blue">Seguir comprando</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartList;
