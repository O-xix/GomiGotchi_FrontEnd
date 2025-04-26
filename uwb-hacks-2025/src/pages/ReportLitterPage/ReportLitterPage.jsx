import React, { useState } from 'react';
import './ReportLitterPage.css'; // Import the CSS file for styling
import { IoArrowBackCircleOutline } from 'react-icons/io5'; // Import the back arrow icon
import { Link } from 'react-router-dom'; // Import Link for navigation

function ReportLitterPage({ address }) {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  // Handle form submission (for now, just log the data)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Address:', address);
    console.log('Description:', description);
    console.log('Image:', image);
    alert('Details submitted!'); // Temporary feedback
  };

  return (
    <div className="input-litter-page">
      <div className="header">
        <Link to="/"><IoArrowBackCircleOutline className='back-button'/></Link>
      <h1>Input Litter Details</h1>
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <label>
          Address: { address || 'No address provided' }
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" required/>
        </label>
        <br />
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageUpload} required/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Preview Section */}
      <div className="preview-section">
        <h2>Preview</h2>
        <p><strong>Address:</strong> {address || 'No address provided'}</p>
        <p><strong>Description:</strong> {description || 'No description provided'}</p>
        {preview ? (
          <div className="image-preview">
            <img src={preview} alt="Preview"/>
            <p className="caption">Uploaded Image</p>
          </div>
        ) : (
          <p>No image uploaded</p>
        )}
      </div>
    </div>
  );
}

export default ReportLitterPage;