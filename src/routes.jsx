import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './script-loader';

const Home = Loadable({
  loader: () => import('./Screens/Home'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('./Screens/Typography'),
  loading: Loading,
});

export default () => (
  <Switch>    
    <Route path="/" exact component={Home} />
    <Route path="/typography" exact component={Typography} />
  </Switch>
);


