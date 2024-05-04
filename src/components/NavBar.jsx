import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Button,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineUserCircle, HiOutlineShoppingCart } from "react-icons/hi"; // Importar iconos
import authService from "../services/authServices";

const NavBar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userProfile = await authService.ProfileUser();
        console.log(userProfile);
        setUserData(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    // Llamar a la función de logout del servicio de autenticación
    await authService.logoutUser();
    // Redirigir al usuario a la página de inicio
    window.location.href = "/";
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="blue.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            MyShop
          </Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => console.log("Toggle menu")}
      >
        <Icon
          as={HiOutlineShoppingCart}
          fill="white"
          width="20px"
          height="20px"
        />
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Flex align="center" mr={5}>
          <ChakraLink as={Link} to="/products" mr={5}>
            Products
          </ChakraLink>
          <ChakraLink as={Link} to="/cart" mr={5}>
            <Icon as={HiOutlineShoppingCart} mr={1} />
          </ChakraLink>
          {userData && userData.role === "admin" && (
            <>
              <ChakraLink as={Link} to="/manage-products" mr={5}>
                Manage Products
              </ChakraLink>
              <ChakraLink as={Link} to="/manage-users" mr={5}>
                Manage Users
              </ChakraLink>
            </>
          )}
        </Flex>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        {userData ? (
          <>
            <ChakraLink as={Link} to="/favorite" mr={5}>
              Favorite Products
            </ChakraLink>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              as={Link}
              to="/profile"
              mr={5}
            >
              <Icon as={HiOutlineUserCircle} mr={1} />
              {userData.fullName}
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              as={Link}
              to="/login"
              mr={5}
            >
              Login
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              as={Link}
              to="/register"
            >
              Register
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default NavBar;
