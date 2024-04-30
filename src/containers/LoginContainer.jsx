import { useState } from 'react';
import { Box, Text, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import authService from '../services/authServices';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios'; // Importa Axios para manejar las solicitudes HTTP

// Configuración global de Axios
axios.defaults.withCredentials = true; // Habilitar cookies con las solicitudes salientes

const LoginContainer = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.loginUser(credentials);
      setLoginSuccess(true);

      console.log(response);

      // Guarda el token en la cookie
      Cookies.set('token', response.data.token, { expires: 1 });

      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Te has conectado exitosamente!'
      }).then(() => {
        window.location.href = '/';
      });
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.error
      });
    }
  };

  return (
    <Box p="4">
      <Text fontSize="xl" fontWeight="bold">Login</Text>
      <FormControl mt="4">
        <FormLabel>Email:</FormLabel>
        <Input type="email" name="email" value={credentials.email} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Password:</FormLabel>
        <Input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      </FormControl>
      <Button mt="4" onClick={handleLogin} isLoading={loading}>Login</Button>
      {error && <Text color="red">{error}</Text>}
      {loginSuccess && <Text color="green">Login successful!</Text>}
    </Box>
  );
};

export default LoginContainer;
