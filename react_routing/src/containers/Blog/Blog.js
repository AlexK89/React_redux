import React, {Component} from 'react';
import Posts from '../Posts/Posts.jsx';
import newPosts from '../NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

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
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <NavLink
                                    to="/posts"
                                    exact>Posts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*Render only first matched route(works like || , looking for first true)*/}
                <Switch>
                    <Route path="/new-post"  component={newPosts}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from={"/*"} to={"/"} />
                </Switch>
            </div>
        );
    }
}

export default Blog;