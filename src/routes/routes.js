import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import EpisodesPage from '../pages/EpisodesPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/episodes" element={<EpisodesPage />} />
    </Routes>
  );
};

export default AppRoutes;