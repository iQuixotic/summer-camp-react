import * as React from "react";
import { CampfireCircleImg } from '../../index';

import './style.css';

const CampfireCirclePic = (props) => {
    return ( 
        <div className={props.cn} id={props.id} >
            <img className='card img-size-control' src={CampfireCircleImg} alt='#' />
        </div>
    );
}

export default CampfireCirclePic;