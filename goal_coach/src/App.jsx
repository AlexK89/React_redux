import React from 'react';
import {connect} from  'react-redux';
import { firebaseApp } from "./firebase";

export class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    signOut () {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <p>Hello</p>
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);