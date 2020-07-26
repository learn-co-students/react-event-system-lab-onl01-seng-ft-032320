// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component{

    handleKey = () =>{
         console.log('Entering password...')
    }

    render (){
        return (
            <input type="password" onKeyUp={this.handleKey}/>
        )

    }
}

export default Keypad