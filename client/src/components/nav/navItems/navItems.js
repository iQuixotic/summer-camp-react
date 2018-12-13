import * as React from "react";
// import {Icon} from 'react-fa';
import './style.css';

const NavItems = (props) => {
    return (
        <ul className='nav-items'>
             <li><a className={props.className1} href={props.link2}>Home</a></li>
             <li><a className={props.className2} href={props.link3}>Activities</a></li>
             <li><a className={props.className3} href={props.link1}>Calendar</a></li>
             <li><a className={props.className4} href={props.link4}>Contact</a></li>
        </ul>
    );
}

export default NavItems;