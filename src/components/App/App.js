import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import {AppBar, Footer, AppRouter} from '../../components';

export default class App extends Component {
  state = {
    onLunchFeed: false
  }

  onFeedToggle = () => {
    this.setState({
      onLunchFeed: !this.state.onLunchFeed
    })
    console.log(`LunchFeed = ${this.state.onLunchFeed}`)
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <AppBar
           onFeedToggle={this.onFeedToggle} />
          <AppRouter
           onFeedToggle={this.onFeedToggle}/>
          <Footer
           onFeedToggle={this.onFeedToggle}/>
        </div>
      </Router>
    );
  }
}
