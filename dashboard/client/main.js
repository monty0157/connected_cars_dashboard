import 'react-hot-loader/patch';
import React from 'react';
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Routes from '../routes/routes.jsx';

Meteor.startup((e) => {
    render(
      <Routes browserHistory={ browserHistory }/>,
      document.body
    );
});
