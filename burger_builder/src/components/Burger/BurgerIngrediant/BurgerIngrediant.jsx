import React from 'react';
import styles from './BurgerIngrediant.scss';

const burgerIngrediant = (props) => {
    let ingrediant = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingrediant = <div className={styles.BreadBottom}>BreadBottom</div>;
            break;
        case ('bread-top'):
            ingrediant = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}>Seeds1</div>
                    <div className={styles.Seeds2}>Seeds2</div>
                </div>
            );
            break;
        case ('meat'):
            ingrediant = <div className={styles.Meat}>Meat</div>;
            break;
        case ('cheese'):
            ingrediant = <div className={styles.Cheese}>Cheese</div>;
            break;
        case ('salad'):
            ingrediant = <div className={styles.Salad}>Salad</div>;
            break;
        case ('bacon'):
            ingrediant = <div className={styles.Bacon}>Bacon</div>;
            break;
        default:
            ingrediant = null;
    }

    return ingrediant;
};

export default burgerIngrediant;