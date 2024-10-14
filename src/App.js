import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MapPage from './pages/MapPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/mapPage" />} />
        <Route path="/mapPage" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
