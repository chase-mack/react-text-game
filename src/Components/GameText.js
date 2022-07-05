import React from 'react';

const elementDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'flex' }
}

const GameText = () => {
    return (
        <div
            className="gameText"
            style={this.props.gameStarted ? elementDisplay.visible : elementDisplay.hidden}
        >
            <h1 className="narration">{this.props.narration}</h1>
            <div className="action">
                <form
                    autoComplete="off"
                    id="form"
                    onSubmit={this.props.handleSubmit}
                >
                    <input type="text" name="userInput" id="userInput" placeholder="What do you do?" />
                </form>
            </div>
        </div>
    )
}

export { GameText };