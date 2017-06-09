import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import MainLayout from '../layouts/MainLayout';
import CarsCardLayoutContainer from '../components/cars/CarsCardLayout';
import CarsContent from '../components/cars/CarsContent';
import InfoPageCompose from '../components/cars/InfoPage';

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
      <Route path="/cars" component={CarsCardLayoutContainer}>
        <IndexRedirect to="info_page" />
        <Route path="info_page" component={InfoPageCompose} />
        <Route path=":_id" component={CarsContent} />
      </Route>

      <Route path="/profile" />
      <Route path="/settings" />
    </Route>
  </Router>
);

Routes.propTypes = {
  browserHistory: React.PropTypes.object,
};

export default Routes;
