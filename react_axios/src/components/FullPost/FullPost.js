import React, { Component } from 'react';
import axios from 'axios';

import styles from './FullPost.scss';

class FullPost extends Component {
    state = {
      post: null
    };

    componentDidUpdate() {
        if (this.props.id && (!this.state.post || this.state.post.id !== this.props.id)) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(response => response.data)
                .then(post => {
                    this.setState({post})
                });
        }
    }



    render () {
        let post = <p className={styles.post_not_selected}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p className={styles.post_not_selected}>Loading...</p>;
        }

        if (this.state.post) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className={styles.Edit}>
                        <button className={styles.Delete}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;