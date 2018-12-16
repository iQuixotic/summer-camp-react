import React from "react";
import {
    LakeCocoImg, CabinsImg, CanoesImg, JumpingInLakeImg
} from "../../assets";
import './style.css';

// var instance = M.Carousel.init({
//     fullWidth: true
// });


let picArr = [{img: LakeCocoImg}, {img: CabinsImg}, {img: CanoesImg}, {img: JumpingInLakeImg}]

class Carousel extends React.Component {
    state = {
        statefulI: 0,
        imagePicUsing: picArr[0]
    }
    render() {
        return(
            <div class="carousel carousel-slider">
                <a class="carousel-item" href="#one!"><img alt='#' onLoad={this.props.load} src={LakeCocoImg}/></a>
                <a class="carousel-item" href="#two!"><img alt='#' src={LakeCocoImg}/></a>
                <a class="carousel-item" href="#three!"><img alt='#' src={LakeCocoImg}/></a>
                <a class="carousel-item" href="#four!"><img alt='#' src={LakeCocoImg}/></a>
            </div>
        );
    }
}

export default Carousel;