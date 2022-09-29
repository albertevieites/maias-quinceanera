import React from 'react';
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const center = { lat: 51.48351411079457, lng:-0.2808712016403295 };

  return (
    <div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{width: '30%', height: '30%'}}
        mapContainerClassName="map-container"
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;