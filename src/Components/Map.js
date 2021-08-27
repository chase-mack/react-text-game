import React from 'react';
import { MapContainer, MapItem, PlayerOnMap } from './styles/MapStyles';

const mapDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'grid' }
};

const playerDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'block' }
};

class Map extends React.Component {
    render() {
        return (
            <MapContainer style={this.props.gameStarted ? mapDisplay.visible : mapDisplay.hidden}>
                <div>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                </div>
                <div>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                </div>
                <div>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap />
                    </MapItem>
                </div>
            </MapContainer>
        )
    }
}

export default Map;