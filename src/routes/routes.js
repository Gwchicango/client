import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import EpisodesPage from '../pages/EpisodesPage';
import Character from '../pages/CharactersPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/Characters" element={<Character/>} />
    </Routes>
  );
};

export default AppRoutes;