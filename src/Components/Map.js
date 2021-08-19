import React from 'react';

class Map extends React.Component {
   render() {
    return (
            <div className="grid-container">
                <div>
                    <div className="grid-item" id="a1"></div>
                    <div className="grid-item" id="a2"></div>
                    <div className="grid-item" id="a3"></div>
                </div>
                <div>
                    <div className="grid-item" id="b1"></div>
                    <div className="grid-item" id="b2"><span id="playerOnMap"></span></div>
                    <div className="grid-item" id="b3"></div>
                </div>
                <div>
                    <div className="grid-item" id="c1"></div>
                    <div className="grid-item" id="c2"></div>
                    <div className="grid-item" id="c3"></div>
                </div>
            </div>
            )
    }
}

export default Map;