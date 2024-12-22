import React, { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

/**
 * Componente para mostrar una barra de búsqueda con sugerencias y opciones de filtro.
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.searchTerm - El término de búsqueda actual.
 * @param {Function} props.setSearchTerm - Función para actualizar el término de búsqueda.
 * @param {Function} props.setFilteredData - Función para actualizar los datos filtrados.
 * @param {string} props.filter - El filtro seleccionado.
 * @param {Function} props.setFilter - Función para actualizar el filtro.
 * @param {Function} props.fetchData - Función para obtener los datos de búsqueda.
 * @param {string} props.placeholder - Texto de marcador de posición para el campo de búsqueda.
 * @param {Array} props.filterOptions - Opciones de filtro disponibles.
 * @returns {JSX.Element} - El componente de la barra de búsqueda.
 */
const SearchBar = ({ searchTerm, setSearchTerm, setFilteredData, filter, setFilter, fetchData, placeholder, filterOptions }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const searchBarRef = useRef(null);

  // Efecto para obtener sugerencias de búsqueda basadas en el término de búsqueda
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        const data = await fetchData();
        if (data && data.results) {
          const filtered = data.results.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSuggestions(filtered);
          setNoResults(filtered.length === 0);
        }
      } else {
        setSuggestions([]);
        setNoResults(false);
      }
    };

    fetchSuggestions();
  }, [searchTerm, fetchData]);

  // Maneja la selección de una sugerencia
  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion.name);
    setFilteredData([suggestion]);
    setSuggestions([]);
    setNoResults(false);
  };

  // Maneja el clic fuera de la barra de búsqueda para cerrar el filtro y las sugerencias
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowFilter(false);
      setSuggestions([]);
    }
  };

  // Efecto para agregar y limpiar el evento de clic fuera de la barra de búsqueda
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="relative w-full max-w-md z-20 mb-16 mx-auto">
      <div className="flex items-center bg-gray-800 rounded shadow-md p-2">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-grow p-2 rounded-l bg-gray-700 text-white outline-none"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <FaFilter
          className="text-white ml-2 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
          title="Filter"
        />
      </div>
      {showFilter && (
        <div className="absolute top-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded shadow-lg z-10 w-full sm:w-auto">
          <select
            className="p-2 rounded bg-gray-700 text-white w-full sm:w-auto"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      )}
      {suggestions.length > 0 && (
        <ul className="absolute bg-gray-800 border border-gray-600 rounded w-full mt-1 z-10 shadow-lg">
          {suggestions.map(suggestion => (
            <li
              key={suggestion.id}
              className="p-2 cursor-pointer hover:bg-gray-700 text-white"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
      {noResults && (
        <div className="absolute bg-gray-800 border border-gray-600 rounded w-full mt-1 p-2 text-center text-white z-10 shadow-lg">
          No results found
        </div>
      )}
    </div>
  );
};

export default SearchBar;