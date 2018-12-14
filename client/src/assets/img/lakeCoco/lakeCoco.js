import * as React from "react";
import { LakeCocoImg } from '../../index';
// import { Img } from '../../../containers';

import './style.css';

const LakeCocoPic = (props) => {
    return ( 
        <div className='lake-coco' id={props.id} >
            <img onLoad={props.load} src={LakeCocoImg} alt='#' />
        </div>
    );
}

export default LakeCocoPic;