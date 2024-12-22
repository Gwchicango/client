import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { FaSpinner } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import backgroundImage from '../assets/background.jpg'; // Asegúrate de tener una imagen en esta ruta

/**
 * Componente para mostrar la página de inicio.
 * @returns {JSX.Element} - El componente de la página de inicio.
 */
const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  /**
   * Maneja el evento de carga de la imagen.
   */
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  /**
   * Maneja el evento de error de la imagen.
   */
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="home bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-8">
      {/* Muestra un spinner mientras la imagen se está cargando */}
      {!imageLoaded && !imageError && (
        <FaSpinner className="text-white text-5xl animate-spin" />
      )}
      {/* Imagen de fondo */}
      <img
        src={backgroundImage}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <div className="relative bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-8 text-white">Welcome to the World of Rick and Morty</h1>
        <p className="text-xl text-white mb-5">Explore the characters and episodes of the Rick and Morty universe.</p>
        <Link to="/episodes">
          <button className="animate-bounce bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
            View Episodes
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;