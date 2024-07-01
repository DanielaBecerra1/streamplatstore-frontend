import React, {  useState } from 'react';
import useFetch from '../hooks/useFetch';
import ErrorModal from '../components/Modals/ErrorModal';
import { Platform } from '../utils/interfaces';
import { createPlatform, deletePlatform, findAllPlatforms, updatePlatform } from '../api';
import Button from '../components/Button';
import SuccessModal from '../components/Modals/SuccessModal';
import PlatformFormModal from '../components/Modals/PlatformFormModal';

const AdminPage: React.FC = () => {
  const { data: platforms, loading, error } = useFetch<Platform[]>(findAllPlatforms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleCreateOrUpdate = async (platform: Partial<Platform>) => {
    try {
      if (selectedPlatform) {
        await updatePlatform(selectedPlatform.id, platform);
      } else {
        await createPlatform(platform);
      }
      setIsSuccessModalOpen(true);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePlatform(id);
      setIsSuccessModalOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
    setSelectedPlatform(null);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-blue-600">Lista de Plataformas</h1>
        <div className="flex space-x-2">
          <Button onClick={() => setIsModalOpen(true)}>Agregar</Button>
        </div>
      </div>
      {platforms && platforms.length > 0 ? (
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-blue-100 text-blue-700">
              <th className="py-2 border-b">Nombre</th>
              <th className="py-2 border-b text-center">Disponible</th>
              <th className="py-2 border-b text-center">Precio</th>
              <th className="py-2 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map(platform => (
              <tr key={platform.id} className="border-b">
                <td className="py-2 px-4">{platform.name}</td>
                <td className="py-2 px-4 text-center">{platform.available ? 'Sí' : 'No'}</td>
                <td className="py-2 px-4 text-center">{platform.price}</td>
                <td className="py-2 px-4 text-center">
                  <button onClick={() => { setSelectedPlatform(platform); setIsModalOpen(true); }} className="mr-2 text-blue-500">Actualizar</button>
                  <button onClick={() => handleDelete(platform.id)} className="text-red-500">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron plataformas.</p>
      )}
      <ErrorModal isOpen={isModalOpen} onRequestClose={closeModal} errorMessage={error || 'Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde.'} />
      <SuccessModal isOpen={isSuccessModalOpen} onRequestClose={closeModal} successMessage="Operación realizada exitosamente." />
      {isModalOpen && <PlatformFormModal platform={selectedPlatform} onSubmit={handleCreateOrUpdate} onClose={closeModal} />}
    </div>
  );
};

export default AdminPage;