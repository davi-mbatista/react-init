import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Welcome } from 'components';

class App extends Component {
    render() {
        return(
        <Fragment>
            <Welcome />
        </Fragment>
      );
    }
}

render(<App />, document.querySelector('#root'));

registerServiceWorker();
