import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Circle, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import '../styles/MapComponent.css';
import geojsonData from '../data/vancouver.json';

// Customize the Marker icon (red mark)

// const fireIcon = new L.Icon({
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png', // 确保URL正确
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
// });

const customFireIcon = new L.DivIcon({
    className: 'custom-fire-icon', 
    html: '<div class="fire-marker"></div>',
  });

// Simulating labeled data for future fire forecast areas
// const fireLocations = [
//   { lat: -33.8688, lng: 151.2093, place: 'Sydney' }, 
//   { lat: -37.8136, lng: 144.9631, place: 'Melbourne' },
//   { lat: -27.4698, lng: 153.0251, place: 'Brisbane' },
// ];

const bcPolygonCoordinates = [
    [49.2827, -123.1207], // Vancouver
    [50.1163, -122.9574], // Whistler
    [51.0486, -114.0708], // Calgary
    [49.2827, -119.6842], // Kelowna
  ];

const fireCircle = {
    center: [49.2827, -123.1207], // 温哥华
    radius: 50000, // az
  };



const MapComponent = () => {

    const onEachFeature = (feature, layer) => {
        layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
    };

    // return (
    //     <MapContainer center={[49.2827, -123.1207]} zoom={10} style={{ height: '95vh', width: '100%' }}>
    //       <TileLayer
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       />
    
    //       {/* render GeoJson Data  */}
    //       <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
    //     </MapContainer>
    //   );


   return (
    <>
       <MapContainer center={[49.2827, -123.1207]} zoom={10} style={{ height: '95vh', width: '100%' }}>
           <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
    
          {/* render GeoJson Data */}
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
        </MapContainer>

  </>
  );
};

export default MapComponent;
