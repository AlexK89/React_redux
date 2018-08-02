import React, { Component } from 'react';
import axios from 'axios';

import styles from './FullPost.scss';

class FullPost extends Component {
    state = {
      post: null
    };

    componentDidMount() {
        if (this.props.match.params.id && (!this.state.post || this.state.post.id !== this.props.match.params.id)) {
            axios.get(`/posts/${this.props.match.params.id}`)
                .then(response => response.data)
                .then(post => {
                    this.setState({post})
                });
        }
    }

    postDeleteHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
            .then(response => {
                console.log('Delete response: ', response);
            });
    };

    render () {
        let post = <p className={styles.post_not_selected}>Please select a Post!</p>;

        if (this.props.match.params.id) {
            post = <p className={styles.post_not_selected}>Loading...</p>;
        }

        if (this.state.post) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className={styles.Edit}>
                        <button className={styles.Delete} onClick={this.postDeleteHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;