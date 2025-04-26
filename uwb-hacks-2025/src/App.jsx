import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LitterPage from './components/LitterPage';
import HomePage from './components/HomePage';
import InputLitterPage from './components/InputLitterPage';
import './App.css'; // Import the CSS file for styling`

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/litter/:id" element={<LitterPage />} />
        <Route path="/add/:id" element={<InputLitterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
