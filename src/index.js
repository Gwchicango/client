import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'; // Importa Tailwind CSS
import AppRoutes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/client">
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);