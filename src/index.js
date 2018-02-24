import React, { Fragment } from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <Fragment>
            <span>Hello World</span>
            <button onClick={() => console.log('hey')}>Action!</button>
        </Fragment>
    );
};

render(<App />, document.querySelector('#root'));

registerServiceWorker();
