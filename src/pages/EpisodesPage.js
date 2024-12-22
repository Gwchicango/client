import React, { useEffect, useState, useCallback } from 'react';
import { fetchData } from '../services/ApiService';
import EpisodeList from '../components/EpisodeList';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer'; // Importa el componente Footer
import backgroundImage from '../assets/background-Episode.jpg'; 

/**
 * Página para mostrar los episodios de Rick and Morty.
 * @returns {JSX.Element} - El componente de la página de episodios.
 */
const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Efecto para obtener todos los episodios al cargar la página
  useEffect(() => {
    const getEpisodes = async () => {
      setLoading(true);
      const data = await fetchData('episode');
      if (data && data.results) {
        setEpisodes(data.results);
        setFilteredEpisodes(data.results);
      } else {
        setEpisodes([]);
        setFilteredEpisodes([]);
      }
      setLoading(false);
    };
    getEpisodes();
  }, []);

  // Función para manejar la búsqueda y el filtrado de episodios
  const handleSearchAndFilter = useCallback(() => {
    let results = episodes.filter(episode =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== 'all') {
      results = results.filter(episode => episode.episode.startsWith(filter));
    }

    setFilteredEpisodes(results);
  }, [searchTerm, filter, episodes]);

  // Efecto para actualizar los episodios filtrados cuando cambian el término de búsqueda o el filtro
  useEffect(() => {
    handleSearchAndFilter();
  }, [searchTerm, filter, handleSearchAndFilter]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }}
      ></div>
      <div className="flex-grow relative z-10 p-8 flex flex-col items-center justify-start bg-black bg-opacity-50 mt-16 w-full">
        <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center animate-fade-in w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-white mb-8">Rick and Morty Episodes</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setFilteredData={setFilteredEpisodes}
            filter={filter}
            setFilter={setFilter}
            fetchData={() => fetchData('episode')}
            placeholder="Search episodes..."
            filterOptions={[
              { value: 'all', label: 'All' },
              { value: 'S01', label: 'Season 1' },
              { value: 'S02', label: 'Season 2' },
              { value: 'S03', label: 'Season 3' },
              { value: 'S04', label: 'Season 4' },
              { value: 'S05', label: 'Season 5' },
            ]}
          />
          {loading ? (
            <div className="loader"></div>
          ) : filteredEpisodes.length > 0 ? (
            <EpisodeList episodes={filteredEpisodes} />
          ) : (
            <div className="text-white mt-48">No hay información disponible</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EpisodesPage;