import * as React from "react";
import { NavItems } from '../../../components';
// import {Icon} from 'react-fa';
import './style.css';

const Toolbar = (props) => {
    return (         
        <nav className={window.location.pathname === '/' ? 'toolbar' : 'alt-tb'}>
        <div className={window.location.pathname === '/' ? 'toolbar-shadow' : ''}></div>
            <NavItems
                className1={window.location.pathname.includes('home') ? 'active' : ''}
                className2={window.location.pathname.includes('activities') ? 'active' : ''}
                className3={window.location.pathname.includes('calendar') ? 'active' : ''}
                className4={window.location.pathname.includes('contact') ? 'active' : ''}
                link1='/'
                link2='/activities'
                link3='/calendar' 
                link4='/contact'
                />
        </nav>
    );
}

export default Toolbar;