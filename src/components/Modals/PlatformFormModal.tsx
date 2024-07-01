import React, { useState } from 'react';
import { Platform, PlatformFormModalProps } from '../../utils/interfaces';
import Button from '../Button';
import Modal from './Modal';

const platformNames = [
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
  
  const PlatformFormModal: React.FC<PlatformFormModalProps> = ({ platform, onSubmit, onClose }) => {
    const [name, setName] = useState(platform?.name || '');
    const [available, setAvailable] = useState(platform?.available || false);
    const [price, setPrice] = useState(platform?.price || 0);
  
    const handleSubmit = () => {
      onSubmit({
          name, available, price,
          id: 0,
          imageSrc: ''
      });
    };
  
    return (
      <Modal isOpen={true} onRequestClose={onClose}>
        <div className="p-4 bg-gradient-to-b from-gray-200 to-gray-400 rounded">
          <h2 className="text-2xl mb-4">{platform ? 'Actualizar Plataforma' : 'Registrar Plataforma'}</h2>
          <div className="mb-4">
            <label className="block text-sm mb-2">Nombre de la plataforma</label>
            <select value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded">
              <option value="">Seleccione una plataforma</option>
              {platformNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Disponible</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" value="true" checked={available === true} onChange={() => setAvailable(true)} />
                <span className="ml-2">Sí</span>
              </label>
              <label className="flex items-center">
                <input type="radio" value="false" checked={available === false} onChange={() => setAvailable(false)} />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Precio</label>
            <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div className="flex justify-end space-x-4">
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={handleSubmit}>Aceptar</Button>
          </div>
        </div>
      </Modal>
    );
  };
  
  export default PlatformFormModal;
