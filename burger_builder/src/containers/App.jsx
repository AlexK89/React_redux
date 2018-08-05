import React, {Component} from 'react';
import styles from './App.scss';
import Layout from './Layout/Layout.jsx';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder.jsx';
import Checkout from '../containers/Checkout/Checkout.jsx';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Layout>
                    <BurgerBuilder />
                    <Checkout />
                </Layout>
            </div>
        );
    }
}

// TEST
export default App;
