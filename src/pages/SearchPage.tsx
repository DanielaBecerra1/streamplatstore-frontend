import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import PlatformCard from '../components/PlatformCard';
import { Platform } from '../utils/interfaces';
import ErrorModal from '../components/Modals/ErrorModal';
import { findByName, findAllPlatforms } from '../api';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data: platforms, loading, error } = useFetch<Platform[]>(() => query ? findByName(query) : findAllPlatforms());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = '/'; // Redirigir al home
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Buscar Plataformas</h1>
      <SearchBar onSearch={handleSearch} />
      {platforms && platforms.length > 0 ? (
        platforms.map(platform => (
          <PlatformCard
            key={platform.id}
            name={platform.name}
            description={`Precio: ${platform.price}`}
            available={platform.available}
            price={platform.price}
            onClick={() => {}}
          />
        ))
      ) : (
        <p>No se encontraron plataformas.</p>
      )}
      <ErrorModal isOpen={isModalOpen} onRequestClose={closeModal} errorMessage={error || 'Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde.'} />
    </div>
  );
};

export default SearchPage;