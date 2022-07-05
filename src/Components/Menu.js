import React from 'react';
import styled from 'styled-components';

const StartButton = styled.button`
    background: rgb(220, 190, 95);
	padding: 0.5rem;
	height: 3rem;
	width: 5rem;
	margin: auto;
	border: 2px solid rgb(80, 65, 25);
	border-radius: 0.5rem;
`;

const btnDisplay = {
    clicked: { display: 'none' },
    notClicked: { display: 'inline-block' }
}

const Menu = () => {
    return (
        <StartButton
            style={this.props.gameStarted ? btnDisplay.clicked : btnDisplay.notClicked}
            onClick={this.props.handleClick}>Start
        </StartButton>
    )
}

export { Menu };