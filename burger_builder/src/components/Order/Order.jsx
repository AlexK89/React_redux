import React from 'react';
import styles from './Order.scss';


const order = (props) => {
    let ingredients =
        <ul className={styles.order__ingredients}>
            {
                Object.entries(props.order.ingredients).map((ingredient, key) => {
                    console.log(ingredient);
                    return <li className={styles.order__ingredients__ingredient} key={key}>{ingredient[0]} {ingredient[1]}; </li>
                })
            }
        </ul>
    return (
        <div className={styles.order}>
            <div>
                <h4>Ingredients:</h4>
                {ingredients}
            </div>
            <p>Price: <strong>{props.order.totalPrice} USD</strong></p>
        </div>
    )
};

export default order;