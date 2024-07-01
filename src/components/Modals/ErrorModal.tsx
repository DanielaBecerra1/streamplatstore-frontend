import React from 'react';
import Modal from 'react-modal';
import { ErrorModalProps } from '../../utils/interfaces';
import Button from '../Button';



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
      <div className="py-2 px-4 rounded mx-auto flex justify-center items-center" >
         <Button onClick={onRequestClose}>Aceptar</Button>
      </div>

    </Modal>
  );
};

export default ErrorModal;