import React from 'react';
import { StartButton } from './styles/MenuStyles';

const btnDisplay = {
    clicked: { display: 'none' },
    notClicked: { display: 'inline-block' }
}

class Menu extends React.Component {
    render() {
        return (
            <StartButton
                style={this.props.gameStarted ? btnDisplay.clicked : btnDisplay.notClicked}
                onClick={this.props.handleClick}>Start
            </StartButton>
        )
    }
}

export default Menu;