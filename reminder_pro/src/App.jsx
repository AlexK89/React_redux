import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Moment from 'moment';
import {addReminder, deleteReminder, clearReminder} from "./actions";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    addReminder(event) {
        event.preventDefault();
        console.log('this: ', this);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        console.log('App delete reminder id: ', id);
        this.props.deleteReminder(id);
    }
    clearReminder() {
        this.props.clearReminder();
    }
    renderReminders() {
        const {reminders} = this.props;
        return (
            <ul className={'list-group col0-sm-4 reminders'}>
                {
                    reminders.map(reminder => {
                            return (
                                <li key={reminder.id} className={'list-group-item reminders__item'}>
                                    <span>{reminder.text}</span>
                                    <span>{Moment(new Date(reminder.dueDate)).fromNow()}</span>
                                    <span className="delete-button"
                                          onClick={() => {
                                              this.deleteReminder(reminder.id)
                                          }}>
										&#x2715;
									</span>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="app">
                <h1 className="app__title">Reminder Pro</h1>
                <form className="form-inline">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={"I have to..."}
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <input  type="datetime-local"
                                className={"form-control"}
                                onChange={(event) => (this.setState({dueDate: event.target.value}))}
                        />
                    </div>
                    <div className={"submit_button_wrapper"}>
                        <button
                            className={"btn btn-success"}
                            onClick={(event) => this.addReminder(event)}>
                            Add reminder
                        </button>
                        <button
                            className={"btn btn-danger"}
                            onClick={() => this.clearReminder()}>
                            Remove all reminders
                        </button>
                    </div>
                </form>
                {this.renderReminders()}
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addReminder, deleteReminder, clearReminder}, dispatch);
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        reminders: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);