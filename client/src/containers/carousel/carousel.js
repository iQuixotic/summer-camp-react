import * as React from "react";
import { 
    LakeCocoPic
  } from "../../assets";
import { Layout } from "../../containers";
import './style.css';

class Carousel extends React.Component {
    state = {
       loading: true,
       thing: false
    }

  render() {
    return (
        <Layout {...this.state}>
<div className='carousel'>
        <LakeCocoPic />
      </div>
        </Layout>
      
    );
  }
}

export default Carousel;