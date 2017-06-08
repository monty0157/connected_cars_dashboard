import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import MainLayout from '../layouts/MainLayout';
import CarsContainer from '../components/Cars';

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
      <IndexRedirect to="/cars" />
      <Route path="/cars" component={CarsContainer} />
      <Route path="/profile" />
    </Route>
  </Router>
);

Routes.propTypes = {
  browserHistory: React.PropTypes.object,
};

export default Routes;
