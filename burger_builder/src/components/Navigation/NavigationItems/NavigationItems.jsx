import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.jsx';
import styles from './NavigationItems.scss';

const navigationItems = (props) => {
    return (
        <ul className={styles.NavigationItem}>
            <NavigationItem link={'/'} active>Burger builder</NavigationItem>
            <NavigationItem link={'/checkout'}>Checkout</NavigationItem>
            <NavigationItem link={'/orders'}>Orders</NavigationItem>
        </ul>
    )
};

export default navigationItems;