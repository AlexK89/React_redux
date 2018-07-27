import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.scss';

const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="Logo"/>
        </div>
    )
};

export default logo;