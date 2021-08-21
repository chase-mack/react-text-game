import React from 'react';
import { MapContainer, MapItem } from './styles/MapStyles';

const mapDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'grid' }
}

class Map extends React.Component {
    render() {
        return (
            <MapContainer style={this.props.gameStarted ? mapDisplay.visible : mapDisplay.hidden}>
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