/* eslint-disable react/prop-types */
import { Alert, AlertIcon, Box, Text } from "@chakra-ui/react";

const ErrorContainer = (props) => {
  console.log("estoy acax");
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <Text fontSize="xl" fontWeight="bold">
          {props.error}
        </Text>
      </Alert>
    </Box>
  );
};

export default ErrorContainer;
