// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component{
    constructor(){
        super()
        this.state = {

        }  
    }

    pass = () => {console.log("Entering password...")}
    
    render() {
       return(
            <input type="password" onKeyUp={this.pass} >

            </input>
        )
    }
        

}

export default Keypad;