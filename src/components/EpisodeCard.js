import React, { useState } from 'react';
import { fetchCharacterDetails } from '../services/ApiService';
import Characters from './Characters';

/**
 * Componente para mostrar la tarjeta de un episodio.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.episode - Los datos del episodio.
 * @returns {JSX.Element} - El componente de la tarjeta del episodio.
 */
const EpisodeCard = ({ episode }) => {
  // Estado para controlar si se muestra más información
  const [showMore, setShowMore] = useState(false);
  // Estado para almacenar los detalles de los personajes
  const [characters, setCharacters] = useState([]);

  /**
   * Función para alternar la visualización de más información.
   * Si se muestra más información, se obtienen los detalles de los personajes.
   */
  const toggleShowMore = async () => {
    if (!showMore) {
      const characterDetails = await fetchCharacterDetails(episode.characters);
      setCharacters(characterDetails);
    }
    setShowMore(!showMore);
  };

  /**
   * Función para cerrar el modal.
   */
  const closeModal = () => {
    setShowMore(false);
  };

  return (
    <>
      <div className="episode-card bg-slate-900 bg-opacity-90 border border-gray-300 rounded-lg shadow-lg p-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl mt-6 relative z-10">
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}
          alt={episode.name}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-white">{episode.name}</h2>
        <p className="text-gray-300 mb-4">Air Date: {episode.air_date}</p>
        <p className="text-gray-300">Episode: {episode.episode}</p>
        <button
          onClick={toggleShowMore}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
        >
          {showMore ? 'Show less' : 'Show more'} 
        </button>
      </div>

      {showMore && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content mt-32 mb-16 max-w-[13rem] p-2" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">{episode.name}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 transition duration-300">&times;</button>
            </div>
            <div className="modal-body">
              <p className="mb-4 text-lg text-gray-300"><strong>Air Date:</strong> {episode.air_date}</p>
              <p className="mb-4 text-lg text-gray-300"><strong>Episode:</strong> {episode.episode}</p>
              <h3 className="text-lg font-bold mb-4 text-white">Characters:</h3>
              <Characters characters={characters} />
              <button
                onClick={closeModal}
                className="mt-8 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodeCard;