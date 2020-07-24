// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focusHandlerEvent = () => {
        console.log('Good!')
    }

    blurHandlerEvent = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button
                onFocus={this.focusHandlerEvent}
                onBlur={this.blurHandlerEvent}
            ></button>
        )
    }
}
