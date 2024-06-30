import React from 'react';
import PlatformList from '../components/PlatformList';
import useFetch from '../hooks/useFetch';
import { Platform } from '../utils/interfaces';



const Platforms: React.FC = () => {
    const { data: platforms, loading, error } = useFetch<Platform[]>('/api/platforms');
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Plataformas Disponibles</h1>
        {platforms && <PlatformList platforms={platforms} />}
      </div>
    );
  };
  
  export default Platforms;
