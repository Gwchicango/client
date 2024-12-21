import React from 'react';
import noImageAvailable from '../assets/no-image-available.jpg'; // Asegúrate de tener esta imagen en la ruta correcta

const CharacterCard = ({ character }) => {
  const imageUrl = character.image || noImageAvailable;

  return (
    <div className="bg-gray-800 p-2 rounded-lg shadow-lg w-64">
      <img src={imageUrl} alt={character.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-2">
        <h3 className="text-lg font-bold text-white">{character.name}</h3>
        <p className="text-gray-400 text-sm">Status: {character.status}</p>
        <p className="text-gray-400 text-sm">Species: {character.species}</p>
        <p className="text-gray-400 text-sm">Gender: {character.gender}</p>
        <p className="text-gray-400 text-sm">Origin: {character.origin.name}</p>
        <p className="text-gray-400 text-sm">Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;