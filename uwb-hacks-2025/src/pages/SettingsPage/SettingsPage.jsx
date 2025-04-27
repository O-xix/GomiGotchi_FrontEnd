import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css';
import { IoArrowBackCircleOutline } from 'react-icons/io5'; // Import the back arrow icon
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook

function SettingsPage() {
    const { user } = useAuth(); // Access the user object from AuthContext

    return (
        <>
            <div className="settings-page">
                <div className='settings-header'>
                    <Link to="/" className='page-link'><IoArrowBackCircleOutline className='icon'/></Link>
                    <h1>Settings Page</h1>
                </div>
                <div className='account-details'>
                    <h2>Account Details</h2>
                    <h3>Email: </h3>
                    <h3>Username: {user?.username || 'Not available'}</h3>
                    <h3>Password: {user?.password || 'Not available'}</h3>
                </div>
                <div>
                    <button>Change Password</button>
                    <br />
                    <button>Sign Out</button>
                </div>
            </div>
        </>
    );
};

export default SettingsPage;