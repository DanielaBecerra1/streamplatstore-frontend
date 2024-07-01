import React from 'react';
import { PlatformCardProps } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const PlatformCard: React.FC<PlatformCardProps> = ({ name, available, price, imageSrc, onClick }) => {
  const navigate = useNavigate();

  const handleRent = () => {
    navigate('/rent-account');
  };

  return (
    <div className="flex border rounded-lg p-4 mb-4">
      <img src={imageSrc} alt={name} className="w-20 h-20 object-contain mr-4" />
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p>Price: ${price}</p>
        <p>Available: {available ? 'Yes' : 'No'}</p>
        <Button onClick={handleRent}>Adquirir Plataforma</Button>
      </div>
    </div>
  );
};

export default PlatformCard;