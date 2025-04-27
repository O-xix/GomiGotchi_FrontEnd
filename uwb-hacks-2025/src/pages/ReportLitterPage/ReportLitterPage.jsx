import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowBackCircleOutline as BackArrow } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import './ReportLitterPage.css';
import { SlCalender } from "react-icons/sl";


function ReportLitterPage() {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [caption, setCaption] = useState(''); // State for the caption
  const [latitude, setLatitude] = useState(47.5097); // Example latitude
  const [longitude, setLongitude] = useState(-122.3331); // Example longitude
  const [time, setTime] = useState(null);
  const APILINK = 'http://localhost:8000/api/v1/litter/new'; // API endpoint
  const navigate = useNavigate();

  // Handle image selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      setSelectedImage(file); // Store the file in state
      console.log('Selected file:', file.name); // Log the file name
      setTime(new Date());
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('before_image', selectedImage);
    formData.append('caption', caption);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('status', 'picked up');
    formData.append('created_time', time.toISOString());
    formData.append('pick_up_time', time.toISOString());

    // Log the FormData
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await fetch(APILINK, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response from server:', data);
      alert('Litter report submitted successfully!');
      navigate('/')
    } catch (error) {
      console.error('Error submitting litter report:', error);
      alert('Failed to submit litter report. Please try again.');
    }
  };

  return (
    <div className="pageContainer">
      <form onSubmit={handleSubmit}>
        {selectedImage ? (
          <section className="imageSection">
            <figure className="imageContainer">
              <img
                className="litterImage"
                src={URL.createObjectURL(selectedImage)} // Preview the selected image
                alt="Selected Litter"
              />
            </figure>
            <figcaption className="address">
              <SlCalender />{time ? time.toLocaleString() : 'Time not available'}
            </figcaption>
            <Link to="/" className="backArrow">
              <BackArrow className="backArrowIcon" />
            </Link>
          </section>
        ) : (
          <section className="addImageSection">
            <div className="addImageButton">
              <FaCamera className="cameraIcon" />
              <h2>Add a picture</h2>
            </div>
            <input
              type="file"
              className="photoInput"
              onChange={handleImageUpload}
            />
            <Link to="/" className="imageBackArrow">
              <BackArrow className="imageBackArrowIcon" />
            </Link>
          </section>
        )}
        <section className="infoSection">
          <article className="description">
            <div className="titleContainer">
              <h1>Description</h1>
            </div>
            <textarea
              className="captionInput"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter a description of the litter"
            />
          </article>
            <button type="submit" className="pick-up-link">
              Report
            </button>
        </section>
      </form>
    </div>
  );
}

export default ReportLitterPage;