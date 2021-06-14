import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
      }
  render() {
    const ticker = this.state.secondsLeft ===0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>{ticker}</div>
    )
  }
}

export default Bomb;