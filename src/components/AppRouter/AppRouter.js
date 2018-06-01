import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './AppRouter.css';
import {LunchTyme} from '../../components'

const notFound = () => (
  <h2>
    <b>404</b>
    : Page not found.
  </h2>
)
const routes = {
  "lunchTyme": ({match}) => (match.params.id === undefined 
    ? <LunchTyme viewingFeed={true} /> 
    : <LunchTyme viewingFeed={false} dataId={match.params.id} /> ),
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
      <div className='AppRouter'>
        <Switch>
          <Route exact path='/' render={routes.home}/>
          <Route path="/lunchtyme/:id?" render={routes.lunchTyme} replace />
          <Route path="/internets/:url?" render={routes.internets}/>
          <Route component={notFound}/>
        </Switch>
      </div>
    )
  }
};
