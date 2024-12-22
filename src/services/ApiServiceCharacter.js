const API_BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Función para obtener todos los personajes desde la API.
 * La función maneja la paginación para obtener todos los personajes.
 * @returns {Array|null} - Un array con todos los personajes o null en caso de error.
 */
const fetchAllCharacters = async () => {
  let allCharacters = [];
  let nextPageUrl = `${API_BASE_URL}/character`;

  try {
    while (nextPageUrl) {
      const response = await fetch(nextPageUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      allCharacters = allCharacters.concat(data.results);
      nextPageUrl = data.info.next;
    }
    return allCharacters; // Devuelve todos los personajes
  } catch (error) {
    console.error('Error al obtener los datos', error);
    return null;
  }
};

export { fetchAllCharacters };