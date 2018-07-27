import React from 'react';
import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/Aux.jsx';
import styles from './SideDrawer.scss';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.openStatus} clicked={props.closed}/>
            <div className={[styles.SideDrawer, (props.openStatus ? styles.open : styles.close)].join(' ')}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;