import React, { useEffect, useState, useCallback } from 'react';
import { fetchAllCharacters } from '../services/ApiServiceCharacter';
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { FaChevronUp } from 'react-icons/fa'; // Importa el nuevo icono de volver arriba
import backgroundImage from '../assets/background-Characters.jpg'; // Asegúrate de tener una imagen en esta ruta

/**
 * Página para mostrar los personajes de Rick and Morty.
 * @returns {JSX.Element} - El componente de la página de personajes.
 */
const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showScroll, setShowScroll] = useState(false);

  // Efecto para obtener todos los personajes al cargar la página
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

  // Función para manejar la búsqueda y el filtrado de personajes
  const handleSearchAndFilter = useCallback(() => {
    let results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== 'all') {
      results = results.filter(character => character.status.toLowerCase() === filter);
    }

    setFilteredCharacters(results);
  }, [searchTerm, filter, characters]);

  // Efecto para actualizar los personajes filtrados cuando cambian el término de búsqueda o el filtro
  useEffect(() => {
    handleSearchAndFilter();
  }, [searchTerm, filter, handleSearchAndFilter]);

  // Función para manejar el scroll y mostrar el botón de volver arriba
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }}
      ></div>
      <div className="flex-grow relative z-10 p-8 flex flex-col items-center justify-start bg-black bg-opacity-50 mt-16 w-full">
        <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center animate-fade-in w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-white mb-8">Rick and Morty Characters</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setFilteredData={setFilteredCharacters}
            filter={filter}
            setFilter={setFilter}
            fetchData={fetchAllCharacters}
            placeholder="Search for characters..."
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
      <Footer />
      <div
        className="z-40 fixed bottom-4 right-1 flex border-cyan-50 border-2 items-center text-white bg-slate-800 p-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        <FaChevronUp style={{ fontSize: '1rem' }} />
        <span className="ml-1 text-sm">Back to top</span>
      </div>
    </div>
  );
};

export default CharactersPage;