import React, { Component } from 'react';

class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleKeyUp = (e) => {
        console.log("Entering password...");
    };

    render() {
        return (
            <div className="password-field">
                <input onKeyUp={this.handleKeyUp} type="password" />
            </div>
        )
    }
}

export default Keypad;