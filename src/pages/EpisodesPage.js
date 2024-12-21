import React, { useEffect, useState, useCallback } from 'react';
import { fetchData } from '../services/ApiService';
import EpisodeList from '../components/EpisodeList';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/background-Episode.jpg'; // Asegúrate de tener una imagen en esta ruta

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEpisodes = async () => {
      setLoading(true);
      const data = await fetchData();
      if (data && data.results) {
        setEpisodes(data.results);
        setFilteredEpisodes(data.results);
      }
      setLoading(false);
    };
    getEpisodes();
  }, []);

  const handleSearch = useCallback(() => {
    setLoading(true);
    const results = episodes.filter(episode =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEpisodes(results);
    setLoading(false);
  }, [searchTerm, episodes]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, handleSearch]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(4px)', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 mt-16">
        <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center animate-fade-in w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white">Rick and Morty Episodes</h1>
          <input
            type="text"
            placeholder="Buscar episodios..."
            className="mb-8 p-2 rounded w-full max-w-md text-center"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {loading ? (
            <div className="loader"></div>
          ) : (
            <EpisodeList episodes={filteredEpisodes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;