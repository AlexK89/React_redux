import React from 'react';
import styles from './Form.scss';

const formInput = (props) => {
    let inputField = null;

    switch (props.elementType) {
        case 'textarea':
            inputField = <textarea {...props.elementConfig} value={props.value}/>;
            break;
        case 'select':
            inputField = (
                <select>
                    {
                        props.elementConfig.options.map(option => {
                            return (
                                <option key={option.value} value={option.value}>{option.displayValue}</option>
                            )
                        })
                    }
                </select>
            );
            break;
        default:
            inputField = <input {...props.elementConfig} value={props.value}/>;
    }

    return (
        <div className={styles.Input_block}>
            <label>{props.name}</label>
            {inputField}
        </div>
    );
};

export default formInput;