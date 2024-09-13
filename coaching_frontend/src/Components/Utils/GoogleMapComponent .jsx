import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
};

const center = {
  lat: 28.7041,  // Replace with your latitude
  lng: 77.1025,  // Replace with your longitude
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your valid API key
    version: 'beta', // Make sure to specify the version that includes AdvancedMarkerElement
    libraries: ['marker'], // Add any additional libraries you might need
  });

  useEffect(() => {
    if (isLoaded && window.google) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 15,
      });

      // Ensure you're using the correct path to AdvancedMarkerElement
      const { AdvancedMarkerElement } = window.google.maps.marker;

      new AdvancedMarkerElement({
        map,
        position: center,
        title: "We are here!",
      });
    }
  }, [isLoaded]);

  return isLoaded ? <div id="map" style={containerStyle}></div> : <div>Loading...</div>;
};

export default React.memo(GoogleMapComponent);
