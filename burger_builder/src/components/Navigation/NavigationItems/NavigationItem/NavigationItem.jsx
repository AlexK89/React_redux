import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavigationItem.scss';

const navigationItem = (props) => {
    return (
        <li className={styles.NavigationItem}>
            <NavLink to={props.link} className={props.active ? styles.active : null}>{props.children}</NavLink>
        </li>
    )
};

export default navigationItem;