import React from 'react';
import PlatformCard from './PlatformCard';
import { Platform } from '../utils/interfaces';

const PlatformList: React.FC<{ platforms: Platform[] }> = ({ platforms }) => {
  return (
    <div>
      {platforms.map(platform => (
        <PlatformCard
          key={platform.id}
          name={platform.name}
          description={platform.description}
          available={platform.available}
          price={platform.price}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default PlatformList;
