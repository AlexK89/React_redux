import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.jsx';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/" component={Navigation}/>
                    <Switch>
                        <Route path="/" exact render={() => <h1>Hello</h1>}/>
                        <Route path="/courses" component={Courses}/>
                        <Route path="/users" component={Users}/>
                        <Redirect from="/all-courses" to="courses"/>
                        <Route render={() => <h1>Not found</h1>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
