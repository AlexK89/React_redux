import React from 'react';
import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo.jsx';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>Menu</div>
            <Logo />
            <ul className={styles.Toolbar_nav}>List</ul>
        </header>
    )
};

export default toolbar;