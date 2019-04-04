import React from 'react';
import ReactDOM from 'react-dom';

const postStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "10px",
    margin: "0 100px"
};

const authorStyle = {
    color: "blue"
};

const dateStyle = {
  marginTop: "15px"  
};

const Post = (props) => {
    return (
        <article style={postStyle}>
            <h3>{props.title}</h3>
            <p>{props.postbody}</p>
            <p>{props.postdate} by <span style={authorStyle}>{props.author}</span></p>
        </article>
    );
};

export default Post;
