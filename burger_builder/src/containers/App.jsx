import React, {Component} from 'react';
import styles from './App.scss';
import Layout from '../components/Layout/Layout.jsx';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Layout>
                    <p>Hello</p>
                </Layout>
            </div>
        );
    }
}

// TEST
export default App;
