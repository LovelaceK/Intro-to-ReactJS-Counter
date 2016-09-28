import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(){
    this.setState({
      val: this.state.val + 1
    })
  }
  decrement(){
    this.setState({
      val: this.state.val - 1
    })
  }
  render(){
    return (
      <div>
      <button onClick={this.increment}>'+'</button>
      <button onClick={this.decrement}>'-'</button>
      <div id='app'>{this.state.val}</div>
      </div>
    )
  }
}
export default App
