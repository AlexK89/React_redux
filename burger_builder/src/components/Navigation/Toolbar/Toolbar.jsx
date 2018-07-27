import React from 'react';
import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo.jsx';
import Navigation from '../NavigationItems/NavigationItems.jsx';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle drawerToggle={props.drawerToggleClicked} />
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav className={[styles.Toolbar_nav, styles.onlyForDesktop].join(' ')}>
                <Navigation />
            </nav>
        </header>
    )
};

export default toolbar;