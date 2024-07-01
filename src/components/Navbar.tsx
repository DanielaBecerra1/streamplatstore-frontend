import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">StreamPlatStore</Link>
        <div>
          <Link to="/search" className="mr-4">Buscar tus Plataformas</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
