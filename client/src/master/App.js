import React, { Component } from 'react';
// import './base.css';

import { Main, ActivitiesPage } from '../containers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ActivitiesPage />
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';

// import { BrowserRouter as Router, Route } from 'react-router-dom';

// // import './base.css';

// import {
//   Main,
//   ActivitiesPage 
// } from '../containers';


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Route exact={true} path='/' Component={Main} />
//           <Route exact={true} path='/activities' Component={ActivitiesPage} />
//         </div>
//       </Router>
      
//     );
//   }
// }

// export default App;