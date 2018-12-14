import * as React from "react";
import { 
  LakeStarePic, CampfireCirclePic, LakeCocoImg, JumpingInLakeImg, CanoesImg, CabinsImg
} from "../../../assets";
import  M from 'materialize-css';
import { Carousel } from "../../../components";
import { Layout } from "../../../containers";
// import { API } from "../../../utils";
import './style.css';

// materialize carousel
// var instance = M.Carousel.init({
//   fullWidth: true
// });

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: true, 
        imagesLoaded: false
    }
    this.componentWillMount = () => {
      M.Carousel.init({
        fullWidth: true
      });
    }
    this.componentDidMount = () => {
      this.setState({ imagesLoaded: false, loading: true })
    } 
  }

    imageLoadedHandler = () => {
      this.setState({ imagesLoaded: true, loading: false })
      console.log('image loaded')
      console.log(this.state)

    }
    
  getMyState = () => {
    console.log(this.state)
  }

  render() {
    let mySignInForm = ( 
      <div className="row card my-sign-in-form">
        <form className="col s12">
          <div className="row">
            <h3>Login</h3>
          </div>
          
          {/* materialize email input */}
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          {/* materialize password input */}
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          {/* materialize buttons */}
          <div className='row container flex'>
            <div className='button-spacing'>
              <a className="waves-effect waves-light btn-small" href='/'>Login</a>
            </div>
            <div className='button-spacing'>
              <a className="waves-effect waves-light btn-small" href='/'>Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    )
    
    return (
      <Layout {...this.state}>
        {/* <Carousel 
        load={this.imageLoadedHandler}
        /> */}
        
        <div className="carousel carousel-slider">
        {/* <img className="carousel-item" alt='#' onLoad={this.imageLoadedHandler} src={LakeCocoImg}/> */}
            <a className="carousel-item" href="#one!"><img alt='#' onLoad={this.imageLoadedHandler} src={LakeCocoImg}/></a>
            <a className="carousel-item" href="#two!"><img alt='#' src={CabinsImg}/></a>
            <a className="carousel-item" href="#three!"><img alt='#' src={CanoesImg}/></a>
            <a className="carousel-item" href="#four!"><img alt='#' src={JumpingInLakeImg}/></a>
        </div>
        <div className='page-edge main-pg margin-top'>
          <div className='container'>
            {mySignInForm}  
          </div>                  
          <div className='center'>
          <button onClick={this.getMyState}>getMyState Button</button>
            <h2>Welcome to Camp!!</h2>

            {/* Picture row 1 starts here */}
            <div className='row flex'>
              <div className='half'>
                <LakeStarePic />
              </div>
              <div className='half'>
                <div className='camp-info'>
                  "Make Friendships that will last a Lifetime."
                </div>
              </div>
            </div>

            {/* Picture row 2 starts here */}
            <div className='row flex'>
              <div className='half'>
                <div className='camp-info'>
                  "Nightly Campfire Sing-alongs and Ghost Stories."
                </div>
              </div>
              <div className='half'>
                < CampfireCirclePic />
              </div>
            </div>

            {/* Paragraphs block starts here */}
            <div className='row'>
              <p className='main-page-info'>Birman savannah sphynx tomcat so ragdoll cougar. Bombay persian. Himalayan ocelot. Singapura bengal. Cornish rex. Manx. Jaguar. Russian blue donskoy thai burmese cougar. Malkin. Persian puma abyssinian norwegian forest for devonshire rex or birman. Sphynx persian. Havana brown donskoy but tomcat and turkish angora puma or tabby. Malkin. Scottish fold british shorthair so burmese burmese. Jaguar kitten ocelot american bobtail for cougar, for kitty lynx. Tiger lion burmese or bobcat russian blue. Panther singapura thai. Tabby jaguar. Havana brown munchkin or grimalkin british shorthair british shorthair. <br/> <br />
              That box? i can fit in that box spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce it's 3am, time to create some chaos spread kitty litter all over house scratch the box poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls. Cats making all the muffins meow to be let out, sniff other cat's butt and hang jaw half open thereafter yet meow in empty rooms groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Pee in the shoe pet me pet me don't pet me curl into a furry donut for annoy kitten brother with poking and relentlessly pursues moth but stare at ceiling light, or small kitty warm kitty little balls of fur. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce grab pompom in mouth and put in water dish, lick butt lick human with sandpaper tongue i love cuddles stare at imaginary bug. Present belly, scratch hand when stroked plays league of legends, so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Always hungry stare at ceiling, so ooooh feather moving feather! chase the pig around the house but soft kitty warm kitty little ball of furr scratch the box. The door is opening! how exciting oh, it's you, meh attack like a vicious monster but purr kitty scratches couch bad kitty and murf pratt ungow ungow, but ears back wide eyed.</p>
            </div>
          </div>
        </div>
    </Layout>
    );
  }
}

export default Main;