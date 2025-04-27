import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import HappyGomi from '../../assets/gomi-sprites/happy-gomi.png';
import LifeLabsLogo from '../../assets/100_Life_Labs_Year.svg'; // Import the SVG file

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="login-page">
            <div className="circle">
                <img src={HappyGomi} alt="Happy-Gomi" className="HappyGomi" />
            </div>
            <input
                type="text"
                placeholder="Username"
                className="input-field"
            />
            <input
                type="password"
                placeholder="Password"
                className="input-field"
            />
            <a href="/forgot-password" className="hyperlink">
                Forgot Password?
            </a>
            <button className="button" onClick={() => navigate('/')}>Login</button>
            <button className="button" onClick={() => navigate('/sign-up')}>Sign Up</button>
            <img src={LifeLabsLogo} alt="100 Life Labs Year" className="logo" /> {/* Corrected */}
        </div>
    );
}

export default LoginPage;