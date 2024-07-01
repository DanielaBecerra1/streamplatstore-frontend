import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import PlatformCard from "../components/PlatformCard";
import { Platform } from "../utils/interfaces";
import ErrorModal from "../components/Modals/ErrorModal";
import { findByName, findAllPlatforms } from "../api";
import imageMap from "../utils/imageMap";
import { formatPrice } from "../utils/randomUtils";
import { useNavigate } from "react-router-dom";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {
    data: platforms,
    loading,
    error,
  } = useFetch<Platform[]>(() =>
    query ? findByName(query) : findAllPlatforms()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = "/"; // Redirigir al home
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };
  const redirectToPlatform = (platformId: number) => {
    navigate(`/platform/${platformId}`); 
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Buscar Plataformas
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {platforms && platforms.length > 0 ? (
            platforms.map((platform) => (
              <div key={platform.id} className="group relative" onClick={() => redirectToPlatform(platform.id)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={imageMap[platform.name] || 'src/assets/default.jpg'} alt="StreamPlatStore" className="h-full w-full object-contain lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {platform.name}
                      </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-900">Disponible: {platform.available ? 'Yes' : 'No'}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Precio:{formatPrice(platform.price)}</p>
                </div>

              </div>

            ))
          ) : (
            <p>No se encontraron plataformas.</p>
          )}
        </div>

        <ErrorModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          errorMessage={
            error ||
            "Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde."
          }
        />
      </div>
    </div>
  );
};

export default SearchPage;