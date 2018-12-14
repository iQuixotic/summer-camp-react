import React from "react";
import {
    LakeCocoImg
} from "../../assets";
import './style.css';

// var instance = M.Carousel.init({
//     fullWidth: true
// });
const Carousel = (props) => {
    return(
        <div className="carousel carousel-slider">
            <a className="carousel-item" href="#one!"><img alt='#' onLoad={props.load} src={LakeCocoImg}/></a>
            {/* <a className="carousel-item" href="#two!"><img alt='#' src={LakeCocoPic}/></a>
            <a className="carousel-item" href="#three!"><img alt='#' src={LakeCocoPic}/></a>
            <a className="carousel-item" href="#four!"><img alt='#' src={LakeCocoPic}/></a> */}
        </div>
    );
}

export default Carousel;