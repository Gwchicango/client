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

  return (
    <>
      <div className="episode-card bg-white bg-opacity-90 border border-gray-300 rounded-lg shadow-lg p-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}
          alt={episode.name}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-gray-800">{episode.name}</h2>
        <p className="text-gray-600 mb-4">Air Date: {episode.air_date}</p>
        <p className="text-gray-600">Episode: {episode.episode}</p>
        <button
          onClick={toggleShowMore}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>

      {showMore && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{episode.name}</h2>
              <button onClick={toggleShowMore}>&times;</button>
            </div>
            <div className="modal-body">
              <p className="mb-4 text-lg"><strong>Air Date:</strong> {episode.air_date}</p>
              <p className="mb-4 text-lg"><strong>Episode:</strong> {episode.episode}</p>
              <h3 className="text-xl font-bold mb-4">Characters:</h3>
              <Characters characters={characters} />
              <button
                onClick={toggleShowMore}
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