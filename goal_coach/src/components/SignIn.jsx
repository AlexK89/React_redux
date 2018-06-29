import React from 'react';
import { Link } from 'react-router';
import { firebaseApp } from "../firebase";

export default class SignIn extends React.Component {
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
    signIn(event) {
        event.preventDefault();
        console.log(this.state);

        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({
                    error
                });
            })
    }

    render() {
        return (
            <div className="form-inline">
                <h2>Sign In</h2>
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
                        type="submit"
                        className="btn btn-primary"
                        onClick={(event) => this.signIn(event)}>
                        Sign in
                    </button>
                </form>

                <h5>{this.state.error.message}</h5>
                <div><Link to={'/signUp'}>Sign Up</Link></div>
            </div>
        )
    }
}