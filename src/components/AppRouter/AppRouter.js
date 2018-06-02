import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Header} from 'semantic-ui-react';
import './AppRouter.css';
import {LunchTyme} from '../../components';

//  This component is mainly here for in case the app ever needs to grow future
// growth of the app

const routes = {
  feed: ({match}) => match.params.id === undefined
    ? (<LunchTyme/>)
    : (<LunchTyme dataId={match.params.id}/>),
  notFound: () => (<Header as="h1" content="404: Page not found." textAlign="center"/>)
};

export default class AppRouter extends Component {
  render() {
    return (
      <div className="AppRouter">
        <Switch>
          <Route path="/" render={routes.feed} replace/>
          <Route render={routes.notFound}/>
        </Switch>
      </div>
    );
  }
}
