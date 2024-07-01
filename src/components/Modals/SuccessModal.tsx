import React from 'react';
import Modal from 'react-modal';

interface SuccessModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  successMessage: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onRequestClose, successMessage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Success Modal"
      className="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Éxito</h2>
      <p>{successMessage}</p>
      <button
        onClick={onRequestClose}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded mx-auto block"
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default SuccessModal;
