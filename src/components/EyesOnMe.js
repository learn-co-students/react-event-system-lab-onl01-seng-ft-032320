// Code EyesOnMe Component Here
import React, { Component } from 'react'


export default class EyesOnMe extends Component {
    goodMessage = () => {
        console.log('Good!')
    }

    badMessage = () => {
        console.log('Hey! Eyes on me!')
    }
    
    
    render() {
        return (
            <div>
                <button onFocus={this.goodMessage} onBlur={this.badMessage}> my Button</button>
            </div>
        )
    }
}
