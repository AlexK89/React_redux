import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import styles from './Blog.scss';

class Blog extends Component {
    state = {
        posts: null
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // this.setState({posts: response.data})
                if (response.status === 200) {
                    console.log('response: ', response.data);
                }

            });
    }

    render () {
        return (
            <div>
                <section className={styles.Posts}>
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;