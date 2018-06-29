import React from 'react';
import { Link } from 'react-router';
import { firebaseApp } from "../firebase";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }

    }
    signUp(event) {
        event.preventDefault();
        console.log(this.state);

        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({
                   error
                });
            })
    }

    render() {
        return (
            <div className="form-inline">
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            onChange={event => this.setState({email: event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password"
                               name="password"
                               type="password"
                               className="form-control"
                               onChange={event => this.setState({password: event.target.value})}/>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={(event) => this.signUp(event)}>
                        Submit
                    </button>
                </form>
                <h5>{this.state.error.message}</h5>
                <div><Link to="/signIn">Already a user</Link></div>
            </div>
        )
    }
}