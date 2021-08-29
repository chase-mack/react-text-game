const destinations = {
    foyer: {
        missingLight: 'It is too dark to leave this room.',
        proceed: 'You see a small flashlight on a table near the front door.',
        return: 'You see the garage door, stairs leading up, and the living room.'
    },
    living: {
        return: 'You see the foyer, a set of stairs leading down, and the kitchen.'
    },
    up: {
        missingLight: 'It would be too dangerous to take the stairs in the dark.',
        proceed: 'You ascend the stairs. Ahead is what appears to be the master bedroom.',
        return: 'You return to the living room. The kitchen is to the right. The left, the foyer.'
    },
    bedroom: {
        missingKey: 'You try the door. It is locked...you hear something on the other side.',
        proceed: 'The door to the bedroom stands before you. It is locked.'
    },
    office: {
        missingKey: 'The door has a combination lock. You cannot enter. Maybe the combination is written on something.',
        proceed: 'You arrive at the door to the office. It is locked.',
        return: 'You are back in the office.'
    },
    kitchen: {
        missingLight: 'It is dark and you are out of matches.',
        proceed: 'You see a door on the other side of the room. Maybe an office? The kitchen looks bare but there may be something edible here.',
        return: 'You see the door to the office and the living room.'
    },
    garage: {
        missingLight: 'It is too dark to find your way to the garage.',
        proceed: 'Inside the garage, you see lots of clutter. Under a pizza box in the corner you see a crowbar.',
        return: 'Maybe there is something else under all of this junk?',
        complete: 'Nothing left but garbage.'
    },
    down: {
        missingLight: 'Better not risk falling down the stairs. Find some light.',
        toFoyer: 'You go back down the stairs into the foyer again.',
        toBasement: 'You go downstairs. Before you is the basement door.'
    },
    basement: {
        missingLight: 'You can not navigate this house in the dark.',
        missingKey: 'The door is stuck shut. The lock is broken.',
        return: 'You return to apprectiate the sports memorabilia.',
        complete: 'Now is not the time to look for baseball cards.'
    },
    front: {
        missingKey: 'The front door is electronically locked with a heavy deadbolt. You can not open it.',
        proceed: 'You open the door and nothing is familiar. This is not the world you remember. This is chaos...'
    },
    leave: {
        missingKey: 'The front door is electronically locked with a heavy deadbolt. You can not open it.',
        proceed: 'You open the door and nothing is familiar. This is not the world you remember. This is chaos...'
    },
    outside: {
        missingKey: 'The front door is electronically locked with a heavy deadbolt. You can not open it.',
        proceed: 'You open the door and nothing is familiar. This is not the world you remember. This is chaos...'
    }
}

const inventory = {
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

const interrupters = {
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

export { destinations, inventory, interrupters };