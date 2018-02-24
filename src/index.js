import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => 'hey!';

render(<App />, document.querySelector('#root'));

registerServiceWorker();
