import React from 'react';

class Interrupters extends React.Component {
    interruptKeys = {
        window: 'All of the windows are boarded shut.',
        break: {
            basement: 'You loudly break the frozen lock and the basement door swings open. Was that a crashing upstairs? The owner has baseball equipment stored here.',
            general: 'It does not break.'
        },
        tool: 'You do not see any useful tools.',
        screwdriver: 'The screwdriver does not exist.',
        door: 'Which room are you trying to enter?',
        unlock: {
            bedroom: 'How do you attempt to unlock this?',
            general: 'What do you want to unlock?'
        },
        inside: 'Which room would you like to enter?'
    };
    render() {
        return {

        }
    }
}

export default Interrupters;