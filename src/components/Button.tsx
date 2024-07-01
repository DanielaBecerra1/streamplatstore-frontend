import React from 'react';
import { ButtonProps } from "../utils/interfaces";
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-gray-800 bg-blue-500 text-white py-2 px-4 rounded hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default Button;