import React from 'react';
import styles from './Modal.scss';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show = {props.show} clicked = {props.modalClosed} />
                <div className={`${styles.Modal} ${props.show ? styles.list_visible : '  '}`} >
                    {props.children}
                </div>
        </Aux>
    )
};

export default Modal;