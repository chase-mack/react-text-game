import React from 'react';
import { MapContainer, MapItem } from './styles/MapStyles';

class Map extends React.Component {
   render() {
    return (
            <MapContainer>
                <div>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                </div>
                <div>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                </div>
                <div>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                </div>
            </MapContainer>
            )
    }
}

export default Map;