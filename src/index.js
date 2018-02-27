import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    static state = {};

    doStuff = async () => {
        const request = await fetch('https://images.unsplash.com/photo-1446770145316-10a05382c470');
        console.log(request);
    };

    render() {
        return (
            <Fragment>
                <div>Hello World</div>
                <button onClick={this.doStuff}>Action!</button>
            </Fragment>
        );
    }
}

render(<App />, document.querySelector('#root'));

registerServiceWorker();
