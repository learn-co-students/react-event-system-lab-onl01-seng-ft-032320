import React, { Component } from 'react';

class Keypad extends Component {

    consoleOutput = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.consoleOutput}></input>
        );
    }
}

export default Keypad;