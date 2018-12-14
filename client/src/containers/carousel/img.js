import React from "react";
import { StupidLayout } from '../../containers';

class Img extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.state = { loading: false };
  }

  componentWillMount = () => {
      this.setState({ loading: true })
  }

  handleImageLoaded(e) {
      console.log(e)
      console.log('hello shit')
      console.log(this.state)
    this.setState({ loading: false });
    console.log(this.state)
  }

  render() {
    return (
      <StupidLayout {...this.state}>
        <img
          src={this.props.src}
          onLoad={this.handleImageLoaded}
          alt='#'
        />
        {/* <h1>{this.state.loading}</h1> */}
      </StupidLayout>
    );
  }
}
export default Img;