import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import ProfileDetails from '../components/ProfileDetails';
import authService from '../services/authServices';

const ProfileContainer = () => {
  const [profile, setProfile] = useState(null); // Estado para almacenar los datos del perfil
  const [loading, setLoading] = useState(true); // Estado para indicar si se están cargando los datos
  const [error, setError] = useState(null); // Estado para almacenar errores si ocurren

  useEffect(() => {
    // Función asincrónica para obtener los datos del perfil
    const fetchProfile = async () => {
      try {
        // Llama al servicio para obtener los datos del perfil
        const data = await authService.ProfileUser();
        setProfile(data); // Actualiza el estado con los datos del perfil
        setLoading(false); // Indica que la carga ha terminado
      } catch (error) {
        setError(error.message); // Almacena el error si ocurre uno
        setLoading(false); // Indica que la carga ha terminado
      }
    };

    // Llama a la función para obtener los datos del perfil cuando el componente se monta
    fetchProfile();
  }, []); // La dependencia vacía indica que este efecto se ejecutará solo una vez, cuando el componente se monte

  return (
    <Box p="4">
      {loading ? ( // Si se están cargando los datos, muestra un mensaje de carga
        <Text>Loading...</Text>
      ) : error ? ( // Si ocurre un error, muestra un mensaje de error
        <Text>Error: {error}</Text>
      ) : (
        <ProfileDetails profile={profile} /> // Si no hay errores y los datos se cargaron correctamente, muestra los detalles del perfil
      )}
    </Box>
  );
};

export default ProfileContainer;
