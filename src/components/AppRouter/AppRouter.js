import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

import './AppRouter.css';
import {AppBar, LunchTyme} from '../../components';

export default class AppRouter extends Component {
  routes = {
    appBar: ({match}) =>
      match.params.id === undefined ? (
        <AppBar onFeed={true} />
      ) : (
        <AppBar onFeed={false} />
      ),
    feed: ({match}) =>
      match.params.id === undefined ? (
        <LunchTyme />
      ) : (
        <LunchTyme dataId={match.params.id} />
      ),
    notFound: () => (
      <Header as="h1" content="404: Page not found." textAlign="center" />
    ),
  };

  render() {
    return (
      <div className="AppRouter">
        <Route render={this.routes.appBar} forceRefresh={true} />
        <Switch>
          <Route path="/:id?" render={this.routes.feed} replace />
          <Route render={this.routes.notFound} />
        </Switch>
      </div>
    );
  }
}
