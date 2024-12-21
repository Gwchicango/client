import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';
import backgroundImage from '../assets/background.jpg'; // Asegúrate de tener una imagen en esta ruta

const Home = () => {
  return (
    <div
      className="home bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Bienvenido al Mundo de Rick and Morty
        </h1>
        <Link to="/episodes">
          <button className="animate-bounce bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
            Ver Episodios
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;