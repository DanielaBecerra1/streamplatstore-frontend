import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PlatformDetails from '../components/PlatformDetails';
import { findByid } from '../api';
import ErrorModal from '../components/Modals/ErrorModal';



const PlatformDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: platform, loading, error } = useFetch(() => findByid(Number(id)));
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


  if (loading) return <p>Loading...</p>;


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Detalles de la Plataforma</h1>
      {platform && <PlatformDetails platform={platform} />}
      <ErrorModal isOpen={isModalOpen} onRequestClose={closeModal} errorMessage={error || 'Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde.'} />
    </div>
  );
};

export default PlatformDetailsPage;
