// En NavBar.js
import React from 'react';
import { Flex, Box, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { RiShoppingCart2Line } from 'react-icons/ri';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Flex p="4" className="navFlex" color="white" alignItems="center">
      <Box flex="1" mr="4">
        <Link to={'/'}>
          <img src={logo} width={'100px'} alt="Logo" />
        </Link>
      </Box>
      <Box mr="4">
        <Menu bg="blue.500">
          <MenuButton as={Button} bg="blue.500" rightIcon={<BsChevronDown />} color="black" variant="ghost">
            Cuenta
          </MenuButton>
          <MenuList>
            <MenuItem color="black">
              <Link to="/login" variant="ghost" color='black'>
                Iniciar Sesión
              </Link>
            </MenuItem>
            <MenuItem color="black">
            <Link to="/register" variant="ghost" color='black'>
                Registrarse
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Link to="/cart"> {/* Vincula el icono del carrito a la página de carrito */}
          <RiShoppingCart2Line size={24} color="white" />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
