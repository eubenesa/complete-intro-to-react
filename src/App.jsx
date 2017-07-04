// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';

import preload from '../data.json';

import store from './store';

import AsyncRoute from './AsyncRoute';

const FourOFour = () => <h1>404</h1>;

const App = () =>
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props =>
            <AsyncRoute props={props} loadingPromise={import('./Landing')} />}
        />
        <Route
          path="/search"
          component={props =>
            <AsyncRoute
              props={Object.assign({ shows: preload.shows }, props)}
              loadingPromise={import('./Search')}
            />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) =>
            <AsyncRoute
              props={Object.assign(
                {
                  show: preload.shows.find(
                    show => props.match.params.id === show.imdbID
                  ),
                  match: {}
                },
                props
              )}
              loadingPromise={import('./Details')}
            />}
        />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </Provider>;

export default App;
