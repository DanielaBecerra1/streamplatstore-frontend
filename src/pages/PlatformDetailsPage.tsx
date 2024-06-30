import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PlatformDetails from '../components/PlatformDetails';
import { Platform } from '../utils/interfaces';



const PlatformDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: platform, loading, error } = useFetch<Platform>(`/api/platforms/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Detalles de la Plataforma</h1>
      {platform && <PlatformDetails platform={platform} />}
    </div>
  );
};

export default PlatformDetailsPage;
