import * as React from "react";
import { NavItems } from '../../../components';
// import {Icon} from 'react-fa';
import './style.css';

const Toolbar = (props) => {
    return (
        <nav className='toolbar'>
        <div className='toolbar-shadow'></div>
            <NavItems
                link1='home'
                link2='calendar' 
                link3='activities'
                link4='contact'
                />
        </nav>
    );
}

export default Toolbar;