import React, { useState } from 'react';
import { Box, Text, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import authService from '../services/authService';

const AuthContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authService.loginUser(email, password);
      console.log(response); // Puedes manejar la respuesta según lo necesites
    } catch (error) {
      console.error('Error logging in:', error);
      // Mostrar alerta de error si falla el inicio de sesión
    }
  };

  const handleRegister = async () => {
    try {
      const userData = { email, password }; // Asegúrate de incluir otros campos del usuario si es necesario
      const response = await authService.registerUser(userData);
      console.log(response); // Puedes manejar la respuesta según lo necesites
    } catch (error) {
      console.error('Error registering:', error);
      // Mostrar alerta de error si falla el registro
    }
  };
  

  return (
    <Box p="4">
      <FormControl mb="4">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" mr="4" onClick={handleLogin}>
        Login
      </Button>
      <Button colorScheme="green" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default AuthContainer;
