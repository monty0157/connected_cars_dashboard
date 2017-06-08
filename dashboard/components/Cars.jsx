import React from 'react';
import { Layout, Card, Menu, Icon } from 'antd';
import Wrapper from './Wrapper';
import CarsCollection from '../api/Collections'

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const Cars = function Cars() {

  const cars = CarsCollection.findOne();
  console.log(cars)
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
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
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

export default Cars;
