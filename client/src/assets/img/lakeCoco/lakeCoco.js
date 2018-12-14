import * as React from "react";
import { LakeCocoImg } from '../../index';
// import { Img } from '../../../containers';

import './style.css';

const LakeCocoPic = (props) => {
    return ( 
        <a class="carousel-item" href="#one!">
            <img alt='#' onLoad={props.load} src={LakeCocoImg}/>
        </a>
    );
}

export default LakeCocoPic;