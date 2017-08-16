import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    counter: 0
  }

  render () {
    return (
      <div>
        <h1>lorem</h1>
      </div>
    );
  }
}

export default App

render(<App />, document.querySelector('#root'));
