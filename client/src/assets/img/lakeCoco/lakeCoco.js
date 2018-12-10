import * as React from "react";
import { LakeCocoImg } from '../../index';

import './style.css';

const LakeCocoPic = (props) => {
    return ( 
            <div className='lake-coco' id={props.id} >
                <img src={LakeCocoImg} alt='#' />
            </div>
    );
}

export default LakeCocoPic;