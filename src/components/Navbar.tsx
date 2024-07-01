import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/stremPlatStore-logo-1.jpg';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-blue-500 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="StreamPlatStore Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-white text-lg font-semibold">
            StreamPlatStore
          </Link>
        </div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3">
            Home
          </Link>
          <Link to="/search" className="text-gray-300 hover:text-white px-3">
            Platforms
          </Link>
          <Link to="/admin" className="text-gray-300 hover:text-white px-3">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
