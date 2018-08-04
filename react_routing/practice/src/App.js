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
                        <Route path="/courses" component={Courses}/>
                        <Route path="/users" component={Users}/>
                        <Redirect from="/all-courses" to="courses"/>
                        <Route render={() => <h1>Not found</h1>}/>
                    </Switch>

                    <ol style={{textAlign: 'left'}}>
                        <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by
                            passing
                            it as query params (you need to manually parse them though!)
                        </li>
                    </ol>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
