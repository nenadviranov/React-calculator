import React, {Component} from 'react';
import KeyPad from './components/KeyPad'
import Output from './components/Output'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: ""
    }

  }

  buttonPressed = (buttonName) => {
    if(buttonName === '=') {
      this.calculate()
    }else if (buttonName === 'C') {
      this.reset()
    } else if (buttonName === 'CE') {
      this.backSpace()
    } else {
      this.setState({
        result: this.state.result + buttonName
      })
    }
  }

  backSpace = () => {
    this.setState({
      result : this.state.result.slice(0, -1)
    })
  }

  reset = () => {
    this.setState({
      result : ""
    })
  }

  calculate = () => {
    const checkResult = this.state.result
    try {
      this.setState({
        result: (eval(checkResult) || "" ) + ""
      })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

  render (){

    return (
      <div className="App">
        <div className="calc-body">
          <Output result={this.state.result}/>
          <KeyPad buttonPressed={this.buttonPressed}/>
        </div>
      </div>
    );
  }
}

export default App;
