import React from 'react';
import { firebaseApp } from "./firebase";

export default class App extends React.Component {
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