import React from 'react';
import styles from './Backdrop.scss';

const backdrop = (props) => {
    return props.show ? <div onClick={props.clicked} className={styles.Backdrop}></div> : null
};

export default backdrop;