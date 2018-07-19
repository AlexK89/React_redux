import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burgeringredient.scss';

export class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                this.ingredient = <div className={styles.BreadBottom}>BreadBottom</div>;
                break;
            case ('bread-top'):
                this.ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}>Seeds1</div>
                        <div className={styles.Seeds2}>Seeds2</div>
                    </div>
                );
                break;
            case ('meat'):
                this.ingredient = <div className={styles.Meat}>Meat</div>;
                break;
            case ('cheese'):
                this.ingredient = <div className={styles.Cheese}>Cheese</div>;
                break;
            case ('salad'):
                this.ingredient = <div className={styles.Salad}>Salad</div>;
                break;
            case ('bacon'):
                this.ingredient = <div className={styles.Bacon}>Bacon</div>;
                break;
            default:
                this.ingredient = null;
        }

        return this.ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;