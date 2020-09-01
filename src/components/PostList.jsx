import React from 'react';
import PostItem from './PostItem';
import './PostList.css'

function PostList(props) {
    const { posts } = props;
    return(
        <div className="post-list">
            <h2>Postari</h2>
            {
                posts.map(post => {
                    return <PostItem 
                                key={ post.id }
                                title={ post.title }
                                body={ post.body }
                           />
                })
            }
        </div>
    )
}

export default PostList;