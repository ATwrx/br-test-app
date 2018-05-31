import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Switch, Route} from 'react-router-dom';

import './AppRouter.css';
import {LunchTymeFeed} from '../../components'

const notFound = () => (
  <h2>
    <b>404</b>
    : Page not found.
  </h2>
)
const routes = {
  "lunchTyme": ({match}) => (match.params.restaurant === undefined
    ? <LunchTymeFeed/>
    : <h2>Restaurant: {match.params.restaurant}</h2>),
  "internets": ({match, history}) => (match.params.url === undefined
    ? <h2>BR contact page</h2>
    : <h2>URL: {match.params.url}</h2>),
  "home": () => (
    <h1>Welcome to Lunch Tyme</h1>
  )
};

export default class AppRouter extends Component {
  render() {
    return (
      <Switch className='App-Body'>
        <Route exact path='/' render={routes.home}/>
        <Route path="/lunchtyme/:restaurant?" render={routes.lunchTyme}/>
        <Route path="/internets/:url?" render={routes.internets}/>
        <Route component={notFound}/>
      </Switch>
    )
  }
};
