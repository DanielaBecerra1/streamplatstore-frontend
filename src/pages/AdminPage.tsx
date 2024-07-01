import React, { useEffect, useState } from 'react';
import PlatformList from '../components/PlatformList';
import useFetch from '../hooks/useFetch';
import ErrorModal from '../components/Modals/ErrorModal';
import { Platform } from '../utils/interfaces';
import { findAllPlatforms } from '../api';

const AdminPage: React.FC = () => {
  const { data: platforms, loading, error } = useFetch<Platform[]>(findAllPlatforms);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = '/'; // Redirige al home
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Panel de Administración</h1>
      {platforms && platforms.length > 0 ? (
        <PlatformList platforms={platforms} />
      ) : (
        <p>No se encontraron plataformas.</p>
      )}
      <ErrorModal isOpen={isModalOpen} onRequestClose={closeModal} errorMessage={error || 'Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde.'} />
    </div>
  );
};

export default AdminPage;
