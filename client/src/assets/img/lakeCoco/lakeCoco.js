import * as React from "react";
import { LakeCocoImg } from '../../index';

import './style.css';

const LakeCoco = (props) => {
    return ( 
            <div className='lake-coco' id={props.id} >
                <img src={LakeCocoImg} />
            </div>
    );
}

export default LakeCoco;