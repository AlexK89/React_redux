import React, {Component} from 'react';
import Posts from '../Posts/Posts.jsx';
import FullPosts from '../../containers/FullPost/FullPost';
import newPosts from '../NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';

import styles from './Blog.scss';

class Blog extends Component {
    render() {
        return (
            <div className={styles.Blog}>
                <header className={styles.Blog__header}>
                    <nav className={styles.Blog__header__nav_menu}>
                        <ul className={styles.Blog__header__nav_menu__list}>
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <NavLink
                                    to="/"
                                    exact>Home</NavLink>
                            </li>
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <NavLink activeClassName = "my-active" to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*Render only first matched route(works like || , looking for first true)*/}
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={newPosts}/>
                    <Route path="/:id" exact component={FullPosts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;