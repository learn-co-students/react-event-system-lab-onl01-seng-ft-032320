import React, { Component } from 'react'

class Keypad extends Component {

    handleOnKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleOnKeyUp} type="password"/>
            </div>
        )
    }
}

export default Keypad