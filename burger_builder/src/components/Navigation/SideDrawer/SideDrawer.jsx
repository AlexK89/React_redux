import React from 'react';
import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import styles from './SideDrawer.scss';

const sideDrawer = (props) => {
    return (
        <div className={styles.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
};

export default sideDrawer;