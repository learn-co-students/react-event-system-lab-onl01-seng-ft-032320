// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component{

    blurry = () => {
        console.log('Hey! Eyes on me!')
    }

    clear = () => {
        console.log('Good!')
    }


    render (){
       return(
        <button onFocus={this.clear} onBlur={this.blurry}></button>
       )
    }
}

export default EyesOnMe