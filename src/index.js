import React, { Component } from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './styles.css';

const App = () => <h1>React App</h1>

render(
  <App />,
  document.querySelector('#root')
);
