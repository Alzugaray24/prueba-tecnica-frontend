import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p="4">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Bienvenido a nuestra tienda en línea
      </Text>
      <Text>Por favor, inicia sesión para ver nuestros productos.</Text>
    </Box>
  );
};

export default Home;
