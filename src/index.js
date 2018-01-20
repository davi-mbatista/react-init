import React, { Component } from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Welcome } from 'components';

class App extends Component {
    state = {
      open: false
    }

    handleOpening = () => this.setState({ open: !this.state.open })

    render() {
        return(
        <div>
            <Welcome onClick={this.handleOpening} />
        </div>
      );
    }
}

render(<App />, document.querySelector('#root'));

registerServiceWorker();
