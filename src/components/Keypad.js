// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    logNumber = () => {
        console.log('Entering password...')
    } 

    render() {
        return (
            <div>
                <form>
                <input type={"password"} onKeyUp={this.logNumber}/>

                </form>
            </div>
        )
    }
}
