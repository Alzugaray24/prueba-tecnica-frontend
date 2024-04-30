import { useState, useEffect } from 'react';
import { Flex, Box, Button, Menu, MenuButton, MenuList, MenuItem, Spinner, Link as ChakraLink } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { RiShoppingCart2Line, RiUserLine } from 'react-icons/ri';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/NavBar.css";

const NavBar = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      loadUserInfo();
    }
  }, []);

  const loadUserInfo = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/extend/users/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUserInfo(response.data.user);
    } catch (error) {
      console.error('Error al cargar la información del usuario:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Flex p="4" className="navFlex" color="white" alignItems="center" justifyContent="space-between">
      <Box>
        <Link to={'/'}>
          <img src={logo} width={'100px'} alt="Logo" />
        </Link>
      </Box>
      <Box>
        <Flex alignItems="center">
          {isLoading ? (
            <Spinner size="sm" color="white" />
          ) : userInfo ? (
            <>
              <Box mr="4">
                <ChakraLink as={Link} to="/products" color="white" mr={4}>
                  <RiShoppingCart2Line size={24} />
                  <Box ml={2}>Productos</Box>
                </ChakraLink>
              </Box>
              <Box mr="4">
                <ChakraLink as={Link} to="/cart" color="white" mr={4}>
                  <RiShoppingCart2Line size={24} />
                  <Box ml={2}>Carrito</Box>
                </ChakraLink>
              </Box>
              <Box mr="4">
                <ChakraLink as={Link} to="/profile" color="white" mr={4}>
                  <RiUserLine size={24} />
                  <Box ml={2}>Profile</Box>
                </ChakraLink>
              </Box>
              <Box mr="4">
                Welcome {userInfo.first_name} {userInfo.last_name}
              </Box>
              <Button onClick={handleLogout} variant="outline" colorScheme="whiteAlpha">Logout</Button>
            </>
          ) : (
            <Menu>
              <MenuButton as={Button} bg="blue.500" rightIcon={<BsChevronDown />} color="white" variant="outline">
                Cuenta
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ChakraLink as={Link} to="/login" color="white">
                    Iniciar Sesión
                  </ChakraLink>
                </MenuItem>
                <MenuItem>
                  <ChakraLink as={Link} to="/register" color="white">
                    Registrarse
                  </ChakraLink>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
