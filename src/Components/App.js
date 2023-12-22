import React, { useState } from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';
import { destinations, inventory, interrupters } from './keywordObjects';

export default function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [currentNarration, setCurrentNarration] = useState(
        'You awaken in a dark room. After a few moments of searching in the dark, you find a box of old matches.'
    );
    const [currentKeyword, setCurrentKeyword] = useState('');
    const [currentLocation, setCurrentLocation] = useState('living');

    const allKeywordObjs = {
        ...destinations,
        ...inventory,
        ...interrupters
    };

    const handleClick = () => {
        setGameStarted(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isInputValid();

        const userInput = document.querySelector('#userInput').value;

        for (const destination in destinations) {
            if (userInput.includes(destination)) {
                setCurrentKeyword(destination);
                setCurrentLocation(destination);
            }
        }

        for (const item in inventory) {
            if (userInput.includes(item)) {
                setCurrentKeyword(item);
            }
        }

        for (const interrupter in interrupters) {
            if (userInput.includes(interrupter)) {
                setCurrentKeyword(interrupter);
            }
        }

        console.log(allKeywordObjs);
        e.target.reset();
    };

    const isInputValid = () => {
        const inputValue = document.querySelector('#userInput').value.split(' ');

        if (!inputValue.some((v) => Object.keys(allKeywordObjs).includes(v))) {
            setCurrentNarration('Maybe you should try something else?');
        }
    };

    return (
        <React.Fragment>
            <Menu className="menu" handleClick={handleClick} gameStarted={gameStarted} />
            <Map gameStarted={gameStarted} currentLocation={currentLocation} />
            <GameText
                gameStarted={gameStarted}
                handleSubmit={handleSubmit}
                narration={currentNarration}
            />
        </React.Fragment>
    );
};

