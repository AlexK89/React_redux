import React from 'react';
import styles from './Order.scss';


const order = (props) => {
    return (
        <div className={styles.order}>
            <p>Ingredients:  </p>
            <p>Price: <strong>5 USD</strong></p>
        </div>
    )
};

export default order;