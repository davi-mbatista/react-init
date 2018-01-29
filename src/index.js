import React from 'react';
import { render } from 'react-dom';
import { Welcome } from 'components';
import registerServiceWorker from './registerServiceWorker';

const App = () => <Welcome />

render(
    <App />,
    document.querySelector('#root')
);

registerServiceWorker();
