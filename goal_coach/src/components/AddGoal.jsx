import React from 'react';
import { connect } from 'react-redux';
import { goalRef } from "../firebase";

export class AddGoal extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: ''
        }
    }

    addGoal(event) {
        event.preventDefault();

        console.log(this.props);
        const { title } = this.state;
        const { email } = this.props;

        goalRef.push({email,title});
    }

    render() {
        return (
            <div className="add_goal">
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="add_goal__text">Add your goal</label>
                        <input
                            onChange={(event) => this.setState({title: event.target.value})}
                            type="text"
                            className="form-control"/>
                    </div>
                    <button
                        type="submit"
                        onClick={(event) => this.addGoal(event)}
                        className="btn btn-success">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { email } = state;
    return {
        email
    }
}

export default connect(mapStateToProps, null)(AddGoal);