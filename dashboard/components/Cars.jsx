import React from 'react';
import { Layout, Card, Menu, Icon } from 'antd';
import { createContainer } from 'meteor/react-meteor-data';

import Wrapper from './Wrapper';
import CarsCollection from '../api/Collections'

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

const Cars = function Cars({findCars}) {

    console.log(findCars)
  return(
    <Wrapper>
      <Layout>
        <Layout style={{ padding: '24px 0', background: '#fff' , marginLeft: 85, marginRight: 85}}>
          <Sider width={150} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              className="h-100"
            >
            {findCars.map(cars =>
              <MenuItem key={cars._id}>{cars.model}</MenuItem>
            )}
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 400 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  )
}

const CarsContainer = createContainer(() => {
  const subscribe = Meteor.subscribe('cars.all_cars');

  const findCars = CarsCollection.find({}).fetch();

  return {
    findCars
  };
}, (Cars))

export default CarsContainer;
