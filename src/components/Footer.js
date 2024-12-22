import React from 'react';

/**
 * Componente para mostrar el pie de página.
 * @returns {JSX.Element} - El componente del pie de página.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 z-30">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Rick and Morty App. Todos los derechos reservados.</p>
        <p>
          Desarrollado por <a href="https://github.com/Gwchicango" className="text-green-400 hover:text-green-600">George Chicango</a>
        </p>
        <p>
          <a href="https://rickandmortyapi.com/" className="text-green-400 hover:text-green-600" target="_blank" rel="noopener noreferrer">
            API de Rick and Morty
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;