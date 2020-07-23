// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {


    focusOnMe = () => {
        return console.log('Good!')
    }

    distracted = () => {
        return console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button
                onFocus={this.focusOnMe}
                onBlur={this.distracted}
                ></button>
            </div>
        )
    }
}

export default  EyesOnMe