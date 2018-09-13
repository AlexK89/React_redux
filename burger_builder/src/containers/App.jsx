import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.scss';
import Layout from './Layout/Layout.jsx';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder.jsx';
import Checkout from '../containers/Checkout/Checkout.jsx';
import Orders from "./Checkout/Orders/Orders";

class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/" component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

// TEST
export default App;
