import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="home bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Rick and Morty</h1>
      <Link to="/episodes">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Ver Episodios
        </button>
      </Link>
    </div>
  );
};

export default App;