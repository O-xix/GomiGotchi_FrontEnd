import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LitterInfoPage from './pages/LitterInfoPage/LitterInfoPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PickUpLitterPage from './pages/PickUpLitterPage/PickUpLitterPage';
import ReportLitterPage from './pages/ReportLitterPage/ReportLitterPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import './App.css'; // Import the CSS file for styling`

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/litter-pick-up/:id" element={<PickUpLitterPage/>}/>
        <Route path="/litter-info/:id" element={<LitterInfoPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/report-litter" element={<ReportLitterPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
