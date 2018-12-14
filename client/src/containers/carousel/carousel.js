import * as React from "react";
import { 
    LakeCocoPic
  } from "../../assets";
// import { Layout, Loader } from "../../containers";
import './style.css';
// import StupidLayout from "../resp/stupidLayout";

class Carousel extends React.Component {
    // state = {
    //    loading: true,
    //    thing: false
    // }
    // componentDidMount = () => {
    //     this.setState({loading: false})
    // }

  render() {
    return (
        // <StupidLayout  {...this.state}>
            <div className='carousel'>
                <LakeCocoPic 
                load={this.props.load}
                />
            </div>
        // </StupidLayout >
      
    );
  }
}

export default Carousel;