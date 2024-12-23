const API_URL = 'https://rickandmortyapi.com/api/episode';

/**
 * Función para obtener los datos de los episodios desde la API.
 * @returns {Object} - Los datos de los episodios.
 */
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Devuelve los datos
  } catch (error) {
    console.error('Error al obtener los datos', error);
  }
};

/**
 * Función para obtener los detalles de los personajes desde la API.
 * @param {Array} characterUrls - Las URLs de los personajes.
 * @returns {Array} - Los detalles de los personajes.
 */
const fetchCharacterDetails = async (characterUrls) => {
  try {
    const characterPromises = characterUrls.map(url => fetch(url).then(res => res.json()));
    const characters = await Promise.all(characterPromises);
    return characters;
  } catch (error) {
    console.error('Error al obtener los detalles de los personajes', error);
  }
};

module.exports = { fetchData, fetchCharacterDetails };