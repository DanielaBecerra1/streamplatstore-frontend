import React from 'react';
import { PlatformCardProps } from '../utils/interfaces';


const PlatformCard: React.FC<PlatformCardProps> = ({ name, description, available, price, onClick }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>{description}</p>
      <p>Available: {available ? 'Yes' : 'No'}</p>
      <p>Price: ${price}</p>
      <button onClick={onClick} className="mt-2 text-blue-500 hover:underline">
        Ver detalles
      </button>
    </div>
  );
};

export default PlatformCard;