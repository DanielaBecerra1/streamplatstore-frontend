import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import PlatformDetailsPage from '../pages/PlatformDetailsPage';
import AdminPage from '../pages/AdminPage';
import RentAccount from '../pages/RentAccount';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/platform/:id" element={<PlatformDetailsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/rent-account" element={<RentAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
