import React from 'react';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <SignIn />
                <SignUp />
            </div>
        )
    }
}