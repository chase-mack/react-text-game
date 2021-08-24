import React from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';

class App extends React.Component {
    state = {
        gameStarted: false,
        gameOver: false,
        currentNarration: 'You awaken in a dark room. After a few moments of searching in the dark, you find a box of old matches.'
    };
    handleClick = () => {
        this.setState({ gameStarted: true });
    }
    changeNarration = (text) => {
        this.setState({ currentNarration: text });
    }
    render() {
        return (
            <React.Fragment>
                <Menu
                    className="menu"
                    handleClick={this.handleClick}
                    gameStarted={this.state.gameStarted} />
                <Map
                    gameStarted={this.state.gameStarted} />
                <GameText
                    gameStarted={this.state.gameStarted}
                    narration={this.state.currentNarration} />
            </React.Fragment>
        )
    }
}

export default App;