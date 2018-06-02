import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import {AppRouter} from '../../components';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppRouter  />
        </div>
      </Router>
    );
  }
}
