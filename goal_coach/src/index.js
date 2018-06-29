import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase.js';

import {Router, Route, browserHistory} from 'react-router';
import './index.css';
import App from './App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user signed in ', user);
        browserHistory.push('/app');
    } else {
        console.log('user has signed in or still needs to sign in. ');
        browserHistory.replace('/signIn');
    }
});

ReactDOM.render(
    <Router path={"/"} history={browserHistory}>
        <Route path={"/app"} component={App}></Route>
        <Route path={"/signin"} component={SignIn}></Route>
        <Route path={"/signup"} component={SignUp}></Route>
    </Router>, document.getElementById('root'));
