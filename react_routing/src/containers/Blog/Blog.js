import React, {Component} from 'react';
import Posts from '../Posts/Posts.jsx';
import newPosts from '../NewPost/NewPost';
import { Route } from 'react-router-dom';

import styles from './Blog.scss';

class Blog extends Component {
    render() {
        return (
            <div className={styles.Blog}>
                <header className={styles.Blog__header}>
                    <nav className={styles.Blog__header__nav_menu}>
                        <ul className={styles.Blog__header__nav_menu__list}>
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <a href="/">Home</a>
                            </li>
                            <li className={styles.Blog__header__nav_menu__list__item}>
                                <a href="/new-post">New Post</a>
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