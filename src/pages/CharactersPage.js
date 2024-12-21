import React, { useEffect, useState, useCallback } from 'react';
import { fetchAllCharacters } from '../services/ApiServiceCharacter';
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import backgroundImage from '../assets/background-Characters.jpg'; // Asegúrate de tener una imagen en esta ruta

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const data = await fetchAllCharacters();
      if (data) {
        setCharacters(data);
        setFilteredCharacters(data);
      } else {
        setCharacters([]);
        setFilteredCharacters([]);
      }
      setLoading(false);
    };
    getCharacters();
  }, []);

  const handleSearchAndFilter = useCallback(() => {
    let results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== 'all') {
      results = results.filter(character => character.status.toLowerCase() === filter);
    }

    setFilteredCharacters(results);
  }, [searchTerm, filter, characters]);

  useEffect(() => {
    handleSearchAndFilter();
  }, [searchTerm, filter, handleSearchAndFilter]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(4px)', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="relative z-10 p-8 flex flex-col items-center justify-start min-h-screen bg-black bg-opacity-50 mt-16">
        <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center animate-fade-in w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-white mb-8">Rick and Morty Characters</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setFilteredData={setFilteredCharacters}
            filter={filter}
            setFilter={setFilter}
            fetchData={fetchAllCharacters}
            placeholder="Buscar personajes..."
            filterOptions={[
              { value: 'all', label: 'All' },
              { value: 'alive', label: 'Alive' },
              { value: 'dead', label: 'Dead' },
              { value: 'unknown', label: 'Unknown' },
            ]}
          />
          {loading ? (
            <div className="loader"></div>
          ) : filteredCharacters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {filteredCharacters.map(character => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          ) : (
            <div className="text-white">No hay información disponible</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;