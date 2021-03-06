import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor'

import TopBar from '../components/TopBar';
import Head from '../components/Head';
import Sidebar from '../components/Sidebar';

const MainLayout = function MainLayout({children}) {

  return(
    <div className="h-100">
      <Head />
      <TopBar />
      <div className="flex height__90">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default MainLayout;
