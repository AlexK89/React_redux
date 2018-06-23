import {ADD_REMINDER, DELETE_REMINDER} from '../constants.js';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    };
    console.log('action in addRemainder', action);

    return action;
};

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id,
    };
    console.log('action in deleteRemainder', action);

    return action;
};