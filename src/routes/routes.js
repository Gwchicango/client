import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import EpisodesPage from '../pages/EpisodesPage';
import CharactersPage from '../pages/CharactersPage';

/**
 * Componente para definir las rutas de la aplicación.
 * @returns {JSX.Element} - El componente de las rutas de la aplicación.
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirige la ruta raíz a /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      {/* Ruta para la página de inicio */}
      <Route path="/home" element={<Home />} />
      {/* Ruta para la página de episodios */}
      <Route path="/episodes" element={<EpisodesPage />} />
      {/* Ruta para la página de personajes */}
      <Route path="/characters" element={<CharactersPage />} />
      {/* Redirige cualquier ruta no definida a /home */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;