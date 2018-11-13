import React, { Component } from 'react';
import Keyboard from './keyboard'
import Output from './output'
import update from 'immutability-helper'
import math from 'mathjs'

class App extends Component {
  constructor() {
    super()
    this.state = {
      operations:[],
      equations: [],
      ishidden:''

    }
  }

  calculate = () => {
    let result = this.state.equations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, {precision:14})
      result = String(result)
      this.setState({
        operations: [result]
      })

    }
  }

  handleClick = (e) => {
    const value = e.target.value
    // alert(value)
    switch (value) {
      case 'C': 
      this.setState({
        operations: [],
        equations: [],
        ishidden:'hide'
      })
      break
      case '=': 
      this.calculate()
      break
      case '<': 
      this.setState ({
        equations: this.state.equations.splice(0, this.state.equations.length-1)

      })
      break
      case 'sqr': 
      this.setState ({
        equations: math.sqrt(this.state.equations),
        operations: math.sqrt(this.state.equations),
        ishidden:'show'

      })
      break
      case '!x':
      let factorial = 1
      for(let i = 1; i<= this.state.equations;i++) {
        factorial = factorial * i
      } 
      this.setState ({
        equations: [factorial],
        operations: [factorial],
        ishidden:'show'

      })
      break
      default:
      let newOperations = update(this.state.equations,{
        $push: [value]
      })
      this.setState({
        equations: newOperations,
        ishidden:'show'
      })
      break
    }
   
  }
  render() {
    return (
      <div className="app">
        <Output
          outputDisplay={this.state.operations}
          equations={this.state.equations}
          ishidden = {this.state.ishidden}
        />
        <Keyboard
          getValueBtn={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
