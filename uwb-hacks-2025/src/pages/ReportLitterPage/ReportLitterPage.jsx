import React, { useState } from 'react';
import './ReportLitterPage.css'; // Import the CSS file for styling

function ReportLitterPage() {
  const [address, setAddress] = useState('');
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
      <h1>Input Litter Details</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Preview Section */}
      <div className="preview-section">
        <h2>Preview</h2>
        <p><strong>Address:</strong> {address || 'No address provided'}</p>
        <p><strong>Description:</strong> {description || 'No description provided'}</p>
        {preview ? (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
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