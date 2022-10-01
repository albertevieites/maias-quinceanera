import React from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

const Map = () => {
  const center = { lat: 51.483429422949065, lng: -0.28052635178542046 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
});

  if (!isLoaded) {
    return <div>Loading...</div>
  }

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