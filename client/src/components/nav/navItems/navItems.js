import * as React from "react";
// import {Icon} from 'react-fa';
import './style.css';

const NavItems = (props) => {
    return (
        <ul className='nav-items'>
             <li>Home<a href={props.link1}>{props.children}</a></li>
             <li>Activities<a href={props.link2}>{props.children}</a></li>
             <li>Calender<a href={props.link2}>{props.children}</a></li>
             <li>Contact<a href={props.link2}>{props.children}</a></li>
        </ul>
    );
}

export default NavItems;