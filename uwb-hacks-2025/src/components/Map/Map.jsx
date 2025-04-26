import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import the CSS file for styling

function Map() {
  const mapRef = useRef(null); // Use a ref to store the map instance

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

  return (
    <div className="map-container" style={{ height: '500px', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
}

export default Map;