import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import './LoginPage.css';
import HappyGomi from '../../assets/gomi-sprites/happy-gomi.png';
import LifeLabsLogo from '../../assets/100_Life_Labs_Year.svg'; // Import the SVG file

function LoginPage() {
  const navigate = useNavigate();
  const { setIsUserLoggedIn } = useAuth(); // Access the setter for login state
  const APILINK = 'http://localhost:8000/api/v1/users/user'; // Base API link

  // State for username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to fetch user data and validate credentials
  const handleLogin = () => {
    const userApiUrl = `${APILINK}/${username}`; // Construct the API URL with the username

    fetch(userApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the entire response to check its structure

        // Extract the user details from the response
        const { password: storedPassword } = data;

        // Compare the stored password with the entered password
        if (storedPassword === password) {
          console.log('Login successful!');
          setIsUserLoggedIn(true); // Set the user as logged in
          navigate('/'); // Redirect to the homepage
        } else {
          console.error('Invalid password!');
          alert('Invalid username or password. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        alert('Invalid username or password. Please try again.');
      });
  };

  return (
    <div className="login-page">
      <div className="circle">
        <img src={HappyGomi} alt="Happy-Gomi" className="HappyGomi" />
      </div>
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        value={username} // Bind the input value to the username state
        onChange={(e) => setUsername(e.target.value)} // Update the username state on input change
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password} // Bind the input value to the password state
        onChange={(e) => setPassword(e.target.value)} // Update the password state on input change
      />
      <a href="/forgot-password" className="hyperlink">
        Forgot Password?
      </a>
      <button className="button" onClick={handleLogin}>Login</button>
      <button className="button" onClick={() => navigate('/sign-up')}>Sign Up</button>
      <img src={LifeLabsLogo} alt="100 Life Labs Year" className="logo" />
    </div>
  );
}

export default LoginPage;