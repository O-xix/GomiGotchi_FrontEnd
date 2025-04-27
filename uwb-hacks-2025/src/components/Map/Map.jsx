import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Map() {
  const mapRef = useRef(null); // Use a ref to store the map instance
  const APILINK = 'http://localhost:8000/api/v1/litter/litter'; // Replace with your API link

  useEffect(() => {
    // Initialize the map with a default view
    const map = L.map('map').setView([47.6062, -122.3321], 13); // Default to Seattle, WA
    mapRef.current = map; // Store the map instance in the ref

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Try to get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Set the map view to the user's location
          map.setView([latitude, longitude], 13);

          // Add a marker at the user's location
          addMarker(latitude, longitude, 'You are here!');
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  // Function to add a marker to the map
  const addMarker = (latitude, longitude, popupText) => {
    if (mapRef.current) {
      L.marker([latitude, longitude]).addTo(mapRef.current)
        .bindPopup(popupText)
        .openPopup();
    }
  };

  // Function to fetch litter data from the API and add markers to the map
  const returnLitterData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the entire response to check its structure
        if (data) {
          data.forEach((item) => {
            const { latitude, longitude, caption } = item;
            addMarker(latitude, longitude, caption);
          });
        } else {
          console.error('No results found in the API response.');
        }
      })
      .catch((error) => {
        console.error('Error fetching litter data:', error);
      });
  };

  returnLitterData(APILINK); // Call the function to fetch litter data

  return (
    <div className="map-container" style={{ width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
      <Link to = "/report-litter" className='report-button'>Report litter</Link>
    </div>
  );
}

export default Map;