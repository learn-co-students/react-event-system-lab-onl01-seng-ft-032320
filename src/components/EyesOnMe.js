import React, { Component } from 'react';

class EyesOnMe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFocus = (e) => {
        console.log('Good!');
    }

    handleBlur = (e) => {
        console.log('Hey! Eyes on me!')
    }

    render () {
        return (
            <div className="focusing">
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe;