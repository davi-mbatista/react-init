import React, { Component } from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => 'React App'

render(
  <App />,
  document.querySelector('#root')
);

registerServiceWorker();