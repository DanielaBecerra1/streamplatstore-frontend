import React from 'react';
import { PlatformDetailsProps } from '../utils/interfaces';


const PlatformDetails: React.FC<PlatformDetailsProps> = ({ platform }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
      <p>{platform.description}</p>
      <p>Available: {platform.available ? 'Yes' : 'No'}</p>
      <p>Price: ${platform.price}</p>
    </div>
  );
};

export default PlatformDetails;
