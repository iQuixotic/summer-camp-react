import React, { Component } from "react";
import { Loader } from "../../containers";
import './style.css';

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class StupidLayout extends Component {
  

  render() {
    return (
        <div className='Layout'>
            {this.props.children}
        </div>    
    );
  }
}

export default Loader(StupidLayout);