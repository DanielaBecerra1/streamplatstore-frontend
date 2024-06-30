import React, { useEffect, useState } from 'react';
import PlatformList from '../components/PlatformList';
import useFetch from '../hooks/useFetch';
import ErrorModal from '../components/Modals/ErrorModal';
import { Platform } from '../utils/interfaces';



const AdminPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data: platforms, loading, error } = useFetch<Platform[]>(`/api/platforms?search=${query}`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Panel de Administración</h1>
      {platforms && <PlatformList platforms={platforms} />}
      <ErrorModal isOpen={isModalOpen} onRequestClose={closeModal} errorMessage={error || ''} />
    </div>
  );
};

export default AdminPage;
