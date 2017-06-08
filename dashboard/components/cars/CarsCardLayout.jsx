import React from 'react';
import { Layout, Menu } from 'antd';
import { createContainer } from 'meteor/react-meteor-data';

import Wrapper from '../Wrapper';
import CarsCollection from '../../api/Collections'
import CarsSidebar from './CarsSidebar';

const { Content } = Layout;

const CarsCardLayout = function CarsCardLayout({findCars, children, loading}) {
  if(loading) return null;

  return(
    <Wrapper>
      <Layout>
        <div className="flex" style={{ padding: '24px 0', background: '#fff' , marginLeft: 85, marginRight: 85}}>
          <CarsSidebar
            findCars={findCars}
            loading={loading}
          />
          <Content style={{ padding: '0 24px', minHeight: 400 }}>
            {children ?
              React.cloneElement(children, { findCars: findCars })
              :
              <h1>Select Your Car On The Left</h1>
            }
          </Content>
        </div>
      </Layout>
    </Wrapper>
  )
}

const CarsCardLayoutContainer = createContainer(() => {
  const subscribe = Meteor.subscribe('cars.all_cars');

  const findCars = CarsCollection.find().fetch();

  return {
    findCars,
    loading: !subscribe.ready(),
  };
}, (CarsCardLayout))

export default CarsCardLayoutContainer;
