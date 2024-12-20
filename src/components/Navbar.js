import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Rick and Morty
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/episodes" className="navbar-link">
            Episodes
          </Link>
          <Link to="/Characters" className="navbar-link">
            Characters
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;