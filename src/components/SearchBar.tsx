import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar plataformas..."
        className="p-2 border border-gray-300 rounded-l-md"
      />
      <button onClick={handleSearch} className="bg-gradient-to-r from-gray-800 bg-blue-500 text-white py-2 px-4 rounded hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
