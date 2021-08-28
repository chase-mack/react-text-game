import React from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';
import destinations from './Movement';
import inventory from './Equipment';
import interruptKeys from './Interrupters';

class App extends React.Component {
    allKeywordObjs = {
        ...destinations,
        ...inventory,
        ...interruptKeys
    }
    state = {
        gameStarted: false,
        gameOver: false,
        currentNarration: 'You awaken in a dark room. After a few moments of searching in the dark, you find a box of old matches.',
        currentKeyword: '',
        currentLocation: ''
    };
    handleClick = () => {
        this.setState({ gameStarted: true });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.isInputValid();
        for (const destination in destinations) {
            if (userInput.value.includes(destination)) {
                this.setState({ currentKeyword: destination });
            }
        }
        for (const item in inventory) {
            if (userInput.value.includes(item)) {
                this.setState({ currentKeyword: item });
            }
        }
        for (const interruper in interruptKeys) {
            if (userInput.value.includes(interruper)) {
                this.setState({ currentKeyword: interruper });
            }
        }
    }
    changeNarration = (text) => {
        this.setState({ currentNarration: text });
    }
    isInputValid = () => {
        let inputValue = userInput.value.split(' ');
        console.log(inputValue);
        if (!inputValue.some(v => Object.keys(this.allKeywordObjs).includes(v))) {
            this.setState({ currentNarration: 'Maybe you should try something else?' });
        }
    }
    setCurrentLocation = (location) => {
        this.setState({ currentLocation: location });
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
                    form={this.isInputValid}
                    narration={this.state.currentNarration} />
            </React.Fragment>
        )
    }
}

export default App;