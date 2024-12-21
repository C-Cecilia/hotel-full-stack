import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage';
import HotelDetailsPage from './pages/hotelDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/hotels" element= {<HomePage />} />

        {/* Rouet for hotel details */}
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />

        {/* Route for invaild routes to /hotels */}
        <Route path="*" element={<Navigate to = "/hotels" />} />

      </Routes>
  </Router>
  );
};

export default App;
