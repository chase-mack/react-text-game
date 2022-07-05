import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	grid-template-columns: auto auto auto;
	height: 95px;
	width: 100px;
	border-radius: 0.5rem;
	background: rgb(220, 190, 95);
`;

const MapItem = styled.div`
    border: 1px solid rgb(80, 65, 25);
	width: 32px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PlayerOnMap = styled.span`
	display: block;
	height: 10px;
	width: 10px;
	margin: auto;
	background: rgb(80, 65, 25);
	border-radius: 50%;
`;

const mapDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'grid' }
};

const playerDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'block' }
};

const Map = () => {
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

export { Map };