import React from 'react';
import { Card } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Khởi tạo icon tùy chỉnh với ảnh từ URL trực tuyến
const customIcon = new L.Icon({
  iconUrl: 'http://127.0.0.1:3000/assets/images/icon-img/icon.png', // Đặt URL của ảnh marker ở đây
  iconSize: [32, 32], // Kích thước của icon
  iconAnchor: [16, 32], // Điểm neo của icon
  popupAnchor: [0, -32] // Điểm popup của icon
});

export default function ContactMap() {
  const coordinates = [
    { lat: 51.505, lng: -0.09, label: 'Location 1' },
    { lat: 51.515, lng: -0.1, label: 'Location 2' },
    { lat: 51.525, lng: -0.11, label: 'Location 3' }
  ];

  return (
    <Card title="Contact Map" className="contact-map pb-70">
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer 
          center={[51.515, -0.1]} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }} 
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {coordinates.map((coord, index) => (
            <Marker key={index} position={[coord.lat, coord.lng]} icon={customIcon}>
              <Popup>
                {coord.label} <br /> Latitude: {coord.lat}, Longitude: {coord.lng}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
}
