import {ADD_REMINDER, DELETE_REMINDER} from '../constants.js';

const reminder = (action) => {
    let {text, dueDate} = action;
    return {
        text,
        dueDate,
        id: Math.random()
    }
};

const removeById = (state = [], id) => {
    return state.filter(item => item.id !== id);
};

const reminders = (state = [], action) => {
    let reminders = null;

    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state: ', reminders);
            return reminders;
        case DELETE_REMINDER:
            return removeById(state, action.id);
        default:
            return state;
    }
};

export default reminders;