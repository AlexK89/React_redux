import React from 'react';
import Post from '../../components/Post/Post';
import { Route, Link, Switch } from 'react-router-dom';
import FullPosts from '../../containers/FullPost/FullPost';
import axios from '../../axios';

import styles from './Posts.scss';

export class Posts extends React.Component {
    state = {
        posts: null,
        selectedPostId: null,
        queryingError: false
    };

    componentDidMount() {
        console.log('Posts: ', this.props);
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
                    <Link
                        key={post.id}
                        className={styles.Posts_post}
                        to={`${this.props.match.url}/${post.id}`}>
                        <Post
                            selected={() => this.postSelectedHandler(post.id)}
                            post={post}/>
                    </Link>
                )
            }) : null;

        return (
            this.state.queryingError ?
                <h2>SOMETHING WENT WRONG</h2>
                :
                <div>
                    <section className={styles.Posts}>
                        {posts}
                    </section>
                    <Route path={`${this.props.match.url}/:id`} component={FullPosts}/>
                </div>
        )
    }
}

export default Posts;