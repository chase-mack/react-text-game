import React from 'react';
import { StartMenu, StartButton } from './styles/MenuStyles';

const displayProp = {
    gameStarted: {display: 'none'},
    gameOver: {display: 'flex'}
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }
    handleClick = () => {
        this.setState({ clicked: true });
    }

    render() {
        return (
                <StartButton
                    style={this.state.clicked ? displayProp.gameStarted : displayProp.gameOver}
                    onClick={this.handleClick}>Start
                </StartButton>
        )
    }
}

export default Menu;