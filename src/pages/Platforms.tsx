import React, { useEffect, useState } from 'react';
import PlatformList from '../components/PlatformList';
import useFetch from '../hooks/useFetch';
import { findAllPlatforms } from '../api';
import ErrorModal from '../components/Modals/ErrorModal';
import { Platform } from '../utils/interfaces';

const Platforms: React.FC = () => {
  const { data: platforms, loading, error } = useFetch<Platform[]>(findAllPlatforms);
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

  if (loading) return (
    <div className="flex-grow flex items-center justify-center">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Plataformas Disponibles</h1>
      {platforms && <PlatformList platforms={platforms} />}
      <ErrorModal isOpen={isModalOpen} onRequestClose={closeModal} errorMessage={error || 'No hay plataformas Registradas, Por Favor intentalo mas tarde.'} />
    </div>
  );
};

export default Platforms;