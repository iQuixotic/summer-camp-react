import * as React from "react";
import { LakeStareImg } from '../../index';

import './style.css';

const LakeStarePic = (props) => {
    return ( 
            <div className='lake-stare' id={props.id} >
                <img src={LakeStareImg} alt='#' />
            </div>
    );
}

export default LakeStarePic;