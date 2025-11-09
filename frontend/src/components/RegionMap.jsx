import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-Leaflet';
import 'Leaflet/dist/leaflet.css';
import WorldGeoJSON from '..assets/worldGeo.json';

const RegionMap = ({ regionData }) => {
    const style = (feature) => {
        const region = feature.properties.region;
        const progress = regionData[region]?.progress || 0;
        return { 
            fillcolor: `rgba(0, 128, 0, ${progress})`,
            weight: 1,
            color: 'black',
            fillOpacity: 0.6,
         };
    };

    return(
        <MapContainer center ={[20,0]} zoom = {2} style = {{ height: '500px', width: '100%'}}>
        <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data = {WorldGeoJSON} style = {style} />
        </MapContainer>
    );
    };

export default RegionMap;

