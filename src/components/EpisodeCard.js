import React, { useState } from 'react';
import { fetchCharacterDetails } from '../services/ApiService';
import Characters from './Characters';

const EpisodeCard = ({ episode }) => {
  const [showMore, setShowMore] = useState(false);
  const [characters, setCharacters] = useState([]);

  const toggleShowMore = async () => {
    if (!showMore) {
      const characterDetails = await fetchCharacterDetails(episode.characters);
      setCharacters(characterDetails);
    }
    setShowMore(!showMore);
  };

  const closeModal = () => {
    setShowMore(false);
  };

  return (
    <>
      <div className="episode-card bg-slate-900 bg-opacity-90 border border-gray-300 rounded-lg shadow-lg p-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl mt-16 relative z-10">
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
          {showMore ? 'Ver menos' : 'Ver más'}
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