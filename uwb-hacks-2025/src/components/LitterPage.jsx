import React from 'react';
import { useParams } from 'react-router-dom';
import './LitterPage.css'; // Import the CSS file for styling

function LitterPage() {
  const { id } = useParams(); // Extract the 'id' from the URL

  // Check if the ID is 1 and display default content
  if (id === '1') {
    return (
      <div className="litter-page">
        <h1>123 Main Street, Seattle, WA</h1>
        <h2>Details about the first image</h2>
        <p>
          This is a description of the first image. It provides context and details about what the image represents.
        </p>
        <div className="image-container">
          <div className="image-item">
            <img src="https://via.placeholder.com/300" alt="Image A" />
            <p className="caption">Caption A</p>
          </div>
          <div className="image-item">
            <img src="https://via.placeholder.com/300" alt="Image B" />
            <p className="caption">Caption B</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="litter-page">
      <h1>Litter Page</h1>
      <p>Viewing details for litter ID: {id}</p>
    </div>
  );
}

export default LitterPage;