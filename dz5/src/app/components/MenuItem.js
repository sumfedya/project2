import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component {
    render(){
        const {active, href, children} = this.props;
        return(
            <li className={active ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={href}>{children}</Link>   
            </li>
        );            
    }
}