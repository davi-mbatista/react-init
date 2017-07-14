import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return(
            <div>
                <h3>React Starter</h3>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
);
