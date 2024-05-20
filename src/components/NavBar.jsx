import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();

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

  // Verifica si hay un token guardado en la cookie
  const isLoggedIn = !!Cookies.get("token");

  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="center" align="center">
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
    </Box>
  );
};

export default NavBar;
