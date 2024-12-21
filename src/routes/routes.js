import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import EpisodesPage from '../pages/EpisodesPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;