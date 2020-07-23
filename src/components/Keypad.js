// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    easyPassword = () => {
        return console.log("Entering password...")
    }


    render() {
        return (
            <div>
              <input 
              type="password"
              onKeyUp={this.easyPassword}
              />  
            </div>
        )
    }
}

export default Keypad