import React, { Component } from 'react';

import { GoBackButton } from '../components'

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number : 0,
    }

    this.plus = this.plus.bind(this);
  }

  render() {
    return(
      <div>
        <GoBackButton /> <br />
        <span> {this.state.number} </span> <br />
        <button onClick={this.plus}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    )
  }

  plus() {
    this.setState({ number: this.state.number +1 })
  }

  minus = () => {
    this.setState({ number: this.state.number -1 })
  }
}


export default State;