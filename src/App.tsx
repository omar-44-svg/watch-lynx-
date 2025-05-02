import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import SellerTypePage from './pages/SellerTypePage';
import SellerRegistrationPage from './pages/SellerRegistrationPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/seller" element={<SellerTypePage />} />
          <Route path="/seller/register/:type" element={<SellerRegistrationPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;