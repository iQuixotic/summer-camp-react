import React from "react";
import { StupidLayout } from '../../containers';

class Img extends React.Component {
    
  constructor(props) {
    super(props);
    // this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.state = { loading: true };
  }

//   componentWillMount = () => {
//       this.setState({ loading: true })
//   }

//     componentDidUpdate = () => {
//       this.setState({ loading: false })
//   }
  handleImageLoaded = () => {
      console.log('')
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
          onLoad={this.handleImageLoaded.bind(this)}
          onError={() => console.log('huh')}
          alt='#'
        />
      </StupidLayout>
    );
  }
}
export default Img;