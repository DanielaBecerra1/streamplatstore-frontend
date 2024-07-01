import { createPlatform } from "../api";


const platforms = [
    'Crunchyroll',
    'Disney-Start Plus',
    'Prime',
    'Max',
    'Netflix',
    'Plex',
    'Vix',
    'Spotify',
    'Espn',
    'Paramount'
  ];
  
  const getRandomPrice = () => Math.floor(Math.random() * (20000 - 12000 + 1)) + 12000;
  
  const ingestPlatforms = async () => {
    for (const platform of platforms) {
      const platformData = {
        name: platform,
        available: true,
        price: getRandomPrice()
      };
  
      try {
        await createPlatform(platformData);
      } catch (error) {
        console.error('Error al crear la plataforma:', platform, error);
      }
    }
  };
  
  export default ingestPlatforms;