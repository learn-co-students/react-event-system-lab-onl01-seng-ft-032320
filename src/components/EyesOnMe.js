// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  lookAtMe = () => (
    console.log('Hey! Eyes on me!')
  )

  niceToSeeYou = () => (
    console.log('Good!')
  )

render() {
  return (
    <div>
      <button onFocus={this.niceToSeeYou} onBlur={this.lookAtMe}></button>
    </div>
  )
}

}