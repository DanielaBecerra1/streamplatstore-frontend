import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-blue-500 text-white px-6 text-center py-4">
      <div>
        &copy; {new Date().getFullYear()} StreamPlatStore. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
