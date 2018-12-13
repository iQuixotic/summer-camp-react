import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './base.css';

import {
  Main,
  ActivitiesPage,
  CalendarPage,
  ContactPage
} from '../containers';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path='/' component={Main} />
          <Route exact={true} path='/activities' component={ActivitiesPage} />
          <Route exact={true} path='/calendar' component={CalendarPage} />
          <Route exact={true} path='/contact' component={ContactPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;