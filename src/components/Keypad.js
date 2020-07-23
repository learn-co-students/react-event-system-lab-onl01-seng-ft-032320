// Code Keypad Component Here

import React, { Component } from 'react'


class Keypad extends Component {


    render() {
        const message = () => (console.log('Entering password...'))
        return (
            <div>
                <input onKeyUp={message} type="password" />
            </div>
        )
    }
}

export default Keypad
