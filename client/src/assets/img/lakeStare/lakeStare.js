import * as React from "react";
import { LakeStareImg } from '../../index';

import './style.css';

const LakeStarePic = (props) => {
    return ( 
            <div className={props.cn} id={props.id} >
                <img className='card img-size-control' src={LakeStareImg} alt='#' />
            </div>
    );
}

export default LakeStarePic;