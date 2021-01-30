// Code Keypad Component Here
import React from 'react';

export default class KeyPad extends React.Component {
  handleKeyUp = () => {
    console.log("Entering password...")
  }

  render() {
    return <input type="password" onKeyUp={this.handleKeyUp}></input>
  }
}
