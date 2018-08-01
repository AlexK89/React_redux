import React, {Component} from 'react';
import Posts from '../Posts/Posts.jsx';
import newPosts from '../NewPost/NewPost';
import { Route, Link } from 'react-router-dom';

import styles from './Blog.scss';

class Blog extends Component {
    render() {
        return (
            <div className={styles.Blog}>
                <header className={styles.Blog__header}>
                    <nav className={styles.Blog__header__nav_menu}>
                        <ul className={styles.Blog__header__nav_menu__list}>
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <Link to="/new-post">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={newPosts}/>
            </div>
        );
    }
}

export default Blog;