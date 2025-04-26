import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css';
import { IoArrowBackCircleOutline } from 'react-icons/io5'; // Import the back arrow icon

function SettingsPage() {
    return (
        <>
            <div className="settings-page">
                <div className='settings-header'>
                    <Link to="/"><IoArrowBackCircleOutline className='back-button'/></Link>
                    <h1>Settings Page</h1>
                </div>
                <div className='account-details'>
                    <h2>Account Details</h2>
                    <h3>Email:</h3>
                    <h3>Username:</h3>
                    <h3>Password:</h3>
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