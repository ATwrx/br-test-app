import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Link, Switch, Route} from 'react-router-dom';

import './App.css';
import {AppBar, Footer} from '../../components';

const routes = {
  "lunchTyme": ({match}) => (match.params.restaurant === undefined
    ? <h2>Welcome Home</h2>
    : <h2>Restaurant: {match.params.restaurant}</h2>),
  "internets": ({match}) => (match.params.url === undefined
    ? <h2>BR contact page</h2>
    : <h2>URL: {match.params.url}</h2>)
};

const notFound = () => (
  <h1>404: Page not found.</h1>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar/>
          <div className="App-Body">
            <Switch>
              <Route path="/lunchtyme/:restaurant?" render={routes.lunchTyme}/>
              <Route path="/internets/:url?" render={routes.internets}/>
              <Route component={notFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
