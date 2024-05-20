/* eslint-disable react/prop-types */
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import productService from "../services/productService";
import Swal from "sweetalert2";

const ProductListItem = ({ product, onProductDeleted, onProductUpdated }) => {
  const handleDelete = async () => {
    try {
      await productService.deleteProduct(product.id);
      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        text: "El producto ha sido eliminado exitosamente",
      });
      onProductDeleted(product.id);
    } catch (error) {
      console.error("Error eliminando producto:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al eliminar el producto",
      });
    }
  };

  const handleEdit = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Modificar Producto",
      html: `
        <input id="title" class="swal2-input" placeholder="Título" value="${product.title}">
        <textarea id="description" class="swal2-textarea" placeholder="Descripción">${product.description.Características}</textarea>
        <input id="price" type="number" class="swal2-input" placeholder="Precio" value="${product.price}">
        <input id="comparePrice" type="number" class="swal2-input" placeholder="Precio de Comparación" value="${product.compare_price}">
        <input id="stock" type="number" class="swal2-input" placeholder="Stock" value="${product.stock}">
        <input id="barcode" class="swal2-input" placeholder="Código de Barras" value="${product.barcode}">
        <input id="grams" type="number" class="swal2-input" placeholder="Gramos" value="${product.grams}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: document.getElementById("title").value,
          description: {
            Características: document.getElementById("description").value,
          },
          price: document.getElementById("price").value,
          compare_price: document.getElementById("comparePrice").value,
          stock: document.getElementById("stock").value,
          barcode: document.getElementById("barcode").value,
          grams: document.getElementById("grams").value,
        };
      },
    });

    if (formValues) {
      try {
        await productService.updateProduct(product.id, formValues); // Corregido el parámetro del id
        Swal.fire({
          icon: "success",
          title: "Producto actualizado",
          text: "El producto ha sido actualizado exitosamente",
        });
        onProductUpdated(product.id, formValues); // Actualiza la lista de productos en el componente padre
      } catch (error) {
        console.error("Error modificando producto:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al modificar el producto",
        });
      }
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
      <Text fontWeight="bold">{product.title}</Text>
      <Text>{product.description.Características}</Text>
      <Text>SKU: {product.sku}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>Compare Price: ${product.compare_price}</Text>
      <Text>Stock: {product.stock}</Text>
      <Text>Barcode: {product.barcode}</Text>
      <Text>Grams: {product.grams}</Text>
      <Flex mt={4} justifyContent="space-between">
        <Button colorScheme="red" onClick={handleDelete}>
          Eliminar
        </Button>
        <Button colorScheme="blue" onClick={handleEdit}>
          Modificar
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductListItem;
