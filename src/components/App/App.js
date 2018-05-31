import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Link, Switch, Route} from 'react-router-dom';

import './App.css';
import {AppBar, Footer, AppRouter, LunchTymeFeed} from '../../components';

const notFound = () => (
  <h1>404: Page not found.</h1>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar/>
          <AppRouter />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
