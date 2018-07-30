import React from 'react';

import styles from  './Post.scss';

const post = (props) => (
    <article className={styles.Post}>
        <h1>{props.post.title}</h1>
        <div className={styles.Info}>
            <div className={styles.Author}>{props.post.author}</div>
        </div>
    </article>
);

export default post;