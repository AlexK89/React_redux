import React, {Component} from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import styles from './Blog.scss';

class Blog extends Component {
    state = {
        posts: null,
        selectedPostId: null,
        queryingError: false
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                if (response.status === 200) {
                    const posts = response.data.slice(0, 3);
                    const updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Alex'
                        }
                    });
                    console.log(updatedPosts);

                    this.setState({
                        posts: updatedPosts,
                        queryingError: false
                    })
                }
            })
            .catch(error => {
                this.setState({queryingError: true});
            });
    }

    postSelectedHandler = (selectedPostId) => {
        this.setState({selectedPostId});
    };

    render() {
        const posts =
            this.state.posts ? this.state.posts.map(post => {
            return (
                <Post
                    selected={() => this.postSelectedHandler(post.id)}
                    key={post.id}
                    post={post}/>
            )
        }) : null;

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
                {
                    this.state.queryingError ?
                        <h2>SOMETHING WENT WRONG</h2>
                        :
                        <section className={styles.posts}>
                            {posts}
                        </section>
                }

                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;