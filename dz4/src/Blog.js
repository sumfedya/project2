import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

const Blog = (props) => {
    const posts = props.posts.map((post, index) =>{
        return <Post key={index} author={post.author} title={post.title} postbody={post.postbody} postdate={post.postdate}></Post>
    });
    return (
        <>
            {posts}
        </>
    );
};

export default Blog;
