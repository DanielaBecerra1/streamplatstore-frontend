import React, { useState } from 'react';
import ErrorModal from '../components/Modals/ErrorModal';
import { rentAccount } from '../api';
import { generateRandomEmail, generateRandomPassword } from '../utils/randomUtils';
import { Account } from '../utils/interfaces';


const RentAccount: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState<{ email: string, password: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRentAccount = async () => {
    try {
      const rentRequest: Account = {
        id: 2,
        platformName: "Netflix",
        duration: 30,
      };

      await rentAccount(rentRequest);

      const email = generateRandomEmail();
      const password = generateRandomPassword();
      setAccountInfo({ email, password });
    } catch (err) {
      console.error('Error al rentar cuenta:', err);
      setError('Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde.');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Rentar Cuenta</h1>
      <button 
        onClick={handleRentAccount} 
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Registrar Renta
      </button>
      {accountInfo && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Información de la Cuenta</h2>
          <p>Email: {accountInfo.email}</p>
          <p>Contraseña: {accountInfo.password}</p>
        </div>
      )}
      <ErrorModal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        errorMessage={error || ''} 
      />
    </div>
  );
};

export default RentAccount;