import React, {Component} from 'react';
import Posts from '../Posts/Posts.jsx';

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
                <Posts />
            </div>
        );
    }
}

export default Blog;