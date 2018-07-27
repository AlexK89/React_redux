import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';
import styles from './Layout.scss';

export class Layout extends React.Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            console.log(prevState);
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render() {
        console.log('this.state.showSideDrawer: ', this.state.showSideDrawer);
        return (
            <Aux>
                <Toolbar className={styles.Toolbar} drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer openStatus={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;