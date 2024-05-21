import { useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import productService from "../services/productService";
import Swal from "sweetalert2";

const CreateProd = () => {
  const [formData, setFormData] = useState({
    handle: "",
    title: "",
    description: "",
    sku: "",
    grams: "",
    stock: "",
    price: "",
    compare_price: "",
    barcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await productService.addProduct(formData);
      if (response.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Producto creado",
          text: "El producto ha sido creado exitosamente",
        });

        setFormData({
          handle: "",
          title: "",
          description: "",
          sku: "",
          grams: "",
          stock: "",
          price: "",
          compare_price: "",
          barcode: "",
        });
      } else {
        throw new Error(response.error || "Error al crear el producto");
      }
    } catch (error) {
      console.error("Error creando producto:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Hubo un error al crear el producto",
      });
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="handle" mb={4}>
          <FormLabel>Handle</FormLabel>
          <Input
            type="text"
            name="handle"
            value={formData.handle}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="title" mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="sku" mb={4}>
          <FormLabel>SKU</FormLabel>
          <Input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="grams" mb={4}>
          <FormLabel>Grams</FormLabel>
          <Input
            type="number"
            name="grams"
            value={formData.grams}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="stock" mb={4}>
          <FormLabel>Stock</FormLabel>
          <Input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="price" mb={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="compare_price" mb={4}>
          <FormLabel>Compare Price</FormLabel>
          <Input
            type="number"
            name="compare_price"
            value={formData.compare_price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="barcode" mb={4}>
          <FormLabel>Barcode</FormLabel>
          <Input
            type="text"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Flex justifyContent="center">
          <Button colorScheme="blue" type="submit">
            Crear Producto
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default CreateProd;
