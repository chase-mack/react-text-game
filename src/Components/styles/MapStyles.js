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

export { MapContainer, MapItem, PlayerOnMap };