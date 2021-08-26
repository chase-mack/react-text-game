import React from 'react';

class Movement extends React.Component {
    destinations = {
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
    };
    render() {
        return {

        }
    }
}

export default Movement;