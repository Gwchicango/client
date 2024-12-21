import React, { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const SearchBar = ({ searchTerm, setSearchTerm, setFilteredData, filter, setFilter, fetchData, placeholder, filterOptions }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const searchBarRef = useRef(null);

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

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion.name);
    setFilteredData([suggestion]);
    setSuggestions([]);
    setNoResults(false);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowFilter(false);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="relative w-full max-w-md z-20 mb-8 mx-auto">
      <div className="flex items-center bg-gray-800 rounded shadow-md p-2">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-grow p-2 rounded-l bg-gray-700 text-white outline-none"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <FaFilter className="text-white ml-2 cursor-pointer" onClick={() => setShowFilter(!showFilter)} />
      </div>
      {showFilter && (
        <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-600 rounded shadow-lg z-10">
          <select
            className="p-2 rounded bg-gray-700 text-white"
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
          No se encontraron resultados
        </div>
      )}
    </div>
  );
};

export default SearchBar;