import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.jsx';
import styles from './NavigationItems.scss';

const navigationItems = (props) => {
    return (
        <ul className={styles.NavigationItem}>
            <NavigationItem link={'/'} active>Burger builder</NavigationItem>
            <NavigationItem link={'/'}>Checkout</NavigationItem>
        </ul>
    )
};

export default navigationItems;