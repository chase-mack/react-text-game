import React from 'react';
import { Narration } from './styles/NarrationStyles';

const textDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'flex' }
}

class GameText extends React.Component {
    render() {
        return (
            <Narration
                style={this.props.gameStarted ? textDisplay.visible : textDisplay.hidden}>
                This is the narrator text.
            </Narration>
        )
    }
}

export default GameText;