import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/ApiService';
import EpisodeList from '../components/EpisodeList';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const data = await fetchData();
      setEpisodes(data.results); // Asegúrate de que esta línea coincida con la estructura de la respuesta de tu API
    };
    getEpisodes();
  }, []);

  return (
    <div className="episodes-page bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Rick and Morty Episodes</h1>
      <EpisodeList episodes={episodes} />
    </div>
  );
};

export default EpisodesPage;