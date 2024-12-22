import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

/**
 * Componente para mostrar la barra de navegación.
 * @returns {JSX.Element} - El componente de la barra de navegación.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Enlace a la página principal */}
        <Link to="/" className="navbar-brand">
          Rick and Morty
        </Link>
        <div className="navbar-links">
          {/* Enlace a la página de inicio */}
          <Link to="/" className="navbar-link">
            Home
          </Link>
          {/* Enlace a la página de episodios */}
          <Link to="/episodes" className="navbar-link">
            Episodes
          </Link>
          {/* Enlace a la página de personajes */}
          <Link to="/characters" className="navbar-link">
            Characters
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;