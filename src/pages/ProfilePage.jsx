import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Spinner, Avatar, Flex, Center } from '@chakra-ui/react';

function ProfilePage() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se está cargando

  useEffect(() => {
    llamarApi();
  }, []);

  const llamarApi = () => {
    console.log("Llamando api users.");
    const token = localStorage.getItem('token');
    console.log(token);
    fetch('http://localhost:3000/api/extend/users/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(result => {
        console.log(result);
        if (result.status === 200) {
          result.json()
            .then(json => {
              console.log(json);
              setUserInfo(json.user);
              setIsLoading(false); // Marca la carga como completada cuando se recibe la respuesta
            });
        } else if (result.status === 401) {
          console.log(result);
          alert("Credenciales inválidas, debes iniciar sesión de nuevo.");
        } else if (result.status === 403) {
          console.log(result);
          alert("Usuario no autorizado, revisa tus accesos.");
        }
      })
      .catch(error => {
        console.error("Error al llamar a la API:", error);
      });
  };

  return (
    <Box maxW="600px" mx="auto" p="6">
      <Heading as="h2" size="lg" mb="4">Perfil de usuario</Heading>
      <Box boxShadow="md" borderWidth="1px" borderRadius="lg" p="4" mb="4">
        {isLoading ? ( // Muestra Spinner si isLoading es verdadero
          <Center>
            <Spinner size="lg" color="blue.500" />
          </Center>
        ) : (
          userInfo ? (
            <Flex align="center">
              <Avatar size="lg" name={`${userInfo.first_name} ${userInfo.last_name}`} src="url_de_la_foto" mr="4" /> {/* Reemplaza "url_de_la_foto" por la URL real de la foto del usuario */}
              <Box>
                <Text fontWeight="bold">Nombre:</Text>
                <Text>{userInfo.first_name} {userInfo.last_name}</Text>
                <Text fontWeight="bold" mt="2">Correo electrónico:</Text>
                <Text>{userInfo.email}</Text>
                {/* Agrega más detalles del usuario según sea necesario */}
              </Box>
            </Flex>
          ) : (
            <Text>No se pudo cargar la información del usuario.</Text>
          )
        )}
      </Box>
    </Box>
  );
}

export default ProfilePage;
