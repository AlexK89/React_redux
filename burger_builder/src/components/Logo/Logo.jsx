import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.scss';

const logo = (props) => {
    return (
        <img src={burgerLogo} className={styles.logo_img} alt="Logo"/>
    )
};

export default logo;