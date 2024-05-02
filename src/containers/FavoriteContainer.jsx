// import { useState, useEffect } from 'react';
// import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
// import ProductList from '../components/ProductList'; // Asegúrate de tener este componente
// import productService from '../services/productService';

// const FavoriteContainer = () => {
//   const [favoriteProducts, setFavoriteProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFavoriteProducts = async () => {
//       try {
//         const data = await productService.getFavoriteProducts(); // Asegúrate de tener este servicio
//         setFavoriteProducts(data.favoriteProducts);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchFavoriteProducts();
//   }, []);

//   return (
//     <Flex justify="center" align="center" height="100vh"> {/* Centrar y alinear verticalmente */}
//       <Box p="4">
//         {loading ? (
//           <Spinner size="xl" color="blue.500" /> // Reemplazar el texto por el Spinner
//         ) : (
//           error ? (
//             <Text>Error: {error}</Text>
//           ) : (
//             <ProductList products={favoriteProducts} /> // Asegúrate de pasar los productos al componente ProductList
//           )
//         )}
//       </Box>
//     </Flex>
//   );
// };

// export default FavoriteContainer;
