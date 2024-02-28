import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Counter App</h1>
        <div>
          <p>Count: {count}</p>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
