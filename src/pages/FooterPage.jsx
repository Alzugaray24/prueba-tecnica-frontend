import React from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';

const FooterPage = () => {
  return (
    <Box bg="gray.900" color="white" py="4" px="6">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Tu Tienda de Computación
          </Text>
          <Text mt="2" fontSize="sm">
            123 Calle Principal, Ciudad, País
          </Text>
          <Text fontSize="sm">Teléfono: +1234567890</Text>
          <Text fontSize="sm">Email: info@tutienda.com</Text>
        </Box>
        <Flex>
          <Link mx="2" fontSize="sm">
            Inicio
          </Link>
          <Link mx="2" fontSize="sm">
            Productos
          </Link>
          <Link mx="2" fontSize="sm">
            Servicios
          </Link>
          <Link mx="2" fontSize="sm">
            Acerca de nosotros
          </Link>
          <Link mx="2" fontSize="sm">
            Contacto
          </Link>
        </Flex>
      </Flex>
      <Text mt="4" fontSize="sm" textAlign="center">
        &copy; 2024 Tu Tienda de Computación. Todos los derechos reservados.
      </Text>
    </Box>
  );
};

export default FooterPage;
