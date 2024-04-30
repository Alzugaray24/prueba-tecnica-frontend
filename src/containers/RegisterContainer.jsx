import { useState } from 'react';
import { Box, Text, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import authService from '../services/authServices';

const RegisterContainer = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await authService.registerUser(userData);
      setSuccessMessage('User registered successfully!');
      // Redireccionar a la página de inicio de sesión después del registro exitoso
      window.location.href = '/login';
    } catch (error) {
      setError(error.response.data.error); // Mostrar el mensaje de error específico
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p="4">
      <Text fontSize="xl" fontWeight="bold">Register</Text>
      {successMessage && <Text color="green">{successMessage}</Text>}
      <FormControl mt="4">
        <FormLabel>First Name:</FormLabel>
        <Input type="text" name="first_name" value={userData.first_name} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Last Name:</FormLabel>
        <Input type="text" name="last_name" value={userData.last_name} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Email:</FormLabel>
        <Input type="email" name="email" value={userData.email} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Age:</FormLabel>
        <Input type="number" name="age" value={userData.age} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Password:</FormLabel>
        <Input type="password" name="password" value={userData.password} onChange={handleInputChange} />
      </FormControl>
      <Button mt="4" onClick={handleRegister} isLoading={loading}>Register</Button>
      {error && <Text color="red">Error: {error}</Text>}
    </Box>
  );
};

export default RegisterContainer;
