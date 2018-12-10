import * as React from "react";
import { ChalkWritingImg } from '../../index';

import './style.css';

const ChalkWriting = (props) => {
    return ( 
        <div className='chalk-writing' id={props.id} >
            <img src={ChalkWritingImg} alt='#' />
        </div>
    );
}

export default ChalkWriting;