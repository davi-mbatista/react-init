import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    counter: 0
  }

  render () {
    const { counter } = this.state.counter;

    add = () => this.setState(prevState => ({ counter: prevState.counter + 1 }));

    return (
      <div>
        <section>
          <h1>
            {counter}
          </h1>
        </section>
        <section>
          <button onClick={this.add}>Add</button>
          <button onClick={this.remove}>Remove</button>
        </section>
      </div>
    );
  }
}

export default App

render(<App />, document.querySelector('#root'));
