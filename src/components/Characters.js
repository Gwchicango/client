import React from 'react';

/**
 * Componente para mostrar una lista de personajes.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.characters - La lista de personajes a mostrar.
 * @returns {JSX.Element} - El componente de la lista de personajes.
 */
const Characters = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {characters.map(character => (
        <div key={character.id} className="character-card">
          <img
            src={character.image}
            alt={character.name}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <p className="text-gray-800 font-bold">{character.name}</p>
            <p className="text-gray-600">Status: {character.status}</p>
            <p className="text-gray-600">Species: {character.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;