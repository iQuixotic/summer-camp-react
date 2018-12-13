import * as React from "react";
import { 
    LakeCocoPic
  } from "../../../assets";
// import { Layout } from "../../../containers";
import './style.css';

class Carousel extends React.Component {
    state = {
       loading: true
    }

  render() {
    return (
      <div className='carousel'>
        <LakeCocoPic />
      </div>
    );
  }
}

export default Carousel;