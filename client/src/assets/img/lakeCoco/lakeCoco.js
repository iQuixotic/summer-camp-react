import * as React from "react";
import { LakeCocoImg } from '../../index';
import { Loader } from '../../../containers';

import './style.css';

const LakeCocoPic = (props) => {
    return ( 
        <div className='lake-coco' id={props.id} >
            <img src={LakeCocoImg} alt='#' />
        </div>
    );
}

export default Loader(LakeCocoPic);