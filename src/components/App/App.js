import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import {AppBar, Footer, AppRouter} from '../../components';

export default class App extends Component {
  state = {
    onLunchFeed: false
  }
  handleOnLunchFeed = () => {
    this.setState({
      onLunchFeed: !this.state.onLunchFeed
    })
    console.log('action fired')
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <AppBar goingToFeed={this.handleOnLunchFeed}/>
          <AppRouter goingToFeed={this.handleOnLunchFeed}/>
          <Footer goingToFeed={this.handleOnLunchFeed}/>
        </div>
      </Router>
    );
  }
}
