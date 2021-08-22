import React from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';

class App extends React.Component {
    state = {
        gameStarted: false,
        gameOver: false
    };
    handleClick = () => {
        this.setState({ gameStarted: true });
        console.log(this.state);
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
                    gameStarted={this.state.gameStarted} />
            </React.Fragment>
        )
    }
}

export default App;