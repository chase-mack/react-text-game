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
                        <PlayerOnMap 
                            style={this.props.currentLocation === 'up' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'foyer' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'garage' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                </div>
                <div>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'bedroom' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'living' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'down' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                </div>
                <div>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'office' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'kitchen' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                    <MapItem>
                        <PlayerOnMap
                            style={this.props.currentLocation === 'basement' ? playerDisplay.visible : playerDisplay.hidden} />
                    </MapItem>
                </div>
            </MapContainer>
        )
    }
}

export default Map;