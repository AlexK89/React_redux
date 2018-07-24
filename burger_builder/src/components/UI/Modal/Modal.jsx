import React from 'react';
import styles from './Modal.scss';

const Modal = (props) => {
    console.log(props.show);
    return (
        <div
            className={`${styles.Modal} ${props.show ? styles.list_visible : ''}`}
        >
            {props.children}
        </div>
    )
};

export default Modal;