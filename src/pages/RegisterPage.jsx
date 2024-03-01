import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import authService from "../services/authServices.jsx";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  const registerUser = async (userData) => {
    await authService.registerUser(userData);
    setSuccess(true);
    setError(null);
  };

  return (
    <Box maxW="400px" mx="auto" mt="8">
      <Heading mb="4">Register</Heading>
      {success && (
        <Text color="green.500">
          Registration successful! You can now login.
        </Text>
      )}
      {error && <Text color="red.500">{error}</Text>}
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Age</FormLabel>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mb="4">
          Register
        </Button>
      </form>
      <Text>
        Ya tienes cuenta?{" "}
        <Link color="blue.500" href="/login">
          Haz login aqui
        </Link>
      </Text>
    </Box>
  );
};

export default RegisterPage;
