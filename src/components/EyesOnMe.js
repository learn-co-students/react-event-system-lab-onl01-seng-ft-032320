// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  onFocusEvent = () => {
    console.log("Good!");
  };
  onBlurEvent = () => {
    console.log("Hey! Eyes on me!");
  };
  render() {
    return (
      <div>
        <button onFocus={this.onFocusEvent} onBlur={this.onBlurEvent}></button>
      </div>
    );
  }
}
