import React from 'react';
import destinations from './Movement';
import interruptKeys from './Interrupters';
import inventory from './Equipment';

const elementDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'flex' }
}

class GameText extends React.Component {
    allKeywordObjs = {
        ...destinations,
        ...inventory,
        ...interruptKeys
    }
    render() {
        return (
            <div
                className="gameText"
                style={this.props.gameStarted ? elementDisplay.visible : elementDisplay.hidden}>
                <h1 className="narration">{this.props.narration}</h1>
                <div className="action">
                    <form
                        autoComplete="off"
                        id="form"
                    >
                        <input type="text" name="userInput" id="userInput" placeholder="What do you do?" />
                    </form>
                </div>
            </div>
        )
    }
}

export default GameText;