import React from 'react';
import {  useNavigate } from 'react-router-dom';
import ErrorModal from '../components/Modals/ErrorModal';
import ingestPlatforms from '../utils/ingestPlatforms';

import imgCrunchyroll from '../assets/CrunchiRoll.jpg';
import imgDisney from '../assets/Disney-Star.jpg';
import imgVix from '../assets/vix-premium.jpg';
import imgSpotify from '../assets/spotify.jpg';
import imgPrime from '../assets/Prime.jpg';
import imgPlex from '../assets/plex.jpg';
import imgNetflix from '../assets/Netflix_Logo_RGB.jpg';
import imgEspn from '../assets/espn 2024.jpg';
import Button from '../components/Button';



const HomePage: React.FC = () => {
const navigate = useNavigate();
const SearchPage = () => {
  ingestPlatforms()
  navigate('/search');
};

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" font-size="2.75rem">
              Descubre la forma más sencilla y rápida de obtener cuentas para tus plataformas de streaming favoritas.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              ¡Aprovecha nuestras ofertas ahora mismo!
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src={imgCrunchyroll} alt="Crunchyroll" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgDisney} alt="Disney" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgVix} alt="Vix" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgSpotify} alt="Spotify" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgPrime} alt="Prime" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgPlex} alt="Plex" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgNetflix} alt="Netflix" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={imgEspn} alt="Espn" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={SearchPage}>Ver Plataformas</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
