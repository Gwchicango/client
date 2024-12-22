import React from 'react';
import noImageAvailable from '../assets/no-image-available.jpg';

/**
 * Componente para mostrar la tarjeta de un personaje.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.character - Los datos del personaje.
 * @returns {JSX.Element} - El componente de la tarjeta del personaje.
 */
const CharacterCard = ({ character }) => {
  // URL de la imagen del personaje o una imagen por defecto si no está disponible
  const imageUrl = character.image || noImageAvailable;

  /**
   * Manejador de errores para la carga de la imagen.
   * Si la imagen no se puede cargar, se muestra una imagen por defecto.
   * @param {Object} e - El evento de error.
   */
  const handleError = (e) => {
    e.target.src = noImageAvailable;
  };

  return (
    <div className="bg-gray-800 p-2 rounded-lg shadow-lg w-64 transform transition-transform duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={character.name}
        className="w-full h-40 object-cover rounded-t-lg"
        onError={handleError}
      />
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