import React from "react";
import { Link  }from 'react-router-dom';
import {
    LakeCocoImg, CabinsImg, CanoesImg, JumpingInLakeImg
} from "../../assets";
import './style.css';


let picArr = [{img: LakeCocoImg}, {img: CabinsImg}, {img: CanoesImg}, {img: JumpingInLakeImg}]

class Carousel extends React.Component {
    state = {
        statefulI: 0,
        imagePicUsing: picArr[0]
    }
    render() {
        return(
            <div className="carousel carousel-slider">
                <Link className="carousel-item" to="#one!"><img alt='#' onLoad={this.props.load} src={LakeCocoImg}/></Link>
                <Link className="carousel-item" to="#two!"><img alt='#' src={CabinsImg}/></Link>
                <Link className="carousel-item" to="#three!"><img alt='#' src={CanoesImg}/></Link>
                <Link className="carousel-item" to="#four!"><img alt='#' src={JumpingInLakeImg}/></Link>
            </div>
        );
    }
}

export default Carousel;