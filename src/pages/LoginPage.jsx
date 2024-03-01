import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Text,
} from '@chakra-ui/react';
import authService from '../services/authServices.jsx';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authService.loginUser(email, password);
      console.log(response);
      if (response.status === 'Sesión iniciada') {
        // Mostrar mensaje de inicio de sesión exitoso con SweetAlert
        await Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido de nuevo!',
        });
        // Redirigir al usuario
        window.location.href = '/';
      } else {
        setLoginError(
          'Credenciales incorrectas. Por favor, inténtalo nuevamente.'
        );
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError(
        'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo nuevamente.'
      );
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>
        Iniciar Sesión
      </Heading>
      {loginError && (
        <Text color="red.500" mb={4}>
          {loginError}
        </Text>
      )}
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Contraseña</FormLabel>
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin} mb={4}>
        Iniciar Sesión
      </Button>
      <Text>
        ¿No tienes una cuenta?{' '}
        <Link color="blue.500" href="/register">
          Regístrate aquí
        </Link>
      </Text>
    </Box>
  );
};

export default LoginPage;
