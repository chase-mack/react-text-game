import React from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';
import { destinations, inventory, interrupters } from './keywordObjects';

class App extends React.Component {
    state = {
        gameStarted: false,
        gameOver: false,
        currentNarration: 'You awaken in a dark room. After a few moments of searching in the dark, you find a box of old matches.',
        currentKeyword: '',
        currentLocation: 'living'
    };
    allKeywordObjs = {
        ...destinations,
        ...inventory,
        ...interrupters
    }
    handleClick = () => {
        this.setState({ gameStarted: true });
    }
    handleSubmit = (e) => {
        let userInput = document.querySelector('#userInput');
        e.preventDefault();
        this.isInputValid();
        for (const destination in destinations) {
            if (userInput.value.includes(destination)) {
                this.setState({ currentKeyword: destination });
                this.setState({ currentLocation: destination });
            }
        }
        for (const item in inventory) {
            if (userInput.value.includes(item)) {
                this.setState({ currentKeyword: item });
            }
        }
        for (const interrupter in interrupters) {
            if (userInput.value.includes(interrupter)) {
                this.setState({ currentKeyword: interrupter });
            }
        }
        console.log(this.allKeywordObjs);
        e.target.reset();
    }
    isInputValid = () => {
        let inputValue = document.querySelector('#userInput').value.split(' ');
        if (!inputValue.some(v => Object.keys(this.allKeywordObjs).includes(v))) {
            this.setState({ currentNarration: 'Maybe you should try something else?' });
        }
    }
    render() {
        return (
            <React.Fragment>
                <Menu
                    className="menu"
                    handleClick={this.handleClick}
                    gameStarted={this.state.gameStarted} />
                <Map
                    gameStarted={this.state.gameStarted}
                    currentLocation={this.state.currentLocation} />
                <GameText
                    gameStarted={this.state.gameStarted}
                    handleSubmit={this.handleSubmit}
                    narration={this.state.currentNarration} />
            </React.Fragment>
        )
    }
}

export default App;