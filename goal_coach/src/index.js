import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { firebaseApp } from './firebase.js';
import {logUser} from "./actions";
import reducer from './reducers/reducer_user';

import {Router, Route, browserHistory} from 'react-router';
import './index.css';
import App from './App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user signed in ', user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        console.log('user has signed out or still needs to sign in. ');
        browserHistory.replace('/signIn');
    }
});

ReactDOM.render(
   <Provider store={store}>
       <Router path={"/"} history={browserHistory}>
           <Route path={"/app"} component={App}></Route>
           <Route path={"/signin"} component={SignIn}></Route>
           <Route path={"/signup"} component={SignUp}></Route>
       </Router>
   </Provider>, document.getElementById('root'));
