import React from 'react';
import styles from './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.jsx';

const burger = (props) => {
    return (
        <div className={styles.burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;