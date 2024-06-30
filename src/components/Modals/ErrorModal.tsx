import React from 'react';
import Modal from 'react-modal';

interface ErrorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  errorMessage: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onRequestClose, errorMessage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Error Modal"
      className="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Error</h2>
      <p>{errorMessage}</p>
      <button
        onClick={onRequestClose}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded mx-auto block"
      >
        Close
      </button>
    </Modal>
  );
};

export default ErrorModal;
