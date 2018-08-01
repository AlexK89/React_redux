import React from 'react';
import Post from '../../components/Post/Post';
import axios from "../../axios";

import styles from './Posts.scss';

export class Posts extends React.Component {
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
            this.state.queryingError ?
                <h2>SOMETHING WENT WRONG</h2>
                :
                <section className={styles.Posts}>
                    {posts}
                </section>
        )
    }
}

export default Posts;