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
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-r-md">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
