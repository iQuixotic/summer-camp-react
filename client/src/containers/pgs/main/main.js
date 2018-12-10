import * as React from "react";
import { 
  LakeCocoPic, LakeStarePic, CampfireCirclePic
} from "../../../assets";
import { Layout } from "../../../containers";
// import { API } from "../../../utils";

import './style.css';

// let all, history, mine;
class Main extends React.Component {
  constructor(props) {
    super(props)
    // this.changeHandler = this.changeHandler.bind(this)
    this.state = {
        loading: false
    }
    this.componentWillMount = () => {
        // this.getDBstuff()
        // this.getHistory()
    }
    this.componentDidMount = () => {
      this.setState({ loading: false })
    }
  }

  render() {
    let mySignInForm = ( 
      <div className="row card my-sign-in-form">
        <form className="col s12">
          
          {/* materialize email input */}
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>

          {/* materialize password input */}
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>

          {/* materialize buttons */}
          <div className='row container flex'>
            <div className='button-spacing'>
              <a class="waves-effect waves-light btn-small" href='#'>Login</a>
            </div>
            <div className='button-spacing'>
              <a class="waves-effect waves-light btn-small" href='#'>Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    )
    
    return (
      <Layout>
        <LakeCocoPic />        
        <div className='container main-pg margin-top'>
          {mySignInForm}          
          <div className='center'>
            <h2>Welcome to Camp!!</h2>

            {/* Picture row 1 starts here */}
            <div className='row flex'>
              <div className='half'>
                <LakeStarePic />
              </div>
              <div className='half'>
                <p></p>
              </div>
            </div>

            {/* Picture row 2 starts here */}
            <div className='row flex'>
              <div className='half'>
                <p></p>
              </div>
              <div className='half'>
                < CampfireCirclePic />
              </div>
            </div>

            {/* Paragraphs block starts here */}
            <div className='row'>

            </div>
          </div>
        </div>
    </Layout>
    );
  }
}


export default Main;