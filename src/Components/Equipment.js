import React from 'react';

const Equipment = () => {
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
            wrongRoom: 'You do not see a key.',
            equip: 'You pocket the key.',
            useNow: 'As you turn the key, the noise from inside goes silent. You cautiously enter the room. With a gasping roar, a maniacal man lunges for you from the other side of the bed!'
        },
        food: {
            wrongRoom: 'There is no food in here.',
            equip: 'You eat a can of peaches. Millions of peaches. You feel better.'
        },
        code: {
            wrongRoom: 'You do not find anything resembling a combination number.',
            equip: 'You find a sliver of paper in a pile of empty soda cases. Who lives here? Written on it are three numbers. You keep the paper.',
            useNow: 'The combination works! Inside the office is a disheveled desk; a smashed computer lies in a heap on the side of the room. You see a key on the desk.'
        },
        number: {
            wrongRoom: 'You do not find anything resembling a combination number.',
            equip: 'You find a sliver of paper in a pile of empty soda cases. Who lives here? Written on it are three numbers. You keep the paper.',
            useNow: 'The combination works! Inside the office is a disheveled desk; a smashed computer lies in a heap on the side of the room. You see a key on the desk.'
        },
        combination: {
            wrongRoom: 'You do not find anything resembling a combination number.',
            equip: 'You find a sliver of paper in a pile of empty soda cases. Who lives here? Written on it are three numbers. You keep the paper.',
            useNow: 'The combination works! Inside the office is a disheveled desk; a smashed computer lies in a heap on the side of the room. You see a key on the desk.'
        },
        bat: {
            wrongRoom: 'This room does not contain sports equipment.',
            equip: 'You grab the baseball bat.'
        },
        crowbar: {
            wrongRoom: 'There is no crowbar in sight.',
            equip: 'You now have a crowbar.',
            failedUseNow: 'You try to force the lock open but in your weakened state, you fail.',
            successfulUseNow: 'You loudly break the lock free and the basement door swings open. Was that a crashing upstairs? The owner has baseball equipment stored here.'
        },
        button: {
            wrongRoom: 'What button?',
            useNow: 'You hear a loud click downstairs. This must unlock the front door. What is out there?'
        }
    };

    return {

    }
}

export { Equipment };