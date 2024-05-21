import {
  Box,
  Flex,
  Link,
  Text,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { isOpen, onToggle } = useDisclosure();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const usuario = await userService.getUser();
        setUser(usuario);
      } catch (error) {
        setError("Failed to fetch user");
      }
    };

    getUser();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");

    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      text: "Has cerrado sesión exitosamente.",
    }).then(() => {
      navigate("/");
    });
  };

  const isLoggedIn = !!Cookies.get("token");

  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        {isLoggedIn && user ? (
          <Text color="white" mx={2}>
            Bienvenido, {user.first_name} {user.last_name}
          </Text>
        ) : (
          <Text color="white" mx={2}></Text>
        )}
        <Flex align="center">
          <IconButton
            aria-label="Toggle navigation"
            icon={<FaBars />}
            color="white"
            fontSize="20px"
            onClick={onToggle}
            mr={2}
            display={{ base: "block", md: "none" }}
          />
          <Flex
            align="center"
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          >
            {isLoggedIn ? (
              <>
                <Link
                  as={RouterLink}
                  to="/create-product"
                  mx={2}
                  color="white"
                  fontWeight="bold"
                >
                  Crear Producto
                </Link>
                <Text color="white" mx={2}>
                  /
                </Text>
                <Link
                  as={RouterLink}
                  to="/products"
                  mx={2}
                  color="white"
                  fontWeight="bold"
                >
                  Ver Productos
                </Link>
                <Text color="white" mx={2}>
                  /
                </Text>
                <Link
                  onClick={handleLogout}
                  mx={2}
                  color="white"
                  fontWeight="bold"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  as={RouterLink}
                  to="/login"
                  mx={2}
                  color="white"
                  fontWeight="bold"
                >
                  Login
                </Link>
                <Text color="white" mx={2}>
                  /
                </Text>
                <Link
                  as={RouterLink}
                  to="/register"
                  mx={2}
                  color="white"
                  fontWeight="bold"
                >
                  Register
                </Link>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
