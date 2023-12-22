import React from 'react';

const elementDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'flex' }
}

export default function GameText(props) {
    return (
        <div
            className="gameText"
            style={props.gameStarted ? elementDisplay.visible : elementDisplay.hidden}
        >
            <h1 className="narration">{props.narration}</h1>
            <div className="action">
                <form
                    autoComplete="off"
                    id="form"
                    onSubmit={props.handleSubmit}
                >
                    <input type="text" name="userInput" id="userInput" placeholder="What do you do?" />
                </form>
            </div>
        </div>
    )
}
