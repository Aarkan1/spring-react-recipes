import React, { Component } from 'react'

export default class CustomClassButton extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    this.setState({
      counter: 5
    })
  }

  componentWillUnmount() {
    console.log('Unmounting classy component');
  }

  incrementCount() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div style={{
          display: 'inline-block',
          border: '1px solid gray',
          padding: '10px',
          margin: '10px',
          userSelect: 'none',
          cursor: 'pointer'
        }}
        // Note that we have to use an arrow-function
        // to keep the class "this"-scope in the called function
        onClick={() => this.incrementCount()} 
      >
        {this.props.label} count: {this.state.counter}
      </div>
    )
  }
}



