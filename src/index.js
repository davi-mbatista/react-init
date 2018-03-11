import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Sample from './components/Sample';

render(<Sample />, document.querySelector('#root'));

registerServiceWorker();
