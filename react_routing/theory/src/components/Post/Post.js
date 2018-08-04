import React from 'react';
import { withRouter } from 'react-router-dom'
import styles from  './Post.scss';

const post = (props) => {
    console.log('NewPost: ', props);
    return (
        <article className={styles.Post} onClick={props.selected}>
            <h1>{props.post.title}</h1>
            <div className={styles.Info}>
                <div className={styles.Author}>{props.post.author}</div>
            </div>
        </article>
    )
};

export default withRouter(post);