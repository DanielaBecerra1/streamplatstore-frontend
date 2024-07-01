import React, { useState } from 'react';
import ErrorModal from '../components/Modals/ErrorModal';
import { rentAccount } from '../api';
import { generateRandomEmail, generateRandomPassword } from '../utils/randomUtils';
import { Account } from '../utils/interfaces';
import Button from '../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import SuccessModal from '../components/Modals/SuccessModal';
import imageMap from '../utils/imageMap';


const RentAccount: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const platform = location.state?.platform;
  const [accountInfo, setAccountInfo] = useState<{ email: string, password: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRentAccount = async () => {
    // Simulación de obtener datos de cuenta
    const email = generateRandomEmail();
    const password = generateRandomPassword();
    setAccountInfo({ email, password });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  if (!platform) {
    return <p>No se encontró la información de la plataforma.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-500 rounded-lg shadow-md overflow-hidden">
        <div className="md:flex items-center">
          <div className="md:w-1/3 p-6">
            <img
              src={imageMap[platform.name] || "src/assets/default.jpg"}
              alt={platform.name}
              className="h-80 w-80 object-contain rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-3xl font-semibold mb-4 text-white">{platform.name}</h2>
            <p className="text-gray-200 mb-6">{platform.description}</p>
            <p className="text-gray-200 mb-6">Duración: {platform.duration} días</p>
            <p className="text-gray-200 mb-6">Precio: ${platform.price}</p>
            {accountInfo && (
              <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                <p>Email: {accountInfo.email}</p>
                <p>Contraseña: {accountInfo.password}</p>
                <p>Gracias por tu compra</p>
              </div>
            )}
            <div className="flex justify-center mt-4">
              <Button onClick={handleRentAccount}>Registrar Adquisición de Cuenta</Button>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        successMessage="Compra registrada exitosamente"
      />
    </div>
  );
};

export default RentAccount;