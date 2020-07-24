// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    focus = () => {console.log('Good!')}
    blur = () => {console.log('Hey! Eyes on me!')}

    render() {
        return (
            <button onFocus={this.focus} onBlur={this.blur}>
                    Click Me!
            </button>
        )
    }

}

export default EyesOnMe;