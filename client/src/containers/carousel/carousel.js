import * as React from "react";
import { 
    LakeCocoPic
  } from "../../assets";
import { Layout, Loader } from "../../containers";
import './style.css';
import StupidLayout from "../resp/stupidLayout";

class Carousel extends React.Component {
    state = {
       loading: true,
       thing: false
    }
    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.setState({loading: false})
    //     }, 2000);
    // }

  render() {
    return (
        <StupidLayout >
            <div className='carousel'>
                <LakeCocoPic />
            </div>
        </StupidLayout >
      
    );
  }
}

export default Carousel;