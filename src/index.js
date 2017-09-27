import React, { Component } from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Welcome } from 'components';

const App = Welcome;

render(
  <App />,
  document.querySelector('#root')
);

registerServiceWorker();