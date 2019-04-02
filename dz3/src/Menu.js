import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const Menu = (props) =>{
    const items = props.items.map((item, index) =>{
        return <MenuItem key={index} href={item.href}>{item.title}</MenuItem>
    });
    return (
        <div>
        <h2>{props.titleMenu}</h2>
        <ul>
            {items}
        </ul>
        </div>
        );
};
    
export default Menu;