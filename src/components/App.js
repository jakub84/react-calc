import React, { Component } from 'react';
import Keyboard from './keyboard'
import Output from './output'
let outputTab = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '.',
      firstArg: '',
      secondArg: ''
    }
  }

  getScore(outputTab) {
    if (outputTab.includes("*")) this.getMultiply(outputTab)
    else if (outputTab.includes("+")) this.getSum(outputTab)
    else if (outputTab.includes("-")) this.getSubs(outputTab)
    else if (outputTab.includes(":")) this.getDivide(outputTab)
    else if (outputTab.includes("C")) this.getReset(outputTab)
    else if (outputTab.includes("+/-")) this.changeSign(outputTab)
  }

  // getReset = (outputTab) => {
  //   this.setState({
  //     output: []
  //   }) 
  // }
  changeSign = (outputTab) => {
    // outputTab.pop()
    console.log(outputTab)
    let indexToSplit = outputTab.indexOf("+/-")
    this.state.firstArg = outputTab.slice(0, indexToSplit).join('')
    this.state.firstArg = parseInt(this.state.firstArg) * (-1)

    // console.log({ firstArg, secondArg, outputTab })
    // this.getmultiply(firstArg,secondArg)
    this.setState({
      output: this.state.firstArg
    })
  }
  getMultiply = (outputTab) => {
    outputTab.pop()
    console.log(outputTab)
    let indexToSplit = outputTab.indexOf("*")
    this.state.firstArg = outputTab.slice(0, indexToSplit).join('')
    this.state.firstArg = parseInt(this.state.firstArg)
    this.state.secondArg = outputTab.slice(indexToSplit + 1).join('')
    this.state.secondArg = parseInt(this.state.secondArg)
    // console.log({ firstArg, secondArg, outputTab })
    // this.getmultiply(firstArg,secondArg)
    this.setState({
      output: this.state.firstArg * this.state.secondArg
    })
  }

  getSum = (outputTab) => {
    outputTab.pop()
    console.log(outputTab)
    let indexToSplit = outputTab.indexOf("+")
    this.state.firstArg = outputTab.slice(0, indexToSplit).join('')
    this.state.firstArg = parseInt(this.state.firstArg)
    this.state.secondArg = outputTab.slice(indexToSplit + 1).join('')
    this.state.secondArg = parseInt(this.state.secondArg)
    // console.log({ firstArg, secondArg, outputTab })
    // this.getmultiply(firstArg,secondArg)
    this.setState({
      output: this.state.firstArg + this.state.secondArg
    })
  }

  getSubs = (outputTab) => {
    outputTab.pop()
    console.log(outputTab)
    let indexToSplit = outputTab.indexOf("-")
    this.state.firstArg = outputTab.slice(0, indexToSplit).join('')
    this.state.firstArg = parseInt(this.state.firstArg)
    this.state.secondArg = outputTab.slice(indexToSplit + 1).join('')
    this.state.secondArg = parseInt(this.state.secondArg)

    this.setState({
      output: this.state.firstArg - this.state.secondArg
    })
  }

  getDivide = (outputTab) => {
    outputTab.pop()
    console.log(outputTab)
    let indexToSplit = outputTab.indexOf(":")
    this.state.firstArg = outputTab.slice(0, indexToSplit).join('')
    this.state.firstArg = parseInt(this.state.firstArg)
    this.state.secondArg = outputTab.slice(indexToSplit + 1).join('')
    this.state.secondArg = parseInt(this.state.secondArg)
  
    this.setState({
      output: (this.state.firstArg / this.state.secondArg).toFixed(2)
    })
  }

  getValue = (e) => {
    console.log(e.target.value)
    outputTab.push(e.target.value)
    this.setState({
      output: outputTab
    })
    if (outputTab.includes('=')) {
      this.getScore(outputTab);
      outputTab = []
    }
    else if (outputTab.includes('C')) {
      outputTab = []
      this.setState({
        output: outputTab
      })
    }

    else if (outputTab.includes('+/-')) {
      this.changeSign(outputTab);
      // outputTab = []
    }


  }
  render() {
    return (
      <div className="app">
        <Output
          outputDisplay={this.state.output}
        />
        <Keyboard
          getValueBtn={this.getValue}
        />
      </div>
    );
  }
}

export default App;
