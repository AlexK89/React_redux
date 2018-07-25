import React from 'react';
import styles from './Toolbar.scss';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
            <ul className={styles.Toolbar_nav}>List</ul>
        </header>
    )
};

export default toolbar;