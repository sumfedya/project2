import React from 'react';
import ReactDOM from 'react-dom';

const MenuItem = (props) => {
    return(
        <li><a href={props.href}>{props.children}</a></li>
    );
};

export default MenuItem;