/* eslint-disable react/prop-types */
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaUserTag } from 'react-icons/fa';

const ProfileDetails = ({ profile }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" boxShadow="md">
      <Flex align="center" mb="4">
        <Icon as={FaUser} boxSize={6} color="blue.500" />
        <Text fontWeight="bold" fontSize="xl" ml="2">{profile.firstName} {profile.lastName}</Text>
      </Flex>
      <Flex align="center" mb="2">
        <Icon as={FaEnvelope} boxSize={4} color="gray.500" />
        <Text ml="2">{profile.email}</Text>
      </Flex>
      <Flex align="center">
        <Icon as={FaUserTag} boxSize={4} color="gray.500" />
        <Text ml="2">Age: {profile.age}</Text>
      </Flex>
      <Flex align="center">
        <Icon as={FaUserTag} boxSize={4} color="gray.500" />
        <Text ml="2">Role: {profile.role}</Text>
      </Flex>
    </Box>
  );
};

export default ProfileDetails;
