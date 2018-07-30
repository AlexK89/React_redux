import React, { Component } from 'react';

import styles from './FullPost.scss';

class FullPost extends Component {
    render () {
        let post = <p className={styles.post_not_selected}>Please select a Post!</p>;
        if (!this.props.id) {
            return post;
        }


        post = (
            <div className={styles.FullPost}>
                <h1>Title</h1>
                <p>Content</p>
                <div className={styles.Edit}>
                    <button className={styles.Delete}>Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;