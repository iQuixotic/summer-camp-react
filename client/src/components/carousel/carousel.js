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
        <div class="carousel carousel-slider">
            <a class="carousel-item" href="#one!"><img alt='#' onLoad={props.load} src={LakeCocoImg}/></a>
            <a class="carousel-item" href="#two!"><img alt='#' src={LakeCocoImg}/></a>
            <a class="carousel-item" href="#three!"><img alt='#' src={LakeCocoImg}/></a>
            <a class="carousel-item" href="#four!"><img alt='#' src={LakeCocoImg}/></a>
        </div>
    );
}

export default Carousel;