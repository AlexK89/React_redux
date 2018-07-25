import React from 'react';
import styles from './Button.scss';

const button = (props) => {
    return (
        <button
            className={[styles.btn, styles[props.btnType]].join(' ')}
            onClick={props.click}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
};

export default button;