import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import styles from './Blog.scss';

class Blog extends Component {
    state = {
        posts: null,
        selectedPostId: null
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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

                    this.setState({posts: updatedPosts})
                }

            });
    }

    postSelectedHandler = (selectedPostId) => {
        this.setState({selectedPostId});
    };

    render() {
        const posts = (
            this.state.posts) ? this.state.posts.map(post => {
            return (
                <Post
                    selected={() => this.postSelectedHandler(post.id)}
                    key={post.id}
                    post={post}/>
            )
        }) : null;

        return (
            <div>
                <section className={styles.Posts}>
                    {posts}
                </section>
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