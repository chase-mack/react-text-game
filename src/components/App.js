import React, { useState } from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';
import { destinations, inventory, interrupters } from '../util/keywordObjects';

export default function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [currentNarration, setCurrentNarration] = useState(
        'You awaken in a dark room. After a few moments of searching in the dark, you find a box of old matches.'
    );
    const [currentKeywordType, setCurrentKeywordType] = useState(null);
    const [currentKeyword, setCurrentKeyword] = useState(null);
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

        const { type, value } = isInputValid();
        console.log(`Type: ${type}, Value: ${JSON.stringify(value, null, 4)}`)
        switch (type) {
            case 'destinations':
                setCurrentKeyword(value);
                setCurrentKeywordType(type);
                setCurrentLocation(value);
                setCurrentNarration(value.proceed);
                break;
            case 'inventory':
                setCurrentKeyword(value);
                setCurrentKeywordType(type);
                setCurrentNarration(value.equip);
                break;
            case 'interrupters':
                let text = value.general || value;
                setCurrentKeyword(value);
                setCurrentKeywordType(type);
                setCurrentNarration(text);
                break;
            default:
                setCurrentNarration('Maybe you should try something else.');
                break;
        }
        e.target.reset();
    };

    const isInputValid = () => {
        const inputValue = document.querySelector('#userInput').value.split(' ');

        const keywordEntry = Object.entries(allKeywordObjs).find(([key]) => inputValue.includes(key));
        
        if (keywordEntry) {
            const [foundKeyword] = keywordEntry;
            if (destinations[foundKeyword]) {
                return { type: 'destinations', value: destinations[foundKeyword] };
            } else if (inventory[foundKeyword]) {
                return { type: 'inventory', value: inventory[foundKeyword] };
            } else if (interrupters[foundKeyword]) {
                return { type: 'interrupters', value: interrupters[foundKeyword] };
            }
        }
        return { type: null, value: null };
    };

    return (
        <>
            <Menu className="menu" handleClick={handleClick} gameStarted={gameStarted} />
            <Map gameStarted={gameStarted} currentLocation={currentLocation} />
            <GameText
                gameStarted={gameStarted}
                handleSubmit={handleSubmit}
                narration={currentNarration}
            />
        </>
    );
};

