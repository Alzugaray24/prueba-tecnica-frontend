/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import cartService from "../services/cartServices.jsx";
import productService from "../services/productService.jsx";
import authService from "../services/authServices.jsx";

const ProductListItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const user = await authService.ProfileUser();
        const userId = user.id;
        const userFavoritesKey = `favorites_${userId}`;
        const storedFavorites =
          JSON.parse(localStorage.getItem(userFavoritesKey)) || [];
        setIsFavorite(storedFavorites.includes(product._id));
        setIsUser(true); // Se establece como verdadero después de obtener la información del usuario
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, [product._id]);

  const handleAddToCart = async () => {
    try {
      await cartService.addToCart(product._id, 1);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product added to cart successfully!",
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add product to cart",
      });
    }
  };

  const handleToggleFavorite = async () => {
    try {
      const user = await authService.ProfileUser();
      const userId = user.id;
      const userFavoritesKey = `favorites_${userId}`;
      const storedFavorites =
        JSON.parse(localStorage.getItem(userFavoritesKey)) || [];
      let updatedFavorites = [];

      if (isFavorite) {
        updatedFavorites = storedFavorites.filter((id) => id !== product._id);
      } else {
        updatedFavorites = [...storedFavorites, product._id];
      }

      localStorage.setItem(userFavoritesKey, JSON.stringify(updatedFavorites));
      setIsFavorite(!isFavorite);
      setIsUser(true);
      await productService.addOrRemoveProductToFavorite(product._id);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      maxW="320px"
      mx="auto"
      className="product-card"
      marginTop={"40px"}
    >
      <Box
        h="200px"
        position="relative"
        paddingTop="4"
        display="flex"
        justifyContent="space-between"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          objectFit="contain"
          w="calc(100% - 30px)"
          h="100%"
          p="5"
          top="0"
          left="0"
        />
        <Button
          colorScheme={isFavorite ? "red" : "gray"}
          variant="ghost"
          size="sm"
          position="absolute"
          top="4"
          right="4"
          onClick={handleToggleFavorite}
        >
          <FaHeart />
        </Button>
      </Box>

      <Box p="4">
        <Text
          fontSize="xl"
          fontWeight="semibold"
          mb="2"
          className="product-title"
        >
          {product.title}
        </Text>
        <Text
          fontSize="md"
          color="gray.600"
          mb="2"
          className="product-description"
        >
          {product.description}
        </Text>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="2"
        >
          <Text fontSize="lg" fontWeight="bold" className="product-price">
            ${product.price.toFixed(2)}
          </Text>
          <Text fontSize="sm" color="gray.600" className="product-stock">
            Stock: {product.stock}
          </Text>
        </Box>
        {isUser ? (
          <Button
            colorScheme="blue"
            mt="4"
            className="btn-add-to-cart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        ) : (
          <Text color="red.500" mt="4">
            Please sign in to add to cart
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default ProductListItem;
