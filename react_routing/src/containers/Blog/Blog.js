import React, {Component} from 'react';
// import Posts from '../Posts/Posts.jsx';
// import newPosts from '../NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import styles from './Blog.scss';

// Lazy loading
import asyncComponent from '../../hoc/AsyncComponent.jsx';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});
const AsyncPosts = asyncComponent(() => {
    return import('../Posts/Posts.jsx');
});

class Blog extends Component {
    render() {
        return (
            <div className={styles.Blog}>
                <header className={styles.Blog__header}>
                    <nav className={styles.Blog__header__nav_menu}>
                        <ul className={styles.Blog__header__nav_menu__list}>
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
                    <Route path="/new-post"  component={AsyncNewPost}/>
                    <Route path="/posts" component={AsyncPosts}/>
                    <Redirect from="/" exact to="/posts" />
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;