/* eslint-disable react/prop-types */
import { Box, Button, Link, Grid, GridItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import CartListItem from "./CartListItem";

const CartList = ({ cartItems }) => {
  return (
    <Box
      mt="100px" // Espacio desde el Navbar
      mb="100px" // Espacio desde el Footer
      p="4" // Relleno
    >
      {/* Grid para mostrar los elementos del carrito */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }} // Responsivo: 1 columna en dispositivos pequeños, 2 columnas en medianos, 3 columnas en grandes
        gap={4} // Espacio entre los elementos
      >
        {cartItems.map((item) => (
          <GridItem key={item.product._id}>
            <CartListItem item={item} />
          </GridItem>
        ))}
      </Grid>
      {/* Botones para finalizar compra y seguir comprando */}
      <Box mt="4" display="flex" justifyContent="space-between">
        <Button
          colorScheme="teal"
          onClick={() =>
            alert("Función de finalizar compra aún no implementada")
          }
        >
          Finalizar compra
        </Button>
        <Link as={RouterLink} to="/products">
          <Button colorScheme="blue">Seguir comprando</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartList;
