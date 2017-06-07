import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import MainLayout from '../layouts/MainLayout';

const requireAuth = (nextState, replace) => {
  if (!Meteor.userId() && !Meteor.loggingIn()) {
    replace({
      pathname: '/login'
    })
  }
}

const Routes = ({browserHistory}) => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <Route path="/cars" />
      <Route path="/profile" />
    </Route>
  </Router>
);

Routes.propTypes = {
  browserHistory: React.PropTypes.object,
};

export default Routes;
