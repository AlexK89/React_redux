import React from 'react';
import styles from './Button.scss';

const button = (props) => {
    const btnClasses = (props.btnType).split(' ').map(btnClass => {
        return styles[btnClass];
    });

    return (
        <button
            className={[styles.btn, ...btnClasses].join(' ')}
            onClick={props.click}
            disabled={props.disabled}
            type={props.type}>
            {props.children}
        </button>
    )
};

export default button;