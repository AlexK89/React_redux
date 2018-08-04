import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            // We can use basename property to set default starting point for routing
            <BrowserRouter basename="/startPointAddress">
                <div className="App">
                    <Blog/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
