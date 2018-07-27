import React from 'react';
import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo.jsx';
import Navigation from '../NavigationItems/NavigationItems.jsx';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>Menu</div>
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav className={styles.Toolbar_nav}>
                <Navigation />
            </nav>
        </header>
    )
};

export default toolbar;