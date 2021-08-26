import React from 'react';

class Equipment extends React.Component {
    inventory = {
        match: {
            wrongRoom: 'There are not any matches in this room.',
            equip: 'You strike the last match. Before the match fades you see the foyer and a darkened kitchen in the distance. The dying flame reflects off of what appears to be a flashlight by the front door.',
            used: 'You have already used the last match.'
        },
        flashlight: {
            equip: 'You enter the foyer and take the flashlight. As you turn on the light, you see the door to a garage, a set of stairs leading up, and the living room from which you just came.',
            used: 'You already have the flashlight.'
        },
        key: {

        },
        food: {
            wrongRoom: 'There is no food in here.',
            equip: 'You eat a can of peaches. Millions of peaches. You feel better.'
        },
        code: {

        },
        number: {

        },
        combination: {

        },
        bat: {
            wrongRoom: 'This room does not contain sports equipment.',
            equip: 'You grab the baseball bat.'
        },
        crowbar: {
            useNow: 'You loudly break the lock free and the basement door swings open. Was that a crashing upstairs? The owner has baseball equipment stored here.',
            
        },
        button: {

        }
    };
    render() {
        return {

        }
    }
}

export default Equipment;