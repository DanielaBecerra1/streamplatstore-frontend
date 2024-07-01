import React from 'react';
import PlatformCard from './PlatformCard';
import { Platform } from '../utils/interfaces';
import imageMap from '../utils/imageMap';

const PlatformList: React.FC<{ platforms: Platform[] }> = ({ platforms }) => {
  return (
    <div>
      {platforms.map(platform => (
        <PlatformCard
          id={platform.id}
          name={platform.name}
          available={platform.available}
          price={platform.price}
          imageSrc={imageMap[platform.name] || 'src/assets/default.jpg'}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default PlatformList;
