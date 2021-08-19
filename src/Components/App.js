import React from 'react';
import Map from './Map';
import Menu from './Menu';
import GameText from './GameText';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <Map />
                <GameText />
            </React.Fragment>
        )
    }
}

export default App;